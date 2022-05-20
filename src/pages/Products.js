import Header from "../components/Header/Header";
import headerImage from "../assets/header4.jpg";
// import ProductList from "../components/ProductList/ProductList";
// import { getProducts } from "../data/products";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Products() {
  return (
    <>
      <Header
        title="MENU"
        image={headerImage}>
       
      </Header>

      {/* <ProductList products={getProducts()} /> */}
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Products;