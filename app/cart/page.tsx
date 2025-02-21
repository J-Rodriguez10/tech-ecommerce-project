import CartTotalCalculator from "@/components/cart/cart-total-calculator"
import InventoryTableDisplay from "@/components/cart/inventory-table-display"
import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"
import RecommendationsSection from "@/components/recommendations-section"

function CartPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader route="Your Shopping Cart" />

      <main className="stick-cont pb-8">
        <InventoryTableDisplay />
        <CartTotalCalculator />
        <RecommendationsSection />
      </main>

      <Footer />
    </>
  )
}

export default CartPage
