import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"
import ProductDetailsContainer from "@/components/shop-product-details/product-details-container"


function ProductDetailsPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader route="Product" />
      <div className="tight-cont">
        <ProductDetailsContainer />
      </div>
      <Footer />
    </>
  )
}

export default ProductDetailsPage
