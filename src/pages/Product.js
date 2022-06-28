import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div
        className="product-media"
        style={{ display: "flex", justifyContent: "center", padding: "3rem" }}
      >
        <img
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
          }}
          src={product.image}
          alt={product.title}
        />
        <div
          style={{ padding: "1rem", fontFamily: "serif", textAlign: "center" }}
        >
          <h2 style={{ marginTop: "0" }}>{product.title}</h2>
          <p
            style={{
              fontWeight: "400",
              maxWidth: "600px",
              color: "#6e6e6e",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {product.description}
          </p>
          <CartButton productId={params.productId} />
        </div>
      </div>
    </>
  );
}

export default Product;
