import React, { useEffect, useState } from "react";
import filterIcon from "/images/features/Filter24px.png";
import { StarIcon } from "@phosphor-icons/react";
import filterStore from "../../../store/filterStore";

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
  const [productss, setProductss] = useState([]);
  const [categories, setCategories] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const {
    setCategory,
    min,
    setMin,
    max,
    setMax,
    setRating,
    activeTag,
    setActiveTag,
  } = filterStore();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProductss(data));

    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const products = productss?.slice(0, 3);

  return (
    <div>
      <button
        onClick={() => setShowFilter(true)}
        className="bg-green-600 lg:hidden flex text-white py-2 px-6 rounded-full gap-2 items-center"
      >
        Filter <img src={filterIcon} className="w-[20px] h-[20px]" />
      </button>

      {showFilter && (
        <div
          onClick={() => setShowFilter(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-4/5 lg:w-full bg-white shadow-lg 
        p-4 transform transition-transform duration-300 z-50
        overflow-y-auto max-h-screen
        ${showFilter ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={() => setShowFilter(false)}
            className="text-gray-600 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <h3 className="text-xl">All Categories</h3>
        <div className="flex flex-col gap-2">
          {categories &&
            categories.map((category) => (
              <div key={category.id} className="flex gap-2">
                <input
                  id={`category-${category.id}`}
                  name="categories"
                  type="radio"
                  onChange={() => setCategory(category.title)}
                  value={category.title}
                />
                <label htmlFor={`category-${category.id}`}>
                  {category.title}
                </label>
              </div>
            ))}
        </div>

        <hr className="my-2" />

        <h3 className="text-xl">Price</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-1/2 border rounded-full px-3 py-1"
          />
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-1/2 border rounded-full px-3 py-1"
          />
        </div>

        <hr className="my-2" />

        <h3 className="text-xl">Rating</h3>
        <div className="flex flex-col gap-2 ">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                id={`rating${rating}`}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label htmlFor={`rating${rating}`} className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                  <StarIcon key={i} size={20} weight="fill" color="#facc15" />
                ))}
              </label>
            </div>
          ))}
        </div>

        <hr className="my-2" />

        <h3 className="text-xl">Popular Tag</h3>
        <div className="flex flex-wrap gap-2 my-3">
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

        <h3 className="font-semibold mb-3">Sale Products</h3>
        <div className="flex flex-col gap-3">
          {products?.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-3 rounded-xl border border-gray-200"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
