import { useContext } from "react";
import CartCntx from "../../store/cart-context";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductItems = (props) => {
  const cartcntx = useContext(CartCntx);

  const addItemToCart = (event) => {
    event.preventDefault();
    cartcntx.addItem({ ...props });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <>
                <h3>{props.title}</h3>,<h3>{props.price}</h3>,
                <img src={props.imageUrl} alt="" />
              </>
              <Button variant="primary" onClick={addItemToCart}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductItems;
