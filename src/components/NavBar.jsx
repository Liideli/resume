import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Resume</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://liideli.github.io//about">About</Nav.Link>
          <Nav.Link href="https://liideli.github.io//contact">Contact</Nav.Link>
          <Nav.Link href="https://liideli.github.io//skills">Skills</Nav.Link>
          <Nav.Link href="https://liideli.github.io//work">Work Experience</Nav.Link>
          <Nav.Link href="https://liideli.github.io//education">Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
