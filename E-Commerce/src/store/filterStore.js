import { create } from "zustand";

const filterStore = create((set) => {
  return {
    category: "",
    rating: null,
    min: null,
    max: null,
    activeTag: "",

    setCategory: (cat) => set(() => ({ category: cat })),
    setMin: (minPrice) => set(() => ({ min: minPrice })),
    setMax: (maxPrice) => set(() => ({ max: maxPrice })),
    setRating: (rate) => set(() => ({ rating: rate })),
    setActiveTag: (tag) => set(() => ({ activeTag: tag })),

    resetFilter: () =>
      set({
        category: "",
        rating: null,
        min: null,
        max: null,
        activeTag: "",
      }),
  };
});

export default filterStore;
