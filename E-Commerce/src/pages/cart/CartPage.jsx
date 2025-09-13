import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      const data = [
        {
          id: "1009",
          name: "Green Capsicum",
          price: { discounted_price: 14.0 },
          images: ["/images/product/green-capsicum.jpg"],
        },
        {
          id: "1010",
          name: "Red Capsicum",
          price: { discounted_price: 14.0 },
          images: ["/images/product/red-capsicum.jpg"],
        },
      ];
      setProducts(data);

      const initialQuantities = {};
      data.forEach((p) => (initialQuantities[p.id] = 1));
      setQuantities(initialQuantities);
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, parseInt(value) || 1),
    }));
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const subtotal = products.reduce(
    (sum, product) =>
      sum + product.price.discounted_price * (quantities[product.id] || 1),
    0
  );

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Shopping Cart
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="grid grid-cols-4 lg:grid-cols-5 font-semibold text-gray-500 border-b pb-4 mb-4">
                <div className="col-span-2 lg:col-span-1">PRODUCT</div>
                <div className="hidden lg:block">PRICE</div>
                <div className="hidden lg:block text-center">QUANTITY</div>
                <div className="hidden lg:block text-center">SUBTOTAL</div>
                <div></div>
              </div>

              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-4 lg:grid-cols-5 items-center gap-4 py-4 border-b last:border-b-0"
                >
                  <div className="col-span-2 lg:col-span-1 flex items-center space-x-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <h5 className="font-medium text-gray-800">
                      {product.name}
                    </h5>
                  </div>

                  <div className="hidden lg:block font-semibold text-gray-900">
                    ${product.price.discounted_price.toFixed(2)}
                  </div>

                  <div className="col-span-2 lg:col-span-1 flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleDecrement(product.id)}
                      disabled={quantities[product.id] <= 1}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={quantities[product.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(product.id, e.target.value)
                      }
                      className="w-16 text-center border rounded-md p-1"
                    />
                    <button
                      onClick={() => handleIncrement(product.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="hidden lg:block font-semibold text-gray-900 text-center">
                    $
                    {(
                      product.price.discounted_price *
                      (quantities[product.id] || 1)
                    ).toFixed(2)}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6 space-x-4">
              <button className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition-colors">
                Return to shop
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition-colors">
                Update Cart
              </button>
            </div>
          </div>

          <div className="w-full lg:w-96 bg-white rounded-xl shadow-md p-6 h-fit border border-gray-200">
            <h4 className="text-xl font-bold mb-4">Cart Total</h4>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-500 text-white font-bold py-3 rounded-full hover:bg-green-600 transition-colors">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
