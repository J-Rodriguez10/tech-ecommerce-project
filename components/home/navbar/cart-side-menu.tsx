import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { useRouter } from "next/navigation"

import XSvg from "@/components/svgs/x"
import CartItem from "./cart-item"
import Button from "@/components/button"
import { deleteFromCart } from "@/redux/slices/userSlice"
import { CartItem as CartItemInterface } from "@/util/interfaces/user"


interface CartSideMenuProps {
  toggleCartMenuDisplay: () => void
}


/**
 * A side menu displaying cart items, allowing item removal and navigation to checkout or cart pages,
 * with authentication checks
 */
function CartSideMenu({ toggleCartMenuDisplay }: CartSideMenuProps) {
  const cart: CartItemInterface[] | undefined = useSelector(
    (state: RootState) => state.user.user?.cart
  )
  const dispatch = useDispatch<AppDispatch>() // Initialize dispatch to trigger actions
  const router = useRouter() // Initialize the router to redirect

  const totalPrice =
    cart?.reduce((total, item) => total + item.price * item.quantity, 0) || 0

  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);  // Check if user is authenticated
  
  console.log("CART SIDE MENU - CART:", cart);

  const handleRemoveItem = (productId: string) => {
    console.log("BEFORE DISPATCH: This is the id I want to remove", productId)
    // Dispatch the deleteFromCart action with the productId to remove the item
    dispatch(deleteFromCart(productId))
  }

  // Handle the checkout click with authentication check
  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      router.push("/account"); // Redirect to the account page if not authenticated
    } else {
      router.push("/checkout"); // Proceed to checkout if authenticated
    }
  };

  // Handle the view cart click with authentication check
  const handleViewCart = () => {
    if (!isAuthenticated) {
      router.push("/account"); // Redirect to the account page if not authenticated
    } else {
      router.push("/cart"); // Proceed to view the cart if authenticated
    }
  };

  return (
    <div
      onClick={toggleCartMenuDisplay}
      className="fixed left-0 top-0 z-[99] h-screen w-screen bg-[#0d0d0d6f]"
    >
      <aside
        onClick={e => e.stopPropagation()}
        className="fixed right-0 top-0 z-[100] h-screen w-[380px] overflow-scroll bg-white p-[1rem] pb-[2rem] text-darkGray"
      >
        <div className="items-centers flex justify-between border-b-[1px] border-[#dfdfdf] pb-3 text-[1.1rem]">
          <p>Cart</p>
          <button onClick={toggleCartMenuDisplay}>
            <XSvg />
          </button>
        </div>

        <div className="mt-5 h-full">
          {!cart || cart.length === 0 ? (
            <p className="text-[1.15rem]">Your Cart Is Currently Empty!</p>
          ) : (
            <ul className="max-h-[70%] overflow-scroll">
              {cart?.map(item => (
                <CartItem
                  key={item.productId.toString()}
                  {...item}
                  onRemove={() => handleRemoveItem(item.productId)} // Pass the productId to the remove function
                />
              ))}
            </ul>
          )}

          <div className="mt-[3rem] flex items-center justify-between border-y-[1px] border-[#dfdfdf] py-4 text-[1.05rem] font-[500]">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <Button onClick={handleProceedToCheckout} variant="orange">
              Proceed To Checkout
            </Button>
            <Button onClick={handleViewCart} className="!min-w-full">
              View Cart
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CartSideMenu;
