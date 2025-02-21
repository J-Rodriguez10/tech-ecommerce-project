import CheckoutForm from "./checkout-form"
import CheckoutItemsDisplay from "./checkout-items-display"

/**
 * Component for displaying checkout content, including the checkout form and order summary.
 */

function CheckoutContent() {
  return (
    <main className="flex">
      <CheckoutForm />
      <CheckoutItemsDisplay className="w-[50%] border-l-[1px] border-[#DEDEDE] pl-[2.5rem] m:hidden" />
    </main>
  )
}

export default CheckoutContent
