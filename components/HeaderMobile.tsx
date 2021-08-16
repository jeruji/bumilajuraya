import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Col,
  Row,
  Image,
  Form,
  FormControl,
} from "react-bootstrap";
import { useState, useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import Search from "public/images/Search.svg";

export default function HeaderMobile() {
  const [searchValue, setSearchValue] = useState("");
  const [showBgHeader, setShowBgHeader] = useState(true);

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        variant="dark"
        style={{ position: showBgHeader ? "relative" : "fixed" }}
        className={showBgHeader ? "bg-mobile-header" : "bg-mobile-color"}
        onToggle={() => setShowBgHeader(!showBgHeader)}
      >
        <Container>
          <Col xs={{ span: 9 }}>&nbsp;</Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="mobile-header">
            <Nav>
              <Link href="/">
                <Nav.Link as="div" className="cursor-pointer">
                  Home
                </Nav.Link>
              </Link>
              <NavDropdown
                className="link-mobile-header"
                title="About"
                id="about"
                as="span"
                show={true}
              >
                <Link href="/content/at-glance">
                  <NavDropdown.Item as="div">At Glance</NavDropdown.Item>
                </Link>
                <Link href="/content/vision-mission">
                  <NavDropdown.Item as="div">Vision, Mission</NavDropdown.Item>
                </Link>
                <Link href="/content/values-culture">
                  <NavDropdown.Item as="div">Values, Culture</NavDropdown.Item>
                </Link>
                <Link href="/content/customer">
                  <NavDropdown.Item as="div">Customer</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                className="link-mobile-header"
                title="Services"
                id="services"
                as="span"
                show={true}
              >
                <Link href="/content/chartering">
                  <NavDropdown.Item as="div">Chartering</NavDropdown.Item>
                </Link>
                <Link href="/content/trading">
                  <NavDropdown.Item as="div">Trading</NavDropdown.Item>
                </Link>
                <Link href="/content/shipping-agency">
                  <NavDropdown.Item as="div">Shipping Agency</NavDropdown.Item>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="bg-gray">
        <Row>
          <Col>
            <Row>
              <Col
                xs={{ span: 10 }}
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Form className="mr-10 vertical-center" inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="d-inline-block"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </Form>
              </Col>
              <Col xs={{ span: 2 }}>
                <Image
                  src={Search}
                  alt="Search"
                  className="cursor-pointer"
                  style={{ top: "30%", position: "relative" }}
                  onClick={() => {
                    Router.push(`/search/${searchValue}`);
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
