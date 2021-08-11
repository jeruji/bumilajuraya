import { useState, useEffect, useLayoutEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FB from "public/images/logo-fb.svg";
import IG from "public/images/logo-ig.svg";
import TW from "public/images/logo-tw.svg";
import WA from "public/images/logo-wa.svg";

export default function Footer() {
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
    <Container className="bg-gray mw-100 p-4 mt-5 mb-3">
      <Row>
        {windowWidth > 1024 && (
          <>
            <Col style={{ display: "table" }}>
              <span
                style={{ display: "table-cell", verticalAlign: "middle" }}
                className="text-14 footer-text"
              >
                © 2021, PT. Bumi Laju Raya
              </span>
            </Col>
            <Col lg={{ span: 2 }}>
              <Image
                src={IG}
                className="mx-1"
                style={{ width: "40px", height: "40px" }}
                alt="Instagram Bumi Laju Raya"
              />
              <Image
                src={FB}
                className="mx-1"
                style={{ width: "40px", height: "40px" }}
                alt="Facebook Bumi Laju Raya"
              />
              <Image
                src={TW}
                className="mx-1"
                style={{ width: "40px", height: "40px" }}
                alt="Twitter Bumi Laju Raya"
              />
              <Image
                src={WA}
                className="mx-1"
                style={{ width: "40px", height: "40px" }}
                alt="Whatsapp Bumi Laju Raya"
              />
            </Col>
          </>
        )}
        {windowWidth <= 1024 && (
          <>
            <div style={{ display: "contents" }}>
              <div className="margin-center">
                <Image
                  src={IG}
                  className="mx-1"
                  style={{ width: "40px", height: "40px" }}
                  alt="Instagram Bumi Laju Raya"
                />
                <Image
                  src={FB}
                  className="mx-1"
                  style={{ width: "40px", height: "40px" }}
                  alt="Facebook Bumi Laju Raya"
                />
                <Image
                  src={TW}
                  className="mx-1"
                  style={{ width: "40px", height: "40px" }}
                  alt="Twitter Bumi Laju Raya"
                />
                <Image
                  src={WA}
                  className="mx-1"
                  style={{ width: "40px", height: "40px" }}
                  alt="Whatsapp Bumi Laju Raya"
                />
              </div>
            </div>
            <div style={{ display: "contents" }}>
              <div className="margin-center" style={{ marginTop: "10px" }}>
                <span className="text-14 footer-text">
                  © 2021, PT. Bumi Laju Raya
                </span>
              </div>
            </div>
          </>
        )}
      </Row>
    </Container>
  );
}
