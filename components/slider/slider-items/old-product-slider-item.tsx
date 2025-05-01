/**
 * This component represents an individual product item in a slider.
 * It includes a product image (with hover effect), product description, rating, and interactive buttons like "Add to wishlist", "Compare", and "Quick View".
 */

import Image from "next/image"

import Navlink from "@/components/home/navbar/navlink"
import Rating from "@/components/rating"
import Compare from "@/components/svgs/compare"
import Heart from "@/components/svgs/heart"
import MagnifyingGlass from "@/components/svgs/magnifying-glass"
import Link from "next/link"

interface OldProductItemSliderProps {
  slideHeight?: string // Represents the height for the individual slide components (Slick plugin cannot dynamically set height). Default is set to "h-[370px] l:h-[320px] s:min-h-[600px]" which works for basic setups.
  hoverButtons?: boolean // Controls whether or not the hover buttons appear when user hovers over the product.
}

function OldProductItemSlider({
  slideHeight = "h-[370px] l:h-[320px] s:min-h-[600px]",
  hoverButtons = true
}: OldProductItemSliderProps) {
  // Style for the hover buttons that appear on the product image
  const hoverButtonsStyle =
    "black-hover flex min-h-[40px] min-w-[40px] h-[30%] w-[30%] items-center justify-center rounded-[50%] bg-darkOrange text-white"

  return (
    // The outer container for the product, controlling the height through Tailwind or CSS
    <div className={`${slideHeight} product l:px-0`}>
      <div className="group relative grid min-h-full grid-rows-[70%_30%] overflow-hidden text-darkGray">
        {/* Top section: Product image */}
        <div className="relative flex items-center justify-center">
          <div className="light-shadow relative h-[95%] w-[95%] p-[10px]">
            {/* Initial image shown by default */}
            <Image
              src="https://quickstep007.myshopify.com/cdn/shop/files/24_1024x1024.jpg?v=1701772818"
              alt="pic"
              fill
              className="absolute inset-0 object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            {/* Hover image shown when the user hovers */}
            <Image
              src="https://quickstep007.myshopify.com/cdn/shop/files/25_1024x1024.jpg?v=1701772818"
              alt="hover-pic"
              fill
              className="absolute inset-0 object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
          </div>

          {/* Hover buttons (only visible on hover) */}
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

        {/* Bottom section: Product description */}
        <div className="flex flex-col justify-center gap-[10px] text-center">
          {/* 5-star rating */}
          <Rating rating={3.5} />

          {/* Container for the product name and "+ Select Options" */}
          <div className="relative h-[25px]">
            {/* Product name */}
            <p className="absolute inset-x-0 text-[1.1rem] font-[400] transition-all duration-500 ease-in-out group-hover:translate-y-[-9px] group-hover:opacity-0">
              Oneplus 6t Mirror
            </p>

            {/* Select Options button */}
            <Link
              href={`/shop/productId`}
              className="absolute inset-x-0 translate-y-[10px] text-[1.1rem] font-[500] text-darkOrange opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-[-1px] group-hover:opacity-100"
            >
              + Select Options
            </Link>
          </div>

          {/* Product price */}
          <p className="text-[0.9rem] font-[500]">$150.00</p>
        </div>
      </div>
    </div>
  )
}

// This component renders the labels for the hover buttons on the product image.

interface ButtonLabelProps {
  label: string // The label corresponding to the individual hover buttons.
}

function ButtonLabel({ label }: ButtonLabelProps) {
  return (
    <p className="relative inline-block whitespace-nowrap bg-darkGray px-[0.7rem] py-[.4rem] text-[0.75rem] capitalize text-white">
      {label}
      <span className="absolute right-[-6px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-darkGray" />
    </p>
  )
}

export default OldProductItemSlider
