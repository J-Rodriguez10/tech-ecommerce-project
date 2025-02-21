import CheckoutContent from "@/components/checkout/checkout-content"
import CheckoutHeader from "@/components/checkout/checkout-header"
import CheckoutPageBackground from "@/components/checkout/checkout-page-background"

function CheckoutPage() {
  return (
    <div className="relative">
      <CheckoutHeader />
      <div className="tightest-cont">
        <CheckoutContent />
      </div>
      <CheckoutPageBackground />
    </div>
  )
}

export default CheckoutPage
