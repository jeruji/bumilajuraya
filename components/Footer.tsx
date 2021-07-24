import { Container, Row, Col, Image } from "react-bootstrap";
import FB from "public/images/logo-fb.svg";
import IG from "public/images/logo-ig.svg";
import TW from "public/images/logo-tw.svg";
import WA from "public/images/logo-wa.svg";

export default function Footer() {
  return (
    <Container className="bg-gray mw-100 p-4 mt-5">
      <Row>
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
            className="mx-2"
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
      </Row>
    </Container>
  );
}
