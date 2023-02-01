import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Resume</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/work">Work Experience</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
