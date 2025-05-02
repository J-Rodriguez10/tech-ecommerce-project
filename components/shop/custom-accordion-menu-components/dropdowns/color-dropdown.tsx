"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";

function ColorDropdown() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedColors = useSelector((state: RootState) => state.filters.color);

  console.log("Current selected colors:", selectedColors); // Debug

  const colorOptions = [
    { label: "Black", value: "black" },
    { label: "Brown", value: "brown" },
    { label: "Cyan", value: "cyan" },
    { label: "Gold", value: "gold" },
    { label: "Gray", value: "gray" },
    { label: "Magenta", value: "magenta" },
    { label: "Pink", value: "pink" },
    { label: "Purple", value: "purple" },
    { label: "Yellow", value: "yellow" }
  ];

  const toggleColor = (value: string) => {
    const newColors = selectedColors.includes(value)
      ? selectedColors.filter((c) => c !== value)
      : [...selectedColors, value];

    dispatch(setFilters({ color: newColors }));
  };

  return (
    <div className="">
      <ul className="max-h-[255px] overflow-y-scroll">
        {colorOptions.map(({ label, value }) => (
          <li key={value} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={value}
              checked={selectedColors.includes(value)}
              onChange={() => toggleColor(value)}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={value} className="cursor-pointer text-darkGray">
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorDropdown;
