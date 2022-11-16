import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
