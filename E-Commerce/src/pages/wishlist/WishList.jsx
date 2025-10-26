import EmptyState from "../../components/EmptyState";
import { useShopStore } from "../../store/shopStore";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useShopStore();

  if (wishlist.length === 0)
    return <p className="p-4"><EmptyState type="wishlist"/></p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">My Wishlist</h2>
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-12 h-12 rounded"
            />
            <span>{item.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => addToCart(item)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Move to Cart
            </button>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
