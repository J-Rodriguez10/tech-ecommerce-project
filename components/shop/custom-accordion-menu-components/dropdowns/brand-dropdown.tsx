"use client"

import { useSelector, useDispatch } from "react-redux"

import { RootState, AppDispatch } from "@/redux/store"
import { setFilters } from "@/redux/slices/filtersSlice"

function BrandDropdown() {
  const dispatch = useDispatch<AppDispatch>()
  const selectedBrands = useSelector((state: RootState) => state.filters.brand)

  console.log("Current selected brands:", selectedBrands) // Log changes

  const brandOptions = [
    { label: "Sony", value: "Sony" },
    { label: "Samsung", value: "Samsung" },
    { label: "DJI", value: "DJI" },
    { label: "Apple", value: "Apple" },
    { label: "Canon", value: "Canon" },
    { label: "HP", value: "HP" }
  ]

  const toggleBrand = (value: string) => {
    const newBrands = selectedBrands.includes(value)
      ? selectedBrands.filter(b => b !== value)
      : [...selectedBrands, value]

    dispatch(setFilters({ brand: newBrands }))
  }

  return (
    <div className="">
      <ul className="">
        {brandOptions.map(({ label, value }) => (
          <li key={value} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={value}
              checked={selectedBrands.includes(value)}
              onChange={() => toggleBrand(value)}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
            />

            <label htmlFor={value} className="cursor-pointer text-darkGray">
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BrandDropdown
