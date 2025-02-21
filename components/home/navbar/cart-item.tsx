import XSvg from "@/components/svgs/x"
import Image from "next/image"


/**
 * Displays the product that is currently in the user's cart.
 */


function CartItem() {
  return (
    <div className="flex items-center gap-3 border-b-[1px] border-[#dfdfdf] pb-6 pt-3">
      {/* Product Image */}
      <Image
        height={80}
        width={80}
        src="https://quickstep007.myshopify.com/cdn/shop/files/24_compact_crop_bottom.jpg?v=1701772818"
        alt="OnePlus 6t Mirror"
        
      />

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        {/* Product Title */}
        <p className="text-[1.05rem] font-[400] leading-tight text-black">
          OnePlus 6t Mirror - 126GB / Gray
        </p>

        {/* Quantity + Price*/}
        <p className="text-[0.85rem] text-lightTextGray">
          2 x{" "}
          <span className="text-[0.9rem] font-[500] text-darkGray">
            $150.00
          </span>
        </p>
      </div>

      <XSvg className="h-[15px] w-[15px] cursor-pointer self-start text-lightTextGray" />
    </div>
  )
}

export default CartItem
