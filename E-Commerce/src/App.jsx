import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import TopBar from "./components/layout/TopBar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import SingleProduct from "./pages/singleProduct/SingleProduct";

export default function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}
