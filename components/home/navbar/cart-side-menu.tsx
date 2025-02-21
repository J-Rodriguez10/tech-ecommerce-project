/**
 * This component represents the cart side menu that appears when a user opens the cart.
 * It includes a list of cart items, the total price, and action buttons like "Proceed to Checkout" and "View Cart".
 * The backdrop closes the menu when clicked, and clicking inside the menu does not close it due to event propagation being stopped.
 */

import Link from "next/link"

import XSvg from "@/components/svgs/x"
import CartItem from "./cart-item"
import Button from "@/components/button"

interface CartSideMenuProps {
  // Function to toggle the cart menu display
  toggleCartMenuDisplay: () => void
}

function CartSideMenu({ toggleCartMenuDisplay }: CartSideMenuProps) {
  return (
    // Backdrop
    <div
      onClick={toggleCartMenuDisplay}
      className="fixed left-0 top-0 z-[99] h-screen w-screen bg-[#0d0d0d6f]"
    >
      <aside
        onClick={e => e.stopPropagation()} // Prevents the menu from closing when clicking inside the menu
        className="fixed right-0 top-0 z-[100] h-screen w-[380px] overflow-scroll bg-white p-[1rem] pb-[2rem] text-darkGray"
      >
        {/* Menu Header */}
        <div className="items-centers flex justify-between border-b-[1px] border-[#dfdfdf] pb-3 text-[1.1rem]">
          <p>Cart</p>

          <button onClick={toggleCartMenuDisplay}>
            <XSvg />
          </button>
        </div>

        {/* Items in Cart */}
        <div className="mt-5 h-full">
          {/* <p className="text-[1.15rem]">Your Cart Is Currently Empty.</p> */}

          <ul className="max-h-[70%] overflow-scroll">
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>

          {/* Total */}
          <div className="mt-[3rem] flex items-center justify-between border-y-[1px] border-[#dfdfdf] py-4 text-[1.05rem] font-[500]">
            <p>Total:</p>

            <p>$1,299.00</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/checkout">
              <Button variant="orange">Proceed To Checkout</Button>
            </Link>
            <Link href="/cart">
              <Button className="!min-w-full">View Cart</Button>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default CartSideMenu
