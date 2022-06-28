import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
// import CartIcon from "../../CartButton/CartIcon";
// import { useParams } from "react-router-dom";
// import { getProduct } from "../data/products";

function ProductItem({ product }) {
  // const params = useParams();
  // const product = getProduct(params.productId);

  return (
    <div className={classes.ProductItem}>
      <img src={product.image} alt={product.title} />
      <div className={classes.ProductFlax}>
        <Link to={"/products/" + product.productId}>{product.title}</Link>
        <p>{product.lorem}</p>
        <div className={classes.price}>${product.price}</div>
        {/* <CartIcon productId={params.productId} /> */}
      </div>
    </div>
  );
}

export default ProductItem;
