import React from "react";
import Sidebar from "./sections/Sidebar";
import ProductList from "./sections/ProductList";

export default function ProductPage() {
  return (
    <div className="py-4 px-2 max-w-7xl m-auto flex flex-col lg:flex-row gap-2">
      <div className="w-full lg:w-1/3">
        <Sidebar />
      </div>
      <div className="w-full lg:w-2/3">
        <ProductList />
      </div>
    </div>
  );
}
