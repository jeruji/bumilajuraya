import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Search from "public/images/Search.svg";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container className="bg-gray mw-100 mt-3 header-z-position">
      <Row className="margin-center">
        <Col lg="3" xs="4">
          <Image src="/images/logo-blr-50.png" className="p-4 width-logo" />
        </Col>
        <Col lg={{ span: 4, offset: 2 }}>
          <Nav className="vertical-center">
            <Link href="/">
              <Nav.Link as="div" className="cursor-pointer">
                Home
              </Nav.Link>
            </Link>
            <NavDropdown id="about" title="About">
              <Link href="/content/at-glance">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  At Glance
                </NavDropdown.Item>
              </Link>
              <Link href="/content/vision-mission">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  Vision, Mission
                </NavDropdown.Item>
              </Link>
              <Link href="/content/values-culture">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  Values, Culture
                </NavDropdown.Item>
              </Link>
              <Link href="/content/major-customer">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  Major Customer
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown id="services" title="Services">
              <Link href="/content/chartering">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  Chartering
                </NavDropdown.Item>
              </Link>
              <Link href="/content/trading">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  Trading
                </NavDropdown.Item>
              </Link>
              <Link href="/content/shipping-agency">
                <NavDropdown.Item
                  as="div"
                  className="cursor-pointer calibri-font"
                >
                  Shipping Agency
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link href="/content/fleet">
              <Nav.Link as="div" className="cursor-pointer">
                Fleet
              </Nav.Link>
            </Link>
            <Link href="/content/contact-us">
              <Nav.Link as="div" className="cursor-pointer">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Col>
        <Col lg={{ span: 2 }}>
          <Form className="vertical-center" inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="d-inline-block"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>
        </Col>
        <Col>
          <Image
            src={Search}
            alt="Search"
            className="cursor-pointer vertical-center"
            onClick={() => {
              Router.push(`/search/${searchValue}`);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
