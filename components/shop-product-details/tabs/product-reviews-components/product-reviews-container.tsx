import React from "react"

import ProductReview from "./product-review"

function ProductReviewsContainer() {
  return (
    <div className="my-6">
      {/* Include Sorting Input component if time permits */}
      <ul>
        <ProductReview />
      </ul>
    </div>
  )
}

export default ProductReviewsContainer
