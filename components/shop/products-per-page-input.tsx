"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";

/***
 * An input field with debounce that lets users set how many products are shown
 * per page, synced with Redux state.
 */

function ProductsPerPageInput() {
  const dispatch = useDispatch<AppDispatch>();

  // Get the current productsDisplayed value from Redux state
  const currentProductsDisplayed = useSelector(
    (state: RootState) => state.filters.productsDisplayed
  );

  // Local state for the input value
  const [inputValue, setInputValue] = useState(currentProductsDisplayed);

  // Debounce timeout ID
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

/**
 * Updates the number of products displayed per page with debounce,
 * ensuring a minimum value of 1 and syncing with Redux state.
 */
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = parseInt(event.target.value, 10);

  if (isNaN(value) || value < 1) {
    value = 1;
  }

  setInputValue(value);

  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  const timeoutId = setTimeout(() => {
    dispatch(setFilters({ productsDisplayed: value }));
    console.log("Updated products per page:", value);
  }, 3000);

  setDebounceTimeout(timeoutId);
};

  // Update local state when Redux state changes (to reset the input value if needed)
  useEffect(() => {
    setInputValue(currentProductsDisplayed);
  }, [currentProductsDisplayed]);

  return (
    <p className="s:hidden">
      Show
      <input
        type="number"
        value={inputValue} // Bind input value to state
        onChange={handleInputChange} // Update local state and trigger debounce
        aria-label="Results per page"
        min="1"
        max="100"
        className="mx-2 rounded-[5px] border-[1px] border-gray-400 px-2 py-2 font-[500] placeholder-darkGray"
      />
      <span className="m:hidden">per page</span>
    </p>
  );
};

export default ProductsPerPageInput;
