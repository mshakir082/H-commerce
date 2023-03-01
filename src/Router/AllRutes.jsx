import { Routes, Route } from "react-router-dom";
import Product from "../component/Products/product";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
const AllRutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
export default AllRutes;
