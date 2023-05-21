import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import axios from "axios";

const HeaderCartButton = (props) => {
  const cartcntx = useContext(CartContext);

  const emailid = localStorage.getItem("email");
  const newemailid = emailid.replace("@", "");
  const useremailid = newemailid.replace(".", "");

  // let quantity = 0;

  // cartcntx.items.forEach((item) => {
  //   quantity += Number(item.quantity);
  // });

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://crudcrud.com/api/55137b49730b49ed8b2111a7a20106a0/cart${useremailid}`
  //     )
  //     .then((response) => {
  //       response.data.forEach((item) => {
  //         quantity += Number(item.quantity);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Button onClick={props.onClick}>
      <span>cart</span>
      <span>{props.quantity}</span>
    </Button>
  );
};

export default HeaderCartButton;
