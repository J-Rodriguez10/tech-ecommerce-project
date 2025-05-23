"use client"

import Link from "next/link"
import Navlink from "./navlink"
import CustomSliderArrow from "../../slider/custom-slider-arrow"
import RecommendationsSlider from "@/components/slider/recommendations-slider"


export type Links = {
  headerLink?: { label: string; href: string } // Optional header/category title with a link
  links: { label: string; href: string }[] // Array of links related to the category
}

type DropdownProps = {
  links: Links[] // List of categories and their respective links
}

/**
 * This component renders a dropdown hover menu for the "Shop" section.
 * It displays categories and their respective links, along with a product slider showcasing items.
 */

function ShopDropdownHoverMenu({ links }: DropdownProps) {
  // Slider settings for react-slick
  const settings = {
    dots: false, // Disable pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Speed in ms
    slidesToShow: 1, 
    slidesToScroll: 1, 
    nextArrow: <CustomSliderArrow direction="right" />, // Custom next arrow
    prevArrow: <CustomSliderArrow direction="left" /> // Custom previous arrow
  }

  return (
    // Outer container with pointer-events disabled to ensure hover behavior
    <div
      style={{ pointerEvents: "none" }}
      className="absolute bottom-[-112%] z-[99] m-auto h-[200px] w-full"
    >
      {/* Inner dropdown hover menu with pointer-events re-enabled */}
      <div
        style={{ pointerEvents: "auto" }}
        className="m-auto flex h-[380px] max-w-[1100px] rounded border border-gray-200 bg-white px-[.5rem] py-[1.5rem] shadow-lg"
      >
        {/* Map through each category in the links array */}
        {links.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="flex-1 border-r-[1px] border-r-gray-200 pl-[1.5rem]"
          >
            {/* Optional category header with a link */}
            {category.headerLink && (
              <h3 className="orange-hover mb-1 text-[0.9rem] font-[500] text-darkGray">
                <Link href={category.headerLink.href}>
                  {category.headerLink.label}
                </Link>
              </h3>
            )}

            {/* List of links under the category */}
            <ul className="w-auto">
              {category.links.map((link, linkIndex) => (
                <Navlink
                  key={linkIndex}
                  href={link.href}
                  className="orange-hover py-[0.6rem] text-[0.9rem] font-[500] text-lightTextGray"
                >
                  {link.label}
                </Navlink>
              ))}
            </ul>
          </div>
        ))}

        {/* Slider section for showcasing items */}
        <div className="flex flex-1 items-center justify-center">
          <RecommendationsSlider  className="max-w-[250px]"  settings={settings} slideHeight="h-[300px]"/>
        </div>
      </div>
    </div>
  )
}

export default ShopDropdownHoverMenu
