import { StarIcon } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedPortion, setSelectedPortion] = useState("detailedDescription");

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((item) => item.id === id);
        setProduct(single);
      });
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex gap-4">
        <div className="flex flex-col gap-3 w-20">
          {product?.images?.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${product.name}-${idx}`}
              className="border rounded-md p-1 cursor-pointer hover:border-green-500"
            />
          ))}
        </div>

        <div className="flex-1">
          {product?.images?.[0] && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full rounded-lg shadow-md"
            />
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-semibold flex items-center gap-3">
          {product.name}
          <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">
            {product.availability}
          </span>
        </h1>

        <div className="flex items-center gap-3">
          <p className="text-gray-400 line-through">
            {product.price?.original_price}
          </p>
          <p className="text-2xl font-bold text-green-600">
            {product.price?.discounted_price}
          </p>
          {product.price?.discount_percentage > 0 && (
            <span className="text-sm bg-red-100 text-red-500 px-2 py-1 rounded">
              {product.price?.discount_percentage}% Off
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                color="gold"
                weight={product.rating?.average > index ? "fill" : "regular"}
                size={16}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {product.rating?.count} Reviews
            </span>
          </div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">SKU:</span> {product.sku}
          </p>
        </div>

        <p className="text-gray-700">{product.description}</p>

        <p>
          <span className="font-semibold">Brand: </span>
          {product.brand}
        </p>
        <p>
          <span className="font-semibold">Category: </span>
          {product.category}
        </p>
        <p className="flex flex-wrap gap-2">
          {product.tags?.map((tag, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-16 border p-2 rounded"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <div className="flex gap-4 mb-2">
          <button
            onClick={() => setSelectedPortion("detailedDescription")}
            className={`border-b-2 pb-1 ${
              selectedPortion === "detailedDescription"
                ? "border-green-500"
                : "border-white"
            }`}
          >
            Detailed Description
          </button>
          <button
            onClick={() => setSelectedPortion("additionalInfo")}
            className={`border-b-2 pb-1 ${
              selectedPortion === "additionalInfo"
                ? "border-green-500"
                : "border-white"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setSelectedPortion("customerFeedback")}
            className={`border-b-2 pb-1 ${
              selectedPortion === "customerFeedback"
                ? "border-green-500"
                : "border-white"
            }`}
          >
            Customer Feedback
          </button>
        </div>
        <hr className="border-gray-200" />

        <div className="mt-4">
          {selectedPortion === "detailedDescription" && (
            <p>{product.detailedDescription}</p>
          )}
          {selectedPortion === "additionalInfo" && (
            <div>
              <p>Weight: {product.additional_information.weight}</p>
              <p>
                Organic: {product.additional_information.organic ? "Yes" : "No"}
              </p>
              <p>Nutrition: {product.additional_information.nutrition}</p>
            </div>
          )}
          {selectedPortion === "customerFeedback" && (
            <div>
              <p>Average Rating: {product.rating.average}</p>
              <p>Feedback Count: {product.rating.count}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
