import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <img src={product.image} alt={product.title} />
      <div className={classes.ProductFlax}>
        <Link to={"/products/" + product.productId}>{product.title}</Link>
        <p>{product.lorem}</p>
        <div className={classes.price}>${product.price}</div>
      </div>
    </div>
  );
}

export default ProductItem;
