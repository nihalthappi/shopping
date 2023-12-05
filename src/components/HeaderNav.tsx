import { Col, Nav, Navbar, Row } from "react-bootstrap";
import "./styles/HeaderNav.css"
export default function HeaderNav() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Row xs="auto">
            <Col className="navlink-col">
              <Nav.Link className="navlink-a" href="#">
                Home
              </Nav.Link>
            </Col>
            <Col className="navlink-col">
              <Nav.Link className="navlink-a" href="#">
                Product Type
              </Nav.Link>
            </Col>
            <Col className="navlink-col">
              <Nav.Link className="navlink-a" href="#">
                Cable Assemblies
              </Nav.Link>
            </Col>
            <Col className="navlink-col">
              <Nav.Link className="navlink-a" href="#">
                Fiber Cable Assemblies
              </Nav.Link>
            </Col>
            <Col className="navlink-col">
              <Nav.Link className="navlink-a" href="#">
                MPO Cable Assemblies
              </Nav.Link>
            </Col>
            <Col className="navlink-col">
              <Nav.Link className="navlink-a" href="#">
                ARGRPRG7R
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
