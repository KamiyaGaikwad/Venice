import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Authentication/login";
import ProductList from "./ProductList/productList";
import Cart from "./CartManagement/cart";
import WishList from "./wishManagement/wish";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
