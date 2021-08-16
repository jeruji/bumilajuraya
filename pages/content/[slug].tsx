import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Footer from "components/Footer";
import HeadTitle from "components/HeadTitle";
import DetectWidth from "components/DetectWidth";
import BlogContent from "components/BlogContent";
import { getAllPages, getPageBySlug } from "lib/api";
import { Container, Image, Col, Row } from "react-bootstrap";
import { urlFor } from "lib/api";

export default function ContentBySlug({ pages }) {
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);
  const [pageSlug] = useState(pages ? pages.slug : "");

  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
    if (pages.slug && windowWidth <= 1024) {
      if (pageSlug !== pages.slug) {
        window.location.reload();
      }
    }
  }, [pages]);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  if (!router.isFallback && !pages?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <>
        <DetectWidth />
        <Container className="mw-100">
          <span>Loading</span>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <HeadTitle
        title={`Bumi Laju Raya - ${pages.name}`}
        description="Bumi Laju Raya - Content Page"
      />
      <DetectWidth />
      <Container
        className={windowWidth > 1024 ? "mw-100" : "mw-100 bg-img-mobile"}
      >
        {windowWidth > 1024 && (
          <Col style={{ position: "relative" }}>
            <span className="title-content">{pages.name}</span>
            <Col
              lg="4"
              className="calibri-font white-color text-image-positioning"
            >
              {pages.description && <BlogContent content={pages.description} />}
            </Col>
            <Col>
              <Image
                className="w-100"
                src={urlFor(pages.images).url()}
                alt={pages.description}
              />
            </Col>
          </Col>
        )}
        {windowWidth <= 1024 && (
          <>
            <Row>
              <Col>
                <Image
                  className="w-100"
                  src={urlFor(pages.images_mobile).url()}
                  alt={pages.description}
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ marginTop: "20px" }}>
                <span className="title-mobile">{pages.name}</span>
                <Col
                  style={{ textAlign: "justify", marginTop: "20px" }}
                  className="calibri-font"
                >
                  {pages.description && (
                    <BlogContent content={pages.description} />
                  )}
                </Col>
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const pages = await getPageBySlug(params.slug);
  return {
    props: { pages },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pages = await getAllPages();
  const paths = pages?.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}
