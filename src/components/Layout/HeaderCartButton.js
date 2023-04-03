import React from "react";
import { Button } from "react-bootstrap";

const HeaderCartButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <span>cart</span>
      <span>3</span>
    </Button>
  );
};

export default HeaderCartButton;
