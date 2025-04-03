// redux/slices/filtersSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "@/util/interfaces/filters"; // Assuming Filters interface exists

const initialState: Filters = {
  name: "",
  tags: [],
  inStock: true,
  priceRange: { min: 0, max: 999999 },
  color: [],
  size: [],
  brand: [],
  sortBy: "alpha-A-Z",
  productsDisplayed: 10,
  currentPage: 1, // Add currentPage
  totalPages: 1,  // Add totalPages
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
