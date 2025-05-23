"use client"

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Import RootState for type checking

import CheckoutItem from "./checkout-item";

/** 
 * Displays the cart items with subtotal, shipping, and total cost calculations
 * for the checkout summary.
 */

function CheckoutItemsDisplay({ className = "" }: { className?: string }) {
  // Get cart items from Redux store
  const cart = useSelector((state: RootState) => state.user.user?.cart); 

  // Calculate subtotal to display later
  const subtotal = cart?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

  // Placeholder price for shipping cost
  const shipping = 10;

  // Calculate the total: (subtotal + shipping)
  const total = subtotal + shipping;

  return (
    <aside className={`bg-[#FAFAFA] text-black ${className}`}>
      {/* Items To Be Checked Out */}
      <ul className="my-[3.5rem] overflow-y-scroll max-h-[80%]">
        {cart?.map((item) => (
          <CheckoutItem key={item.productId} item={item} /> 
        ))}
      </ul>

      {/* Prices */}
      <div className="flex flex-col gap-4">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          {/* Display subtotal */}
          <p>${subtotal.toFixed(2)}</p> 
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <p>Shipping</p>
          <span className="text-[0.9rem] text-lightTextGray">${shipping}</span>
        </div>

        {/* Total */}
        <div className="mt-4 flex items-center justify-between text-[1.3rem] font-[600]">
          <p>Total</p>
          <p>
            <span className="text-[0.9rem] font-[400] text-lightTextGray">USD</span>
            ${total.toFixed(2)} 
          </p>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutItemsDisplay;
