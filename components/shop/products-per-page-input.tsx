"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";

const ProductsPerPageInput = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get the current productsDisplayed value from Redux state
  const currentProductsDisplayed = useSelector(
    (state: RootState) => state.filters.productsDisplayed
  );

  // Local state for the input value
  const [inputValue, setInputValue] = useState(currentProductsDisplayed);

  // Debounce timeout ID
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle change in the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value, 10);

    // Ensure value is at least 1
    if (isNaN(value) || value < 1) {
      value = 1; // Set to 1 if NaN or below 1
    }

    // Update local input value immediately
    setInputValue(value);

    // Clear previous debounce timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set new debounce timeout to update Redux state after 3 seconds
    const timeoutId = setTimeout(() => {
      dispatch(setFilters({ productsDisplayed: value }));
      console.log("Updated products per page:", value); // Log the value being set
    }, 3000);

    // Save the timeout ID to clear it on the next change
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
        value={inputValue} // Bind input value to local state
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
