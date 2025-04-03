"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { setFilters } from "@/redux/slices/filtersSlice"
import Pagination from "../pagination"
import ProtoProductItemSlider from "../slider/slider-items/proto-product-slider-item"
import { Product } from "@/util/interfaces/product"
import { fetchFilteredProducts } from "@/util/helperFunctions/backend-fetching"

function ProductResults() {
  const dispatch = useDispatch<AppDispatch>()

  // Get the filters and pagination state from Redux
  const filters = useSelector((state: RootState) => state.filters)
  const currentPage = filters.currentPage
  const totalPages = filters.totalPages

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Fetch filtered products when currentPage changes
    fetchFilteredProducts(filters, setProducts, totalPages => {
      // Dispatch the updated totalPages to Redux only if it changes
      if (totalPages !== filters.totalPages) {
        dispatch(setFilters({ totalPages }))
      }
    })
  }, [currentPage, filters, dispatch]) // Re-fetch products when currentPage changes

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setFilters({ currentPage: currentPage + 1 }))
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setFilters({ currentPage: currentPage - 1 }))
    }
  }

  const handlePageClick = (page: number) => {
    dispatch(setFilters({ currentPage: page }))
  }

  return (
    <section className="h-auto flex-[7.5] pb-9">
      <main className="shop grid grid-cols-3 gap-5 xs:!grid-cols-1 m:grid-cols-2">
        {products.length === 0 ? (
          // Show a message if no products are found
          <div className="col-span-full flex flex-col items-center justify-center gap-4 text-center text-darkGray">
            <p>No products found for these filters.</p>

            {/* Sad Face SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.08 64a8 8 0 1 1-13.84 8c-7.47-12.91-19.21-20-33.08-20s-25.61 7.1-33.08 20a8 8 0 1 1-13.84-8c10.29-17.79 27.39-28 46.92-28s36.63 10.2 46.92 28"
              ></path>
            </svg>
          </div>
        ) : (
          // Render the products if they are available
          products.map(product => (
            <ProtoProductItemSlider key={product._id} product={product} />
          ))
        )}
      </main>

      {products.length !== 0 && (
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
