"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { setFilters } from "@/redux/slices/filtersSlice"
import Funnel from "../svgs/shop/funnel"
import ProductsPerPageInput from "./products-per-page-input"
import ProductsShowingDisplay from "./products-showing-display"

interface LayoutSettingsBarProps {
  handleMobileMenuDisplay: () => void
}

function LayoutSettingsBar({
  handleMobileMenuDisplay
}: LayoutSettingsBarProps) {
  const dispatch = useDispatch<AppDispatch>()

  // Access the current sortBy from Redux state
  const currentSortBy = useSelector((state: RootState) => state.filters.sortBy)

  // Get totalPages from Redux state (this is updated after fetching products)
  const totalPages = useSelector((state: RootState) => state.filters.totalPages)

  // Handle change in the dropdown for sorting
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = event.target.value

    // Dispatch the action to update the Redux state
    dispatch(setFilters({ sortBy: newSortBy }))

    // Log the new sortBy value
    console.log("New sortBy value:", newSortBy)
  }
  return (
    <aside className="flex h-auto items-center justify-end py-3 text-darkGray">
      {/* Product results display settings */}
      <div className="flex items-center gap-6 l:gap-5">
        {/* Displaying number of results */}
        <ProductsShowingDisplay totalPages={totalPages} />

        {/* Input for number of results per page */}
        <ProductsPerPageInput />

        {/* Dropdown for sorting products */}
        <p className="xs:hidden">
          Sort By:
          <select
            aria-label="Sort by"
            className="mx-2 rounded-[5px] border-[1px] border-gray-400 px-2 py-2 font-[500]"
            name="sortBy"
            value={currentSortBy} // Bind the value to Redux state
            onChange={handleSortChange} // Dispatch action on change
          >
            <option value="">Select</option>
            <option value="alpha-A-Z">Alphabetically, A-Z</option>
            <option value="alpha-Z-A">Alphabetically, Z-A</option>
            <option value="price-low-high">Price, low to high</option>
            <option value="price-high-low">Price, high to low</option>
            <option value="date-new-old">Date, new to old</option>
            <option value="date-old-new">Date, old to new</option>
          </select>
        </p>

        {/* Filters button to toggle <ProductFilterSettingsBarMobile/> */}
        <button
          onClick={handleMobileMenuDisplay}
          className="hidden items-center gap-1 text-[.9rem] text-lightTextGray m:flex"
        >
          <Funnel />
          Filters
        </button>
      </div>
    </aside>
  )
}

export default LayoutSettingsBar
