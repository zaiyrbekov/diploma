import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../CartLink/CartLink.css";

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <NavLink className="Cartlink" to="/cart">
      <span className="CartLinkSpan">
        <i className="fa-solid fa-cart-shopping CartLink"> </i> {number}
      </span>
    </NavLink>
  );
}
