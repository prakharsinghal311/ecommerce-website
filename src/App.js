import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products/Products";
import { Container, Navbar } from "react-bootstrap";
import HeaderCartButton from "./components/Layout/HeaderCartButton";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CardProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (event) => {
    setCartIsShown(false);
  };

  return (
    <>
      <CardProvider>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand>HOME</Navbar.Brand>
            <Navbar.Brand>STORE</Navbar.Brand>
            <Navbar.Brand>ABOUT</Navbar.Brand>
            <HeaderCartButton onClick={showCartHandler} />
          </Container>
        </Navbar>
        {cartIsShown && <Cart onBack={hideCartHandler} />}
        <Products />
      </CardProvider>
    </>
  );
};

export default App;
