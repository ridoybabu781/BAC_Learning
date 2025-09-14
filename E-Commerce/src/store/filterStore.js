const { create } = require("zustand");

const filterStore = create((set) => {
  return {
    category: "All",
    sortBy: null,
    rating: null,
    min: 0,
    max: 1000,

    setCategory: (cat) => set(() => ({ category: cat })),
    setSortBy: (sort) => set(() => ({ sortBy: sort })),
    setRating: (rate) => set(() => ({ rating: rate })),
  };
});
