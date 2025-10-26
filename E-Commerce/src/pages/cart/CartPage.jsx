import React, { useState, useEffect } from "react";
import { useShopStore } from "../../store/shopStore";
import ClipLoader from "react-spinners/ClipLoader"; // Spinner
import EmptyState from "../../components/EmptyState";

export default function CartPage() {
  const { cart, removeFromCart } = useShopStore();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // Simulate fetching/loading cart data
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCartItems(cart);
      setLoading(false);
    }, 500); // simulate network delay
    return () => clearTimeout(timer);
  }, [cart]);

  // Safe function to get price
  const getPrice = (item) => {
    if (!item.price) return 0;
    const val = item.price.discounted_price ?? item.price.original_price ?? 0;
    return Number(val) || 0;
  };

  const total = cartItems.reduce(
    (acc, item) => acc + getPrice(item) * (item.quantity || 1),
    0
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader size={50} color="#22c55e" />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <p className="p-4 text-center text-gray-600">
        <EmptyState type="cart" />
      </p>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.images?.[0] || ""}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.quantity || 1}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold">
                ${getPrice(item).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-lg font-semibold">
        Total: ${total.toFixed(2)}
      </div>

      <div className="mt-4 text-right">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
}
