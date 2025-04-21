import Image from "next/image";
import { CartItem as CartItemInterface } from "@/util/interfaces/user";
import XSvg from "@/components/svgs/x";

interface CartItemProps extends CartItemInterface {
  onRemove: () => void; // Add onRemove prop to handle removal of the item
}

function CartItem({
  productImage,
  productName,
  price,
  quantity,
  onRemove, // Access the onRemove function
}: CartItemProps) {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-[#dfdfdf] pb-6 pt-3">
      <div className="flex items-center gap-3">
        <Image
          height={80}
          width={80}
          src={productImage}
          alt={productName}
        />
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

      {/* X button that triggers onRemove when clicked */}
      <XSvg
        className="h-[15px] w-[15px] cursor-pointer self-start text-lightTextGray"
        onClick={onRemove} // Attach the onRemove handler here
      />
    </div>
  );
}

export default CartItem;
