import LayoutSettingsBar from "./layout-settings-bar"
import ProductFilterSettingsBar from "./product-filter-settings-bar"
import ProductResults from "./product-results"
import ProductFilterSettingsBarMobile from "./produt-filter-settings-bar-mobile"

function ProductsResultsDisplayer() {
  return (
    <section className="pt-4">
      {/* Filter/Layout settings  */}
      <LayoutSettingsBar />

      {/* Main component responsible for displaying product results */}
      <div className="flex gap-6 mt-[3.5rem]  h-auto">
        <ProductFilterSettingsBar className="m:hidden" />
        <ProductResults />
      </div>
      
      {/* <ProductFilterSettingsBarMobile /> */}
    </section>
  )
}

export default ProductsResultsDisplayer
