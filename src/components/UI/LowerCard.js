import React from "react";
import { Card } from "react-bootstrap";
import classes from "./LowerCard.module.css";

function LowerCard() {
  return (
    <>
      <Card
        className={classes.card}
        bg={"primary"}
        text={"white"}
        style={{ width: "90rem" }}
      >
        <Card.Body>
          <h1>the Generics</h1>
        </Card.Body>
      </Card>
    </>
  );
}

export default LowerCard;
