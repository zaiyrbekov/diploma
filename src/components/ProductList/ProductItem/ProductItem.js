import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <img src={product.image}  />
      <Link to={"/products/" + product.productId}>{product.title}</Link>
      <div className={classes.price}>${product.price}</div>
    </div>
  );
}
// alt={product.title}
export default ProductItem;