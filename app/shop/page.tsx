import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"
import ProductsResultsDisplayer from "@/components/shop/products-results-displayer"

function ShopPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader header="Shop" route="Shop" />
      <div className="stick-cont h-auto">
        <ProductsResultsDisplayer />
      </div>
      <Footer />
    </>
  )
}

export default ShopPage
