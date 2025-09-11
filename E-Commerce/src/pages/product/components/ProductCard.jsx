import React from "react";
import { Star, ShoppingBag } from "@phosphor-icons/react";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-xs rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition">
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-contain h-full"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-gray-800 font-medium">{product.name}</h3>
        <p className="text-lg font-bold text-gray-900">
          {product.price.discounted_price}
        </p>

        {product.price.discounted_price !== product.price.original_price && (
          <p className="text-sm text-gray-400 line-through">
            {product.price.original_price}
          </p>
        )}

        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
          <Star size={18} weight="fill" />
          <Star size={18} weight="fill" />
          <Star size={18} weight="fill" />
          <Star size={18} weight="fill" />
          <Star size={18} weight="regular" className="text-gray-300" />
        </div>
      </div>

      <div className="mt-2 flex justify-end">
        <button className="p-2 rounded-full border border-gray-300 hover:bg-green-100 hover:border-green-400 transition">
          <ShoppingBag size={22} weight="bold" className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
