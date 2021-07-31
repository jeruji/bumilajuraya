import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Header from "components/Header";
import Footer from "components/Footer";
import BlogContent from "components/BlogContent";
import { getAllPages, getPageBySlug } from "lib/api";
import { Container, Image, Col } from "react-bootstrap";
import { urlFor } from "lib/api";

export default function ContentBySlug({ pages }) {
  const router = useRouter();

  if (!router.isFallback && !pages?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <>
        <Header />
        <Container className="mw-100">Loading</Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container className="mw-100">
        <Col>
          <Col lg="4" className="calibri-white text-image-positioning">
            {pages.description && <BlogContent content={pages.description} />}
          </Col>
          <Col>
            <span className="title-content">{pages.name}</span>
            <Image
              className="w-100"
              src={urlFor(pages.images).url()}
              alt={pages.description}
            />
          </Col>
        </Col>
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
