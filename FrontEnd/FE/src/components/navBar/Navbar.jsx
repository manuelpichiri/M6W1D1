import "./navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarPage = () => {
  return (
    <>
      <Navbar bg="dark rounded-3">
        <Container className="gap-3">
          <Link to={`/Homepage`}>BlogSite</Link>
          <Nav className="me-auto gap-3">
            <Link>Prova1</Link>
            <Link>Prova2</Link>
            <Link>Prova3</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
