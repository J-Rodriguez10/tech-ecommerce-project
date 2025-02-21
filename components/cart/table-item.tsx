import Image from "next/image"

import XSvg from "../svgs/x"

function TableItem() {
  const tdStyles =
    "border border-gray-300 text-center min-h-full m:block m:border-none m:my-2"

  return (
    <tr className="relative m:border m:border-gray-300 m:!py-[5rem]">
      {/* Product */}
      <td className={`${tdStyles} max-w-[150px] m:max-w-full m:pt-[3rem]`}>
        <div className="flex h-full items-center m:flex-col">
          {/* Product Image */}
          <div className="flex h-full min-w-[120px] items-center justify-center border-r-[1px] border-gray-300 py-[1.5rem] m:border-none">
            <span className="relative block h-[100px] w-[75px] m:w-[150px] m:h-[160px]">
              <Image
                src="https://quickstep007.myshopify.com/cdn/shop/files/24_compact.jpg?v=1701772818"
                fill
                alt="Product Name"
                className="object-contain"
              />
            </span>
          </div>

          {/* Product Details */}
          <div className="w-[70%]">
            <p>OnePlus 6t Mirror</p>
            <p className="mt-2 text-[0.95rem] text-lightTextGray">
              128GB / Gray
            </p>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className={`${tdStyles}`}>$100.00</td>

      {/* Quantity */}
      <td className={`${tdStyles}`}>
        <div className="flex items-center justify-center">
          <div className="flex max-w-[100px] border-b-[2px] border-[#ccc] pb-1">
            <button className="w-[30%] text-left text-[1.5rem]">-</button>
            <input
              type="number"
              className="w-[40%] text-center placeholder-darkGray"
              placeholder="3"
            />
            <button className="w-[30%] text-right text-[1.5rem]">+</button>
          </div>
        </div>
      </td>

      {/* Total */}
      <td className={`${tdStyles} m:pb-[6rem]`}>$200.00</td>

      {/* Remove From Cart Button */}
      <td className={`${tdStyles} m:absolute m:right-0 m:top-0`}>
        <div className="flex w-full items-center justify-center">
          <button className="flex items-center justify-center rounded-full border-[2px] border-[#DEDEDE] p-2 text-lightTextGray">
            <XSvg />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableItem
