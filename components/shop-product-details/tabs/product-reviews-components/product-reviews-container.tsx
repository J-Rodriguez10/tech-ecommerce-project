import ProductReview from "./product-review"


/***
 * Wraps and displays product review components- DUMMY REVIEWS
 */

function ProductReviewsContainer() {
  return (
    <div className="my-6">
    
      <ul>
        <ProductReview />
      </ul>
    </div>
  )
}

export default ProductReviewsContainer
