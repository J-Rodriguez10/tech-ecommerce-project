"use client"

import { useState } from "react"

import Rating from "@/components/rating"
import ProductRatingDistribution from "./product-rating-distribution"

interface ProductReviewsDataMetricsProps {
  toggleProductReviewForm: () => void //  Toggles the visibility of the product review form. When triggered, it either opens or closes the review form depending on its current state.
}

function ProductReviewsDataMetrics({
  toggleProductReviewForm
}: ProductReviewsDataMetricsProps) {
  const [buttonDescription, setButtonDescription] =
    useState<string>("Write a Review")

  function handleButtonClick() {
    setButtonDescription(prev =>
      prev === "Write a Review" ? "Cancel Review" : "Write a Review"
    )
    toggleProductReviewForm()
  }

  return (
    <div className="flex items-center justify-center m:flex-col m:gap-[1.5rem] m:text-center">
      {/* Product's total rating */}
      <div className="flex-1 text-darkGray">
        <div className="flex gap-2">
          <Rating rating={5} />
          <p>5.00 out of 5</p>
        </div>
        <p className="font-[500]">Based on 1 review</p>
      </div>

      {/* Product's rating distribution */}
      <ProductRatingDistribution />

      {/* Optional feature to write a product review */}
      <div className="flex flex-1 items-center justify-center">
        <button
          onClick={handleButtonClick}
          className="w-[220px] rounded-[5px] bg-darkOrange py-[8px] font-[600] text-white hover:opacity-75"
        >
          {buttonDescription}
        </button>
      </div>
    </div>
  )
}

export default ProductReviewsDataMetrics
