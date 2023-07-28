import { useContext } from "react";
import CartCntx from "../../store/cart-context";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductItems = (props) => {
  const cartcntx = useContext(CartCntx);

  const emailid = localStorage.getItem("email");

  const newemailid = emailid.replace("@", "");

  const useremailid = newemailid.replace(".", "");

  const addItemToCart = (event) => {
    event.preventDefault();
    cartcntx.addItem({ ...props, quantity: 1 });
    console.log(cartcntx);
    const userData = {
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      productId: props.productId,
      quantity: 1,
    };

    let existingProductIdIndex;
    let userData_id;

    axios
      .get(
        `https://crudcrud.com/api/804e23dcd8ed4d89b57615107bbd986c/cart${useremailid}`
      )
      .then((response) => {
        console.log(response.data);

        existingProductIdIndex = response.data.findIndex(
          (i) => i.productId === userData.productId
        );

        if (existingProductIdIndex === -1) {
          axios
            .post(
              `https://crudcrud.com/api/804e23dcd8ed4d89b57615107bbd986c/cart${useremailid}`,
              userData
            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          userData_id = response.data[existingProductIdIndex]._id;
          delete response.data[existingProductIdIndex]._id;
          response.data[existingProductIdIndex].quantity =
            parseInt(response.data[existingProductIdIndex].quantity) + 1;
          axios
            .put(
              `https://crudcrud.com/api/804e23dcd8ed4d89b57615107bbd986c/cart${useremailid}/${userData_id}`,
              response.data[existingProductIdIndex]
            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
