import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  PinterestLogoIcon,
  HouseIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

const WishList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setProducts(data.splice(0, 3));
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen ">
      <div className="bg-[url(/images/shopHero.jpg)]">
        <div className=" backdrop-brightness-50 text-white w-full">
          <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
            <HouseIcon /> Account <CaretRightIcon /> Wishlist
          </div>
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold my-6">My Wishlist</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl m-auto">
        {products.map((product) => {
          const discountedPrice = parseFloat(
            product?.price.discounted_price.replace("$", "")
          );
          const originalPrice = parseFloat(
            product.price.original_price.replace("$", "")
          );

          return (
            <div
              key={product.id}
              className="grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 border-b border-gray-200 last:border-b-0"
            >
              <div className="sm:col-span-2 flex items-center space-x-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="sm:col-span-1 flex flex-col items-center justify-center text-gray-900">
                <span className="text-lg font-bold">
                  ${discountedPrice.toFixed(2)}
                </span>
                {discountedPrice !== originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="sm:col-span-1 flex justify-center items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.availability === "In Stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.availability}
                </span>
              </div>

              {/* Actions */}
              <div className="sm:col-span-1 flex justify-end items-center space-x-2">
                <button
                  disabled={product.availability !== "In Stock"}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    product.availability === "In Stock"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}

        {/* Share Section */}
        <div className="p-4 flex items-center justify-center space-x-2 text-gray-500">
          <span className="font-medium">Share:</span>
          <Link
            to="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <FacebookLogoIcon size={20} />
          </Link>
          <Link
            to="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
          >
            <TwitterLogoIcon size={20} />
          </Link>
          <Link
            to="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <PinterestLogoIcon size={20} />
          </Link>
          <Link
            to="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
          >
            <InstagramLogoIcon size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishList;
