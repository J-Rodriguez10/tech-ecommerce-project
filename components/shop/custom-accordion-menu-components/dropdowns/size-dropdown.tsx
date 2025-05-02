"use client"

import { useSelector, useDispatch } from "react-redux"

import { RootState, AppDispatch } from "@/redux/store"
import { setFilters } from "@/redux/slices/filtersSlice"

function SizeDropdown() {
  const dispatch = useDispatch<AppDispatch>()
  const selectedSizes = useSelector((state: RootState) => state.filters.size)

  console.log("Current selected sizes:", selectedSizes) // Debug

  const sizeOptions = [
    { label: "32GB", value: "32" },
    { label: "64GB", value: "64" },
    { label: "128GB", value: "128" },
    { label: "256GB", value: "256" },
    { label: "512GB", value: "512" },
    { label: "1024GB", value: "1024" }
  ]

  const toggleSize = (value: string) => {
    const newSizes = selectedSizes.includes(value)
      ? selectedSizes.filter((s) => s !== value)
      : [...selectedSizes, value]

    dispatch(setFilters({ size: newSizes }))
  }

  return (
    <div className="">
      <ul className="max-h-[180px] overflow-y-scroll">
        {sizeOptions.map(({ label, value }) => (
          <li key={value} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={label}
              checked={selectedSizes.includes(value)}
              onChange={() => toggleSize(value)}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={label} className="cursor-pointer text-darkGray">
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SizeDropdown
