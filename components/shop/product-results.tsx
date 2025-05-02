"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter, useSearchParams } from "next/navigation"

import Pagination from "../pagination"
import ProductItemSlider from "../slider/slider-items/product-slider-item"
import { RootState, AppDispatch } from "@/redux/store"
import { resetFilters, setFilters } from "@/redux/slices/filtersSlice"
import { Product } from "@/util/interfaces/product"
import { fetchFilteredProducts } from "@/util/helperFunctions/backend-fetching"

/***
 * Displays paginated product results based on Redux-managed filters and
 * optional search query, syncing with URL parameters and backend data.
 */

function ProductResults() {
  /**
   * VARIABLES THAT IMPACT PRODUCTS STATE VARIABLE:
   */
  // Using the Dispatch tool
  const dispatch = useDispatch<AppDispatch>()

  // Extracting filters state from redux
  const filters = useSelector((state: RootState) => state.filters)

  // Using the Router and Params tools:
  const router = useRouter()
  const searchParams = useSearchParams()

  // Extracting a potential search query from the URL to filter products to
  const searchQuery = searchParams.get("search") ?? ""

  // Extracting currentPage and totalPage from filters redux state
  // - (for pagination purposes)
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.filters
  )

  // Products state variable
  const [products, setProducts] = useState<Product[]>([])

  /**
   * USE EFFECTS:
   */
  // 1) sync URL - Redux filters whenever the URL changes
  useEffect(() => {
    // only dispatch if it's actually different
    dispatch(setFilters({ name: searchQuery, currentPage: 1 }))
  }, [searchQuery, dispatch])

  // 2) fetch products whenever the relevant filters change
  useEffect(() => {
    fetchFilteredProducts(filters, setProducts, newTotal => {
      if (newTotal !== totalPages) {
        dispatch(setFilters({ totalPages: newTotal }))
      }
    })
  }, [searchQuery, currentPage, totalPages, filters])


  /**
   * PAGINATION FUNCTIONS
   */
  const handleNextPage = () =>
    currentPage < totalPages &&
    dispatch(setFilters({ currentPage: currentPage + 1 }))
  const handlePrevPage = () =>
    currentPage > 1 && dispatch(setFilters({ currentPage: currentPage - 1 }))
  const handlePageClick = (page: number) =>
    dispatch(setFilters({ currentPage: page }))

  // Handler to clear the search
  const handleClearSearch = () => {
    // 1) reset Redux filters back to defaults
    dispatch(resetFilters())
    // 2) remove the `search` param from URL
    const params = new URLSearchParams(searchParams.toString())
    params.delete("search")
    // replace avoids adding a new history entry
    router.replace(`/shop${params.toString() ? "?" + params.toString() : ""}`, {
      scroll: false
    })
  }

  return (
    <section className="h-auto flex-[7.5] pb-9">
      {/* Search  */}
      {searchQuery && (
        <div className="mb-4 flex items-center justify-between rounded bg-gray-100 px-4 py-2">
          <span className="text-sm">
            Searching: <strong>{searchQuery}</strong>
          </span>
          <button
            onClick={handleClearSearch}
            className="rounded-full p-1 hover:bg-gray-200"
            aria-label="Clear search"
          >
            x
          </button>
        </div>
      )}
      <main className="shop grid grid-cols-3 gap-5 xs:!grid-cols-1 m:grid-cols-2">
        {products.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center gap-4 text-center text-darkGray">
            <p>No products found for these search filters :(</p>

          </div>
        ) : (
          products.map(p => <ProductItemSlider key={p._id} product={p} />)
        )}
      </main>

      {products.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageClick}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          className="my-[4rem] m:my-[2rem]"
        />
      )}
    </section>
  )
}

export default ProductResults
