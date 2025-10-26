import React from "react";
import { useShopStore } from "../store/shopStore";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist, cart, wishlist } = useShopStore();

  const isInCart = cart.some((p) => p.id === product.id);
  const isInWishlist = wishlist.some((p) => p.id === product.id);

  // Helper to safely get a number price
  const getPrice = (priceObj, type = "discounted_price") => {
    if (!priceObj) return 0;
    let value = priceObj[type] ?? priceObj.original_price ?? 0;
    return Number(value) || 0;
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white flex flex-col">
      <div className="relative">
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-t-xl">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
        {product.price?.discount_percentage > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.price.discount_percentage}% OFF
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-gray-500 text-sm">{product.category}</p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          {product.price?.original_price && (
            <span className="line-through text-gray-400 text-sm mr-2">
              ${getPrice(product.price, "original_price").toFixed(2)}
            </span>
          )}
          <span className="text-green-600 font-bold">
            ${getPrice(product.price, "discounted_price").toFixed(2)}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`flex-1 py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
              isInCart
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isInCart ? "Added" : "Add to Cart"}
          </button>
          <button
            onClick={() => addToWishlist(product)}
            disabled={isInWishlist}
            className={`flex-1 py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
              isInWishlist
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isInWishlist ? "Wished" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
