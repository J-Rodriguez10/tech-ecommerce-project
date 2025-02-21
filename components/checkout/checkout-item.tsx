import Image from "next/image"
import React from "react"

function CheckoutItem() {
  return (
    <li className="items-between flex justify-between">
      {/* Left */}
      <div className="flex max-w-[230px] items-center gap-2">
        {/* Product Image */}
        <div className="relative h-[64px] w-[64px] rounded-lg border-[1px] border-[#DEDEDE] bg-[#FAFAFA] !px-[1rem]">
          <Image
            src="https://cdn.shopify.com/s/files/1/0035/5762/1829/files/24_128x128.jpg?v=1701772818"
            fill
            alt="OnePlus 6t Mirror"
            className="light-shadow mx-auto max-w-[90%] object-contain"
          />

          {/* Amount */}
          <span className="absolute right-[-10%] top-[-10%] z-[10] flex h-5 w-5 items-center justify-center rounded-full bg-[#0000008f] text-center font-[500] text-white">
            1
          </span>
        </div>

        {/* Product Stats */}
        <div className="flex flex-col">
          <p className="font-[500] text-black">OnePlus 6t Mirror</p>
          <span className="text-[0.8rem] text-lightTextGray">128GB / Gray</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center">
        {/* Product Price */}
        <p className="font-[500] text-black">$150.00</p>
      </div>
    </li>
  )
}

export default CheckoutItem
