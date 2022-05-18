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
        title="Pick your type of coffee!"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      {/* <ProductList products={getProducts()} /> */}
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Products;