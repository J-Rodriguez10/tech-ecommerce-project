import ProductItemSlider from "../slider/slider-items/product-slider-item"

/**
 * Displays a wishlist section where users can see a grid of products they have added to their wishlist. 
 * Each product is displayed using a `ProductItemSlider`, allowing users to view and interact with the items.
 */

function WishlistDisplay() {
  const slideHeightStyles =
    "h-[380px] l:h-[300px] m:min-h-[380px] s:!min-h-[440px] xs:!h-[150vw]"

  return (
    <main className="my-[5rem] flex h-auto min-h-[250px] flex-col justify-center gap-4 bg-white text-darkGray">
      {/* <h2 className="text-[2.1rem] font-[500] leading-[1] ">Your wishlist is currently empty!</h2>
    <p>Continue browsing here.</p> */}

      <div className="grid-container gap-[1.5rem]">
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
        <ProductItemSlider slideHeight={slideHeightStyles} />
      </div>
    </main>
  )
}

export default WishlistDisplay
