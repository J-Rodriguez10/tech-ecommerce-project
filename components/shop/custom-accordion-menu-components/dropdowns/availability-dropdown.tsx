"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { setFilters } from "@/redux/slices/filtersSlice"

function AvailabilityDropdown() {
  const dispatch = useDispatch<AppDispatch>()
  const filters = useSelector((state: RootState) => state.filters); // Get entire filters state

  console.log("Filters state - changed inStock:", filters.inStock); // Log the entire filters object

  const options = [
    { label: "In Stock", value: true },
    { label: "Out of Stock", value: false }
  ]

  return (
    <div className="">
      <ul>
        {options.map(option => (
          <li key={option.label} className="my-4 flex items-center gap-2">
            <input
              type="radio"
              name="availability" // Same name ensures only one can be selected
              id={option.label}
              checked={filters.inStock === option.value}
              onChange={() => dispatch(setFilters({ inStock: option.value }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor={option.label}
              className="cursor-pointer text-darkGray"
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AvailabilityDropdown
