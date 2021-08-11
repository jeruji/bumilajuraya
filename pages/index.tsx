import { useState, useEffect, useLayoutEffect } from "react";
import { Container, Row, Image } from "react-bootstrap";
import DetectWidth from "components/DetectWidth";
import ImageCarousel from "components/ImageCarousel";
import Footer from "components/Footer";
import Link from "next/link";
import { getCarouselImages } from "lib/api";

export default function Home({ images }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <>
      <DetectWidth />
      <Container className="mw-100">
        <ImageCarousel images={images[0].images} />
      </Container>
      {windowWidth <= 1024 && (
        <>
          <Container className="mt-3">
            <div>
              <div
                style={{
                  width: "33%",
                  display: "inline-block",
                  verticalAlign: "top",
                  padding: "2px",
                }}
              >
                <div>
                  <Link href="/content/at-glance">
                    <Image
                      src="/images/mobile-down-about-us.png"
                      style={{ width: "100%" }}
                    />
                  </Link>
                </div>
                <div style={{ marginTop: "4px" }}>
                  <Link href="/content/fleet">
                    <Image
                      src="/images/mobile-down-fleet.png"
                      style={{ width: "100%" }}
                    />
                  </Link>
                </div>
              </div>
              <div
                style={{
                  width: "66%",
                  display: "inline-block",
                  padding: "2px",
                  float: "right",
                }}
              >
                <Link href="/content/chartering">
                  <Image
                    src="/images/mobile-down-services.png"
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
            <Row style={{ marginTop: "2px" }}>
              <Link href="/content/contact-us">
                <Image src="/images/mobile-down-contact-us.png" />
              </Link>
            </Row>
          </Container>
        </>
      )}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const images = await getCarouselImages("carousel");
  return {
    props: { images },
    revalidate: false,
  };
}
