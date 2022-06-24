import Header from "../components/Header/Header";
import image from "../assets/header.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

import {decrement, increment, remove } from "../redux/cartSlice";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className="CART">
          <img src={product.image} alt={product.title} className="cart-img" />
          <Link className="Carttitle" to="">
            {product.title}
          </Link>{" "}
          <div className="Carttitle">{items[product.productId]} </div>
          <div className="Cartprice">
            ${product.price * items[product.productId]}
          </div>
          <div>
            <button
              className="btnn"
              onClick={() => dispatch(decrement(product.productId))}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <button
              className="btnn"
              onClick={() => dispatch(increment(product.productId))}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            <button
              className="btnn"
              onClick={() => dispatch(remove(product.productId))}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }

  return (
    <>
      <Header title="Your Shopping Cart" image={image}></Header>
      <div className="all-cart">
        {output}

        <span className="Carttitle total">
          Total: <span className="Cartprice">${total}</span>
        </span>

        <Link className="btn-checkout" to="/checkout">
          Checkout
        </Link>
      </div>
    </>
  );
}

export default Cart;
