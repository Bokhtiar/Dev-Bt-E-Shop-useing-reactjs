import Index from "./Components/Index";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About";
import Header from "./Layouts/Header";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import Footer from "./Layouts/Footer";
import Contact from "./Components/Contact";
import ProductList from "./Components/Product/ProductList";
import ProductSingle from "./Components/Product/ProductSingle";
import CategoryProduct from "./Components/Category/CategoryProduct";
import BlogList from "./Components/Blog/BlogList";
import E404 from "./Components/E404";

function App() {
  return (
    
    <div>
      <BrowserRouter>    
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/productsingle/:id" element={<ProductSingle />}></Route>
        <Route path="/category/:id" element={<CategoryProduct />}></Route>
        <Route path="/blogs" element={<BlogList />}></Route>
        <Route path="/404" element={<E404 />}></Route>
        
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
