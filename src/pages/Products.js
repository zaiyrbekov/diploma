import Header from "../components/Header/Header";
import headerImage from "../assets/header4.jpg";

import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Products() {
  return (
    <>
      <Header title="MENU" image={headerImage}></Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Products;
