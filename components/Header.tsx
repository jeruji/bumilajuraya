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
import Search from "public/images/Search.svg";

export default function Header() {
  return (
    <Container className="bg-gray mw-100">
      <Row className="margin-center">
        <Col lg="3" xs="4">
          <Image src="/images/logo-blr-50.png" className="p-4 width-logo" />
        </Col>
        <Col lg={{ span: 4, offset: 2 }}>
          <Nav className="vertical-center">
            <Nav.Link as="div">Home</Nav.Link>
            <NavDropdown id="about" title="About">
              <NavDropdown.Item as="div">Company Profile</NavDropdown.Item>
              <NavDropdown.Item as="div">Vision, Mission</NavDropdown.Item>
              <NavDropdown.Item as="div">Culture</NavDropdown.Item>
              <NavDropdown.Item as="div">Company Milestone</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="services" title="Services">
              <NavDropdown.Item as="div">
                Commercial Ship Operator
              </NavDropdown.Item>
              <NavDropdown.Item as="div">The Fleet</NavDropdown.Item>
              <NavDropdown.Item as="div">Customer Assistance</NavDropdown.Item>
              <NavDropdown.Item as="div">Major Customer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as="div">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col lg={{ span: 2 }}>
          <Form className="vertical-center" inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="d-inline-block"
            />
          </Form>
        </Col>
        <Col>
          <Image
            src={Search}
            alt="Search"
            className="pointer-link vertical-center"
          />
        </Col>
      </Row>
    </Container>
  );
}
