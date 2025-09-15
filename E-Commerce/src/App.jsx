import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import TopBar from "./components/layout/TopBar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Login from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/notFound/NotFound";
import CartPage from "./pages/cart/CartPage";
import WishList from "./pages/wishlist/WishList";
import Footer from "./components/layout/footer";
import Profile from "./pages/profile/Profile";
import CategoryProduct from "./pages/categoryProducts/CategoryProduct";
import authUser from "./store/user.store";

export default function App() {
  const { profile } = authUser();

  useEffect(() => {
    const fetchUser = async () => {
      await profile();
    };

    fetchUser();
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories/:category" element={<CategoryProduct />} />
        {/* Not Found page here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
