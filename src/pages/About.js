import BgColorExample from "../components/UI/CardUI";
import { Container, Navbar } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>HOME</Navbar.Brand>
          <Navbar.Brand>STORE</Navbar.Brand>
          <Navbar.Brand>ABOUT</Navbar.Brand>
        </Container>
      </Navbar>
      <BgColorExample />
    </>
  );
}

export default AboutPage;
