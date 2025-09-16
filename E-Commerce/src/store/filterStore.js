import { create } from "zustand";

const filterStore = create((set) => {
  return {
    category: "",
    min: 0,
    max: 0,
    rating: 0,
    activeTag: "",

    setCategory: (cat) => set(() => ({ category: cat })),
    setMin: (min) => set(() => ({ min })),
    setMax: (max) => set(() => ({ max })),
    setRating: (rate) => set(() => ({ rating: rate })),
    setActiveTag: (tag) => set(() => ({ activeTag: tag })),
  };
});

export default filterStore;
