import React from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./CardUI.module.css";
import { useLocation } from "react-router-dom";

function CardUI() {
  const location = useLocation();
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
          {location.pathname === "/home" && (
            <div>
              <Button
                className={classes.button}
                variant="outline-primary"
                size="lg"
              >
                Get Out Latest Album
              </Button>
              <button
                className={classes.playButton}
                variant="outline-primary"
                size="lg"
              >
                <h3>&gt;</h3>
              </button>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default CardUI;
