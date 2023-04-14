import React from "react";
import { Card } from "react-bootstrap";
import classes from "./CardUI.module.css";

function BgColorExample() {
  return (
    <>
      <Card
        className={classes.card}
        bg={"secondary"}
        key={"secondary"}
        text={"white"}
      >
        <Card.Body>
          <Card.Title>
            <h1>The Generics</h1>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default BgColorExample;
