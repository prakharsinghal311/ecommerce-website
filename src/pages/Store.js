import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Store = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>HOME</Navbar.Brand>
          <Navbar.Brand>STORE</Navbar.Brand>
          <Navbar.Brand>ABOUT</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Store;
