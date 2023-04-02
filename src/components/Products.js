import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Counter = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          {productsArr.map((item) => (
            <Col xs={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <>
                    <h3>{item.title}</h3>,<h3>{item.price}</h3>,
                    <img src={item.imageUrl} alt="" />
                  </>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Counter;
