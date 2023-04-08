import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity += Number(item.quantity);
  });

  return (
    <Button onClick={props.onClick}>
      <span>cart</span>
      <span>{quantity}</span>
    </Button>
  );
};

export default HeaderCartButton;
