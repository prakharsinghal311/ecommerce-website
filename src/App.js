import React from "react";
import "./App.css";
import Products from "./components/Products";
import { Container, Navbar } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>HOME</Navbar.Brand>
          <Navbar.Brand>STORE</Navbar.Brand>
          <Navbar.Brand>ABOUT</Navbar.Brand>
        </Container>
      </Navbar>
      <Products />
    </>
  );
};

export default App;
