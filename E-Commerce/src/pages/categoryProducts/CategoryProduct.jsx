import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { CaretRightIcon, HouseIcon } from "@phosphor-icons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import ProductNotFound from "../../components/ProductNotFound";

export default function CategoryProduct() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();

      const filteredProducts = await data.filter((product) => {
        console.log(product.category.toLowerCase());

        return product.category.toLowerCase() === category.toLowerCase();
      });
      setProducts(filteredProducts);
    };
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="w-7xl m-auto my-6">
      <div className="bg-[url(/images/shopHero.jpg)]">
        <div className=" backdrop-brightness-50 text-white w-full">
          <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
            <HouseIcon /> <Link to={"/"}>Home</Link> <CaretRightIcon />{" "}
            Categories <CaretRightIcon /> {category}
          </div>
        </div>
      </div>
      {products.length === 0 ? (
        <ProductNotFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
