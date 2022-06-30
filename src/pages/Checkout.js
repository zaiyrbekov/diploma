import Header from "../components/Header/Header";
import image from "../assets/header.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { useEffect } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate("/auth");
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate("/");
  }
  return (
    <>
      <Header title="Checkout" image={image}></Header>
      <CartDisplay />
      <form className="CARTS" onSubmit={onCheckout}>
        <label>
          First name:
          <input type="text" name="firstName" required />
        </label>
        <br />
        <label>
          Last name:
          <input type="text" name="lastName" required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" required />
        </label>
        <br />
        <button className="btn-checkout">Complete the order</button>
      </form>
    </>
  );
}

export default Checkout;
