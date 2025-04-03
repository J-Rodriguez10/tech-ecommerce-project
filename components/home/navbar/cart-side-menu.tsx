import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/redux/store"; // Import RootState for type checking

import Button from "@/components/button";
import XSvg from "@/components/svgs/x";
import { CartItem as CartItemInterface } from "@/util/interfaces/user";
import CartItem from "./cart-item";

interface CartSideMenuProps {
  // Function to toggle the cart menu display
  toggleCartMenuDisplay: () => void;
}

function CartSideMenu({ toggleCartMenuDisplay }: CartSideMenuProps) {
  // Access the cart from the Redux store
  const cart: CartItemInterface[] | undefined = useSelector((state: RootState) => state.user.user?.cart);

  // Calculate total price
  const totalPrice = cart?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

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
          {/* Display cart items */}
          {!cart || cart && cart.length === 0 ? (
            <p className="text-[1.15rem]">Your Cart Is Currently Empty!</p>
          ) : (
            <ul className="max-h-[70%] overflow-scroll">
              {/* Optional chaining used here to prevent issues when cart is undefined */}
              {cart?.map((item) => (
                <CartItem
                  key={item.productId}
                  {...item}
                />
              ))}
            </ul>
          )}

          {/* Total */}
          <div className="mt-[3rem] flex items-center justify-between border-y-[1px] border-[#dfdfdf] py-4 text-[1.05rem] font-[500]">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
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
  );
}

export default CartSideMenu;
