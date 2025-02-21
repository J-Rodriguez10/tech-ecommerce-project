import CheckoutItem from "./checkout-item"

function CheckoutItemsDisplay({ className = "" }: { className?: string }) {
  return (
    <aside className={`bg-[#FAFAFA] text-black ${className}`}>
      {/* Items To Be Checked Out */}
      <ul className="my-[3.5rem]">
        <CheckoutItem />
      </ul>

      {/* Prices */}
      <div className="flex flex-col gap-4">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <p>Subtotal</p>

          <p>$150.00</p>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <p>Shipping</p>

          <span className="text-[0.9rem] text-lightTextGray">
            Enter Shipping Address
          </span>
        </div>

        {/* Total */}
        <div className="mt-4 flex items-center justify-between text-[1.3rem] font-[600]">
          <p>Total</p>

          <p>
            <span className="text-[0.9rem] font-[400] text-lightTextGray">
              USD
            </span>{" "}
            $150.00
          </p>
        </div>
      </div>
    </aside>
  )
}

export default CheckoutItemsDisplay
