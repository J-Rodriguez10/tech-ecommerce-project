"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";

function PriceDropdown() {
  const dispatch = useDispatch<AppDispatch>();
  const priceRange = useSelector((state: RootState) => state.filters.priceRange);

  // Local state for inputs (sync with Redux)
  const [fromValue, setFromValue] = useState<string>(priceRange.min.toString());
  const [toValue, setToValue] = useState<string>(priceRange.max.toString());

  function formatInput(value: string) {
    return value.replace(/^0+/, ""); // Removes leading zeros
  }

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = formatInput(e.target.value);

    if (/^\d*\.?\d*$/.test(value)) {
      setFromValue(value);
    }
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = formatInput(e.target.value);

    if (/^\d*\.?\d*$/.test(value)) {
      setToValue(value);
    }
  }

  function handleFilterButtonClick() {
    let minPrice = fromValue ? parseFloat(fromValue) : 0;
    const maxPrice = toValue ? parseFloat(toValue) : 1000;

    if (minPrice > maxPrice) {
      minPrice = maxPrice; // Ensure "From" is ≤ "To"
      setFromValue(minPrice.toString()); // Sync UI
    }

    dispatch(setFilters({ priceRange: { min: minPrice, max: maxPrice } }));

    console.log("Updated Redux price range:", { min: minPrice, max: maxPrice });
  }

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex justify-between">
        {/* From - input */}
        <div className="flex flex-col">
          <p>From</p>
          <div className="relative h-[45px] w-[100px]">
            <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 transform text-base text-gray-500">
              $
            </span>
            <input
              aria-label="From:"
              className="h-full w-full rounded border border-gray-300 pl-6 font-[500] text-left"
              type="text"
              value={fromValue}
              onChange={handleFromChange}
              placeholder="0"
            />
          </div>
        </div>

        <p className="text-borderColor mb-[-1rem] text-[3rem]">-</p>

        {/* To - input */}
        <div className="flex flex-col">
          <p>To</p>
          <div className="relative h-[45px] w-[100px]">
            <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 transform text-base text-gray-500">
              $
            </span>
            <input
              aria-label="To:"
              className="h-full w-full rounded border border-gray-300 pl-6 font-[500] text-left"
              type="text"
              value={toValue}
              onChange={handleToChange}
              placeholder="1000"
            />
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <button
        onClick={handleFilterButtonClick}
        className="rounded-[0.25rem] bg-black py-4 text-[1rem] font-[500] text-white"
      >
        Filter
      </button>
    </div>
  );
}

export default PriceDropdown;
