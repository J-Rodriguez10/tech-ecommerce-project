"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";

function BrandDropdown() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedBrands = useSelector((state: RootState) => state.filters.brand);

  console.log("Current selected brands:", selectedBrands); // Log changes

  const brands = ["sony", "samsung", "dji", "apple", "canon", "hp"];

  const toggleBrand = (brand: string) => {
    const brandLower = brand.toLowerCase(); // Ensure consistent casing

    const newBrands = selectedBrands.includes(brandLower)
      ? selectedBrands.filter((b) => b !== brandLower) // Remove if already selected
      : [...selectedBrands, brandLower]; // Add if not selected

    dispatch(setFilters({ brand: newBrands }));
  };

  return (
    <div className="">
      <ul className="">
        {brands.map((brand) => (
          <li key={brand} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={brand}
              checked={selectedBrands.includes(brand.toLowerCase())} // Match Redux state
              onChange={() => toggleBrand(brand)}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
            />

            <label htmlFor={brand} className="cursor-pointer text-darkGray">
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandDropdown;
