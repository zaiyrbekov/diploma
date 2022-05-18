import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Categories from "./pages/Categories";
import Category from "./pages/Category";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />

          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;