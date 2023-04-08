import React from "react";
import { Card } from "react-bootstrap";

function BgColorExample() {
  return (
    <>
      <Card
        bg={"secondary"}
        key={"secondary"}
        text={"white"}
        style={{ width: "90rem" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> the Generics </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default BgColorExample;
