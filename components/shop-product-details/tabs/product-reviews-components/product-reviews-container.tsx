import React from "react"

import ProductReview from "./product-review"
import { Product } from "@/util/interfaces/product"

/***
 * Wraps and displays product review components- DUMMY REVIEWS
 */

function ProductReviewsContainer({product}:{product:Product}) {
  return (
    <div className="my-6">
    
      <ul>
        <ProductReview />
      </ul>
    </div>
  )
}

export default ProductReviewsContainer
