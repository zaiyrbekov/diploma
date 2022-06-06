import { Link } from "react-router-dom";
import headerImage from "../assets/header6.jpg";
import Header from "../components/Header/Header";

import ProductList from "../components/ProductList/ProductList";

import { getProducts } from "../data/products";

// import CategoryList from "../components/CategoryList/CategoryList";
// import { getCategories } from "../data/categories";


function Home() {
  return (
    <>
      <Header
        title="Burger 
   Bachelor"
        image={headerImage}
      >
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in? */}
      </Header>
      {/* <CategoryList categories={getCategories()}/> */}
      <div class="section-title ">
        <span>Burger Menu</span>
        <h3>Best Ever Burgers</h3>
      </div>
      <ProductList products={getProducts("Burgers")} />
      <Link class="boxed-btn5" to={"/products/"}>More Items</Link>
      
    </>
  );
}

export default Home;
