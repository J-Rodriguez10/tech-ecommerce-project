import React from "react"

/**
 * Displays the background for the checkout page. The left side is white
 * and the right side is gray.
 */

function CheckoutPageBackground() {
  return (
    <div className="fixed top-0 z-[-1] flex h-screen w-screen">
      {/* White half */}
      <div className="h-screen flex-[1] bg-white"></div>

      {/* Gray half */}
      <div className="h-screen flex-[1] bg-[#FAFAFA] m:hidden"></div>
    </div>
  )
}

export default CheckoutPageBackground
