import Pagination from "../pagination"
import ProductItemSlider from "../slider/slider-items/product-slider-item"
import ActiveFiltersList from "./active-filters-list"

function ProductResults() {
  // const productItemHeightStyles = "h-[350px] l:h-[320px] m:min-h-[40v] s:min-h-[600px]"

  return (
    <section className="h-auto flex-[7.5] pb-9">
      <ActiveFiltersList />

      {/* Controlling the product height through CSS */}
      <main className="grid grid-cols-3 gap-5 m:grid-cols-2 xs:!grid-cols-1 shop ">
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
        <ProductItemSlider  />
      </main>

      <Pagination className="my-[4rem] m:my-[2rem]" />
    </section>
  )
}

export default ProductResults
