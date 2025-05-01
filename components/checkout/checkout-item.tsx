import Image from "next/image";

import { CartItem } from "@/util/interfaces/user";

/**
 * Renders a single cart item with image, quantity badge, name, and total price
 * for use in the checkout summary.
 */

function CheckoutItem({ item }: { item: CartItem }) {
  return (
    <li className="items-between flex justify-between my-5">
      {/* Left */}
      <div className="flex max-w-[230px] items-center gap-2">
        {/* Product Image */}
        <div className="relative h-[64px] w-[64px] rounded-lg border-[1px] border-[#DEDEDE] bg-[#FAFAFA] !px-[1rem]">
          <Image
            src={item.productImage} // Use actual product image
            alt={item.productName} // Use actual product name for alt text
            fill
            className="light-shadow mx-auto max-w-[90%] object-contain"
          />

          {/* Amount */}
          <span className="absolute right-[-10%] top-[-10%] z-[10] flex h-5 w-5 items-center justify-center rounded-full bg-[#0000008f] text-center font-[500] text-white">
            {item.quantity} {/* Display the actual quantity */}
          </span>
        </div>

        {/* Product Stats */}
        <div className="flex flex-col">
          <p className="font-[500] text-black">{item.productName}</p>
          <span className="text-[0.8rem] text-lightTextGray">
            {item.productName} {/* You can customize this further, e.g., with color, size */}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center">
        {/* Product Price */}
        <p className="font-[500] text-black">${(item.price * item.quantity).toFixed(2)}</p>
        {/* Show total price for the item (price * quantity) */}
      </div>
    </li>
  );
}

export default CheckoutItem;