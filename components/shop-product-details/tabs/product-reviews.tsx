import { useState } from "react"

import ProductReviewForm from "./product-reviews-components/product-review-form"
import ProductReviewsDataMetrics from "./product-reviews-components/product-reviews-data-metrics"
import ProductReviewsContainer from "./product-reviews-components/product-reviews-container"


/*  
  Displays customer reviews for a product, including review metrics,  
  individual customer reviews, and an optional review submission form.  
  Users can toggle the review form by clicking the "Write a review" button.\
  
  NOTE: Write a review was never implemented. Only a dummy review is displayed.
*/

function ProductReviews() {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

  // Toggles the visibility of the product review form
  function toggleProductReviewForm() {
    setIsFormDisplayed(prev => !prev)
  }

  return (
    <div>
      {/* Section heading */}
      <h4 className="text-center text-[1.3rem] font-[500] m:mb-4">
        Customer Reviews
      </h4>

      {/* Displays review statistics and provides a button to write a new review */}
      <ProductReviewsDataMetrics toggleProductReviewForm={toggleProductReviewForm} />

      {/* Review submission form, shown when the user opts to write a review */}
      {isFormDisplayed && <ProductReviewForm />}

      {/* Container for displaying individual customer reviews */}
      <ProductReviewsContainer />
    </div>
  )
}

export default ProductReviews
