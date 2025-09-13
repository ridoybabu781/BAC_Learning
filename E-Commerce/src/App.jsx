import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import TopBar from "./components/layout/TopBar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Login from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/notFound/NotFound";

export default function App() {
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
