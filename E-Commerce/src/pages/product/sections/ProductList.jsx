import ProductCard from "../../../components/ProductCard.jsx";

import { useEffect, useState } from "react";
import filterStore from "../../../store/filterStore.js";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { category, min, max, rating, activeTag } = filterStore();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((p) => {
    if (category && p.category !== category) {
      return false;
    }
    if (min && p.price.discounted_price < min) {
      return false;
    }
    if (max && p.price.discounted_price > max) {
      return false;
    }

    if (rating && p.rating < rating) {
      return false;
    }

    if (activeTag && p.tags.includes(activeTag)) {
      return false;
    }

    return true;
  });

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1 ? "bg-green-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
