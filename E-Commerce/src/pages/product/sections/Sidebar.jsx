import React, { useEffect, useState } from "react";

import filterIcon from "/images/features/Filter24px.png";

import { Star } from "@phosphor-icons/react";
import vegitableSalad from "/images/vegitableSalad.jpg";

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Kid foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Launch",
  "Dinner",
  "Breakfast",
  "Fruit",
];

export default function Sidebar() {
  const [productss, setProductss] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProductss(data));

    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const [activeTag, setActiveTag] = useState("Low fat");
  const products = productss?.splice(0, 3);
  return (
    <div>
      <button className="bg-green-600 flex text-white py-2 px-6 rounded-full gap-2 items-center">
        Filter <img src={filterIcon} className="w-[20px] h-[20px]" />
      </button>
      <br />
      <h3 className="text-xl">All Categories</h3>
      <div className="flex flex-col gap-2">
        {categories &&
          categories.map((category) => (
            <div key={category.id} className="flex gap-2">
              <input
                id={`category-${category.id}`}
                name="categories"
                type="radio"
                value={category.name}
              />
              <label htmlFor={`category-${category.id}`}>{category.name}</label>
            </div>
          ))}
      </div>
      <hr className=" my-2" />
      <br />
      <h3 className="text-xl">Price</h3>
      <div className="flex gap-2">
        <input
          type="number"
          name="min"
          id="min"
          placeholder="minimum"
          className="w-2/5 justify-between outline-0 border-2 rounded-full px-3 py-1"
        />
        <input
          type="number"
          name="max"
          id="max"
          placeholder="maximum"
          className="w-2/5 justify-between outline-0 border-2 rounded-full px-3 py-1"
        />
      </div>
      <hr className=" my-2" />
      <br />
      <h3 className="text-xl">Rating</h3>
      <div className="flex flex-col gap-2 ">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rating"
              id={`rating${rating}`}
              value={rating}
            />
            <label htmlFor={`rating${rating}`} className="flex gap-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={20} weight="fill" color="#facc15" />
              ))}
            </label>
          </div>
        ))}
      </div>
      <hr className=" my-2" />
      <br />
      <h3 className="text-xl">Popular Tag</h3>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition 
              ${
                activeTag === tag
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 max-w-xs bg-white rounded-2xl shadow">
        <div className="relative w-full rounded-xl overflow-hidden mb-5">
          <img
            src={vegitableSalad}
            alt="Discount Banner"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center">
            <h2 className="text-orange-500 font-bold text-xl">79% Discount</h2>
            <p className="text-gray-600 text-sm">on your first order</p>
            <button className="mt-2 text-green-600 font-medium flex items-center gap-1">
              Shop Now →
            </button>
          </div>
        </div>

        <br />
        <h3 className="font-semibold mb-3">Sale Products</h3>
        <div className="flex flex-col gap-3">
          {products?.map((product) => (
            <div
              key={product.id}
              className={`flex items-center justify-between p-3 rounded-xl border ${
                product.active
                  ? "border-green-400 shadow-md"
                  : "border-gray-200"
              }`}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-14 h-14 object-contain"
              />
              <div className="flex-1 ml-3">
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-semibold">
                    {product.price.discounted_price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {product.price.original_price}
                  </span>
                </div>
                <div className="flex text-yellow-400 mt-1">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
