import Navbar from "@/components/home/navbar/navbar"
import HeroSection from "@/components/hero/hero-section"
import FeatureStrip from "@/components/home/strips/feature-strip"
import ProductStrip from "@/components/home/strips/product-strip"
import {
  PRODUCT_STRIP_DATA_1,
  PRODUCT_STRIP_DATA_2
} from "@/util/data/product-strips-data"
import TodaysDealsSection from "@/components/home/todays-deals-section"
import IPhoneHighlightsSection from "@/components/home/iphone-highlights-section"
import FeaturedCollectionSection from "@/components/home/featured-collection-section"
import ClientsReviewsSection from "@/components/home/clients-reviews-section"
import SpecialOfferItemsSection from "@/components/home/special-offer-items-section"
import BrandsStrip from "@/components/home/strips/brands-strip"
import LatestNewsSection from "@/components/home/latest-news-section"
import Footer from "@/components/footer"

function Home() {
  return (
    <>
      <Navbar />
      <div className="cont">
        <HeroSection />
        <FeatureStrip />
        <ProductStrip products={PRODUCT_STRIP_DATA_1} />
        <TodaysDealsSection />
        <IPhoneHighlightsSection />
        <ProductStrip products={PRODUCT_STRIP_DATA_2} />
        <FeaturedCollectionSection />
      </div>
      <ClientsReviewsSection />
      <div className="cont">
        <SpecialOfferItemsSection />
        <BrandsStrip />
        <LatestNewsSection />
      </div>
      <Footer />
    </>
  )
}

export default Home
