import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "@/util/interfaces/filters"; 

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

/***
 * Manages global product filter state (e.g. search, tags, price, pagination) with
 * setFilters and resetFilters reducers.
 */


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
