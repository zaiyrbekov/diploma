import { Link } from "react-router-dom";
import headerImage from "../assets/header6.jpg";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Home() {
  return (
    <>
      <Header
        title="Burger 
   Bachelor"
        image={headerImage}
      ></Header>

      <div class="section-title ">
        <span>Burger Menu</span>
        <h3>Best Ever Burgers</h3>
      </div>
      <ProductList products={getProducts("Burgers")} />
      <Link class="boxed-btn5" to={"/products/"}>
        More Items
      </Link>
    </>
  );
}

export default Home;
