import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
const AllRutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
export default AllRutes;
