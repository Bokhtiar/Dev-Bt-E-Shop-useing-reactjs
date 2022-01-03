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
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
