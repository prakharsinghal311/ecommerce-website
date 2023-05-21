import React, { useState, useEffect, useContext } from "react";
import CartCntx from "../store/cart-context";
import Products from "../components/Products/Products";
import HeaderCartButton from "../components/Layout/HeaderCartButton";
import Cart from "../components/Cart/Cart";
import { Navbar, Container } from "react-bootstrap";
import axios from "axios";

const Store = () => {
  const cartcntx = useContext(CartCntx);

  const emailid = localStorage.getItem("email");
  const newemailid = emailid.replace("@", "");
  const useremailid = newemailid.replace(".", "");

  const [cartIsShown, setCartIsShown] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/d69be10218474dfbb3cbdb5f61501239/cart${useremailid}`
      )
      .then((response) => {
        //console.log(response.data);

        // for(let i=0;i<response.data.length;i++){

        // }

        response.data.forEach((product, i) => {
          console.log(product);
          cartcntx.items[i] = product;
          // cartcntx.id = product.id;
          // cartcntx.title = product.title;
          // cartcntx.price = product.price;
          // cartcntx.imageUrl = product.imageUrl;
          // cartcntx.productId = product.productId;
          // cartcntx.quantity = product.quantity;
          //console.log(cartcntx);
        });

        //console.log(cartcntx);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showCartHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (event) => {
    setCartIsShown(false);
  };

  let quantity = 0;

  cartcntx.items.forEach((item) => {
    quantity += Number(item.quantity);
  });

  return (
    <>
      <Container>
        <Navbar>
          <HeaderCartButton onClick={showCartHandler} quantity={quantity} />
        </Navbar>
        {cartIsShown && <Cart onBack={hideCartHandler} />}
        <Products />
      </Container>
    </>
  );
};

export default Store;
