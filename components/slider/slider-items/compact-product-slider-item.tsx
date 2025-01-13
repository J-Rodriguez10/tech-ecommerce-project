import Image from "next/image"

// import Navlink from "@/components/home/navbar/navlink"
import Rating from "@/components/rating"
// import Compare from "@/components/svgs/compare"
// import Heart from "@/components/svgs/heart"
// import MagnifyingGlass from "@/components/svgs/magnifying-glass"

interface CompactProductItemSliderProps {
  slideHeight?: string // represents the height for the individual slide components (Slick plugin cannot dynamically set height). By default its set to "h-[370px] l:h-[320px] s:min-h-[600px]" which will work for basic
}

function CompactProductItemSlider({
  slideHeight = "h-[125px]"
}: CompactProductItemSliderProps) {
  return (
    <div className={`${slideHeight} `}>
      <div className="relative flex min-h-full gap-[.8rem] px-4 py-4 text-darkGray">
        {/* Left section: product image */}
        <div className="relative flex max-w-[95px] flex-[1] items-center justify-center">
          {/* Box shadow for product image  */}
          <div className="light-shadow relative h-[95%] w-[95%] overflow-hidden rounded-[1.25rem] p-[10px]">
            {/* Initial image */}
            <Image
              src="https://quickstep007.myshopify.com/cdn/shop/files/24_1024x1024.jpg?v=1701772818"
              alt="pic"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right section: product description */}
        <div className="flex flex-[3] flex-col items-start justify-center gap-[10px] m:flex-[2.33]">
          {/* 5 star rating */}
          <Rating rating={3.5} />

          {/* Container for product name and "+ Select Options" */}

          {/* Product name */}
          <p className="orange-hover text-[1.1rem] font-[400]">
            Oneplus 6t Mirror
          </p>

          {/* Price */}
          <p className="text-[0.9rem] font-[500]">$150.00</p>
        </div>
      </div>
    </div>
  )
}

export default CompactProductItemSlider
