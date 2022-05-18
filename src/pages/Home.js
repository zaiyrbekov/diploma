
import headerImage from "../assets/header6.jpg";
import Header from "../components/Header/Header";

// import CategoryList from "../components/CategoryList/CategoryList";
// import { getCategories } from "../data/categories";




function Home() {
  return (
    <>
      <Header
   title="This is home page."
   image={headerImage}>
     
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati quasi reiciendis, facere quis, quibusdam sint optio, voluptatibus corrupti consequatur sed qui itaque cupiditate. Incidunt quibusdam dicta blanditiis dolorum in?
   </Header>
      {/* <CategoryList categories={getCategories()}/> */}
    </>
  );
}

export default Home;