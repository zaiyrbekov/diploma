import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";

export default function CartItem({ product, actions, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="CART">
      <img src={product.image} alt={product.title} className="cart-img" />
      <Link className="Carttitle" to="">
        {product.title}
      </Link>{" "}
      <div className="Cart-tool">{quantity}</div>
      <div className="Cartprice">${product.price * quantity}</div>
      <div>
        {actions ? (
          <button
            className="btnn"
            onClick={() => dispatch(decrement(product.productId))}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
        ) : null}
        {/* {quantity} */}
        {actions ? (
          <button
            className="btnn"
            onClick={() => dispatch(increment(product.productId))}
          >
            {" "}
            <i className="fa-solid fa-plus"></i>
          </button>
        ) : null}

        {actions ? (
          <button
            className="btnn"
            onClick={() => dispatch(remove(product.productId))}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
}
