import { Link } from "react-router-dom";
import { HeartStraight, ShoppingCartSimple } from "@phosphor-icons/react";

export default function EmptyState({ type = "cart" }) {
  const icon =
    type === "wishlist" ? (
      <HeartStraight size={64} color="#ec4899" />
    ) : (
      <ShoppingCartSimple size={64} color="#22c55e" />
    );
  const message =
    type === "wishlist" ? "Your wishlist is empty." : "Your cart is empty.";

  return (
    <div className="flex flex-col items-center justify-center h-96 text-center px-4">
      <div className="mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{message}</h2>
      <p className="text-gray-500 mb-4">
        {type === "wishlist"
          ? "Add products you love to your wishlist and find them here."
          : "Add products to your cart and see them here before checkout."}
      </p>
      <Link
        to="/product"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Shop Now
      </Link>
    </div>
  );
}
