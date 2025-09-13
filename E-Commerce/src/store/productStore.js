import { create } from "zustand";

const productStore = create((set) => {
  return {
    cartProducts: [],
    wishList: [],
    message: "",

    addToCart: async (product) => {
      set((state) => {
        const existingProduct = state.cartProducts.find(
          (p) => p.id === product.id
        );
        if (existingProduct) {
          return {
            ...state,
            cartProducts: state.cartProducts.map((p) =>
              p.id === product.id
                ? {
                    ...p,
                    quantity: (p.quantity || 1) + (product.quantity || 1),
                  }
                : p
            ),
            message: "Added to your existing cart",
          };
        }

        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            { ...product, quantity: product.quantity || 1 },
          ],
          message: "Added to cart",
        };
      });
    },

    addToWishList: async (product) => {
      set((state) => {
        const existingProduct = state.wishList.find((p) => p.id === product.id);
        if (existingProduct) {
          return { ...state, message: "Already in your wishlist" };
        }

        return {
          ...state,
          wishList: [...state.wishList, product],
          message: "Added to wishlist",
        };
      });
    },
  };
});

export default productStore;
