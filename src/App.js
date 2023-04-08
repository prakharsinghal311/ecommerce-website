import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import { Container, Navbar } from "react-bootstrap";
import HeaderCartButton from "./components/Layout/HeaderCartButton";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CartProvider";
import AboutPage from "./pages/About";
import BgColorExample from "./components/UI/CardUI";
import Store from "./pages/Store";

const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/store", element: <Store /> },
  { path: "/", element: <Store /> },
]);

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
      <RouterProvider router={router} />
      <CardProvider>
        <Store />
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <HeaderCartButton onClick={showCartHandler} />
          </Container>
        </Navbar>
        <BgColorExample />
        {cartIsShown && <Cart onBack={hideCartHandler} />}
        <Products />
      </CardProvider>
    </>
  );
};

export default App;
