

import Image from "next/image";
import { CartItem as CartItemInterface } from "@/util/interfaces/user";
import XSvg from "@/components/svgs/x";

function CartItem({
  productImage,
  productName,
  price,
  quantity,
  // productId,
}: CartItemInterface) {

  return (
    <div className="flex items-center justify-between border-b-[1px] border-[#dfdfdf] pb-6 pt-3">
      {/* Product Image */}
      <div className="flex items-center gap-3">
        <Image
          height={80}
          width={80}
          src={productImage}
          alt={productName}
        />

        {/* Product Details */}
        <div className="flex flex-col gap-2">
          <p className="text-[1.05rem] font-[400] leading-tight text-black">
            {productName}
          </p>

          <p className="text-[0.85rem] text-lightTextGray">
            {quantity} x{" "}
            <span className="text-[0.9rem] font-[500] text-darkGray">
              ${price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      <XSvg
        className="h-[15px] w-[15px] cursor-pointer self-start text-lightTextGray"
      />
    </div>
  );
}

export default CartItem;
