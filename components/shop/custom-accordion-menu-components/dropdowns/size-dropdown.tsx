"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { setFilters } from "@/redux/slices/filtersSlice"

function SizeDropdown() {
  const dispatch = useDispatch<AppDispatch>()
  const selectedSizes = useSelector((state: RootState) => state.filters.size)

  console.log("Current selected sizes:", selectedSizes) // Log state changes

  const sizes = ["32GB", "64GB", "128GB", "256GB", "512GB", "1024GB"]

  const toggleSize = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size) // Remove if already selected
      : [...selectedSizes, size] // Add if not selected

    dispatch(setFilters({ size: newSizes }))
  }

  return (
    <div className="">
      <ul className="max-h-[180px] overflow-y-scroll">
        {sizes.map(size => (
          <li key={size} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={size}
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSize(size)}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
            />

            <label htmlFor={size} className="cursor-pointer text-darkGray">
              {size}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SizeDropdown
