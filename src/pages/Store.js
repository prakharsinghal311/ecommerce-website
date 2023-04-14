import React, { useState } from "react";
import Products from "../components/Products/Products";
import HeaderCartButton from "../components/Layout/HeaderCartButton";
import Cart from "../components/Cart/Cart";
import { Navbar, Container } from "react-bootstrap";

const Store = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (event) => {
    setCartIsShown(false);
  };
  return (
    <>
      <Container>
        <Navbar>
          <HeaderCartButton onClick={showCartHandler} />
        </Navbar>
        {cartIsShown && <Cart onBack={hideCartHandler} />}
        <Products />
      </Container>
    </>
  );
};

export default Store;
