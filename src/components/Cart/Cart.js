import { useContext } from "react";
import {
  Button,
  Card,
  CardGroup,
  CloseButton,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import CartCntx from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartCntx);

  const removeItemInCart = (id) => {
    cartcntx.removeItem(id);
  };

  return (
    <Card>
      <CardGroup>
        <Container size="sm">
          <Row>
            <Col>Cart</Col>
            <Col>
              <CloseButton onClick={props.onBack} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartcntx.items.length > 0 &&
                    cartcntx.items.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <img src={item.imageUrl} alt="" />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            {item.quantity}
                            <Button
                              onClick={removeItemInCart.bind(null, item.id)}
                            >
                              remove
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </CardGroup>
    </Card>
  );
};

export default Cart;
