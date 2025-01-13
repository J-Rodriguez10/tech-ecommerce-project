import Image from "next/image"

import Navlink from "@/components/home/navbar/navlink"
import Rating from "@/components/rating"
import Compare from "@/components/svgs/compare"
import Heart from "@/components/svgs/heart"
import MagnifyingGlass from "@/components/svgs/magnifying-glass"

interface ProductItemSliderProps {
  slideHeight?: string // represents the height for the individual slide components (Slick plugin cannot dynamically set height). By default its set to "h-[370px] l:h-[320px] s:min-h-[600px]" which will work for basic
  hoverButtons?: boolean // controls whether or not the hover buttons appear when user hovers
}

function ProductItemSlider({
  slideHeight = "h-[370px] l:h-[320px] s:min-h-[600px]",
  hoverButtons = true
}: ProductItemSliderProps) {
  const hoverButtonsStyle =
    "black-hover flex min-h-[40px] min-w-[40px] items-center justify-center rounded-[50%] bg-darkOrange text-white"

  return (
    <div className={`${slideHeight} l:px-0`}>
      <div className="group relative grid min-h-full grid-rows-[75%_25%] overflow-hidden text-darkGray">
        {/* top section: product image */}
        <div className="relative flex items-center justify-center">
          <div className="light-shadow relative h-[95%] w-[95%] p-[10px]">
            {/* initial image */}
            <Image
              src="https://quickstep007.myshopify.com/cdn/shop/files/24_1024x1024.jpg?v=1701772818"
              alt="pic"
              fill
              className="absolute inset-0 object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            {/* hover image */}
            <Image
              src="https://quickstep007.myshopify.com/cdn/shop/files/25_1024x1024.jpg?v=1701772818"
              alt="hover-pic"
              fill
              className="absolute inset-0 object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
          </div>

          {/* hover buttons */}
          {hoverButtons && (
            <ul className="absolute right-4 top-[15%] flex transform flex-col gap-[0.5rem] opacity-0 duration-500 ease-in-out group-hover:-translate-y-[10%] group-hover:opacity-100">
              <Navlink
                className={hoverButtonsStyle}
                href="/"
                hoverContent={<ButtonLabel label="Add to wishlist" />}
                hoverContentDirection="left"
                hoverContentInteractable={false}
              >
                <Heart />
              </Navlink>
              <Navlink
                className={hoverButtonsStyle}
                href="/"
                hoverContent={<ButtonLabel label="Compare" />}
                hoverContentDirection="left"
                hoverContentInteractable={false}
              >
                <Compare />
              </Navlink>
              <Navlink
                className={hoverButtonsStyle}
                href="/"
                hoverContent={<ButtonLabel label="Quick View" />}
                hoverContentDirection="left"
                hoverContentInteractable={false}
              >
                <MagnifyingGlass />
              </Navlink>
            </ul>
          )}
        </div>

        {/* bottom section: product description */}
        <div className="flex flex-col justify-center gap-[10px] text-center">
          {/* 5 star rating */}
          <Rating rating={3.5} />

          {/* Container for product name and "+ Select Options" */}
          <div className="relative h-[25px]">
            {/* Product name */}
            <p className="absolute inset-x-0 text-[1.1rem] font-[400] transition-all duration-500 ease-in-out group-hover:translate-y-[-9px] group-hover:opacity-0">
              Oneplus 6t Mirror
            </p>

            {/* Select Options button */}
            <div className="absolute inset-x-0 translate-y-[10px] text-[1.1rem] font-[500] text-darkOrange opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-[-1px] group-hover:opacity-100">
              + Select Options
            </div>
          </div>

          {/* price */}
          <p className="text-[0.9rem] font-[500]">$150.00</p>
        </div>
      </div>
    </div>
  )
}

interface ButtonLabelProps {
  label: string // The label corresponding to the individual Hover Buttons
}

function ButtonLabel({ label }: ButtonLabelProps) {
  return (
    <p className="relative inline-block whitespace-nowrap bg-darkGray px-[0.7rem] py-[.4rem] text-[0.75rem] capitalize text-white">
      {label}
      <span className="absolute right-[-6px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-darkGray" />
    </p>
  )
}

export default ProductItemSlider
