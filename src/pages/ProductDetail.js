import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <center>
        <h1>Product Detail</h1>
      </center>
      &nbsp;
      <p>
        {params.productId === "P1" && params.productId && (
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="image1"
          ></img>
        )}
      </p>
      <p>
        {params.productId === "P2" && params.productId && (
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
            alt="image2"
          ></img>
        )}
      </p>
      <p>
        {params.productId === "P3" && params.productId && (
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
            alt="image3"
          ></img>
        )}
      </p>
      <p>
        {params.productId === "P4" && params.productId && (
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
            alt="image4"
          ></img>
        )}
      </p>
      <h2>Reviews</h2>
      &nbsp;
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
        suscipit temporibus nobis, facere assumenda iste voluptatibus sunt
        dolorem dolores illum repellendus deleniti rem itaque molestias. Porro
        animi maiores amet architecto?
      </p>
    </section>
  );
};

export default ProductDetail;
