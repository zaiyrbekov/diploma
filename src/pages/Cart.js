import Header from "../components/Header/Header";
import image from "../assets/header.jpg";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header title="Your Shopping Cart" image={image}></Header>
      <div className="all-cart">
        {/* {output} */}
        <CartDisplay actions />
        <Link className="btn-checkout" to="/checkout">
          Checkout
        </Link>
      </div>
    </>
  );
}

export default Cart;
