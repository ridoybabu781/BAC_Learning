import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShopStore = create(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      addToCart: (product) => {
        const exists = get().cart.find((p) => p.id === product.id);
        if (exists) return;
        set({ cart: [...get().cart, product] });
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((p) => p.id !== id) });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      addToWishlist: (product) => {
        const exists = get().wishlist.find((p) => p.id === product.id);
        if (exists) return;
        set({ wishlist: [...get().wishlist, product] });
      },

      removeFromWishlist: (id) => {
        set({ wishlist: get().wishlist.filter((p) => p.id !== id) });
      },

      clearWishlist: () => {
        set({ wishlist: [] });
      },

      moveWishlistToCart: (id) => {
        const product = get().wishlist.find((p) => p.id === id);
        if (!product) return;
        const existsInCart = get().cart.find((p) => p.id === id);
        if (!existsInCart) {
          set({
            cart: [...get().cart, product],
            wishlist: get().wishlist.filter((p) => p.id !== id),
          });
        }
      },
    }),
    {
      name: "shop-storage",
    }
  )
);
