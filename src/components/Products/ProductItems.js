import { useContext } from "react";
import CartCntx from "../../store/cart-context";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItems = (props) => {
  const cartcntx = useContext(CartCntx);

  const addItemToCart = (event) => {
    console.log(props.quantity);
    event.preventDefault();
    cartcntx.addItem({ ...props, quantity: 1 });
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <>
                  <h3>{props.title}</h3>,<h3>{props.price}</h3>,
                  <Link to={`/${props.productId}`}>
                    {<img src={props.imageUrl} alt="" />}
                  </Link>
                </>
                <Button variant="primary" onClick={addItemToCart}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductItems;
