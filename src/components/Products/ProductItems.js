import { useContext } from "react";
import CartCntx from "../../store/cart-context";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductItems = (props) => {
  //const [quantity, setQuantity] = useState(0);
  const cartcntx = useContext(CartCntx);

  const addItemToCart = (event) => {
    console.log(props.quantity);
    event.preventDefault();
    //setQuantity((quantity) => quantity + 1);
    cartcntx.addItem({ ...props, quantity: 1 });
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
