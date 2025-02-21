import ProductDetails from "./product-details"
import ProductImagesDisplayer from "./product-images-displayer"

function ProductDetailsSection() {
  return (
    <section className="my-[5rem] flex gap-6 xs:gap-10 s:flex-col">
      <ProductImagesDisplayer />
      <ProductDetails />
    </section>
  )
}

export default ProductDetailsSection
