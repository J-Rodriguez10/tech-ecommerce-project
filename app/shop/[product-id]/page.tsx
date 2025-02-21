import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"
import RecommendationsSection from "@/components/recommendations-section"
import GamingProductsPromoSection from "@/components/shop-product-details/gaming-products-promo-section"
import ProductDetailsSection from "@/components/shop-product-details/product-details-section"
import ProductTabsInfo from "@/components/shop-product-details/product-info-tabs"

function ProductDetailsPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader route="OnePlus 6t Mirror" />
      <div className="tight-cont">
        <ProductDetailsSection />
        <ProductTabsInfo />
        <GamingProductsPromoSection />
        <RecommendationsSection />
      </div>
      <Footer />
    </>
  )
}

export default ProductDetailsPage
