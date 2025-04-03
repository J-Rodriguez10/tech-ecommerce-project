"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";

function ColorDropdown() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedColors = useSelector((state: RootState) => state.filters.color);

  console.log("Current selected colors:", selectedColors); // Log changes

  const colors = ["Black", "Brown", "Cyan", "Gold", "Gray", "Magenta", "Pink", "Purple", "Yellow"];

  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color) // Remove if already selected
      : [...selectedColors, color]; // Add if not selected

    dispatch(setFilters({ color: newColors }));
  };

  return (
    <div className="">
      <ul className="max-h-[255px] overflow-y-scroll">
        {colors.map((color) => (
          <li key={color} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={color}
              checked={selectedColors.includes(color)}
              onChange={() => toggleColor(color)}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
            />

            <label htmlFor={color} className="cursor-pointer text-darkGray">
              {color}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorDropdown;
