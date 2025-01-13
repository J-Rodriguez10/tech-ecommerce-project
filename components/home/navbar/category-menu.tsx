"use client"

import { useState } from "react"

import Navlink from "./navlink"
import Dropdown from "./dropdown"
import {
  CAMERAS_AND_VIDEOS_LINKS,
  COMPUTERS_AND_LAPTOP_LINKS
} from "@/util/data/dropdown-links/category-menu-links"

interface CategoryMenuProps {
  isDisplayed: boolean // Refers to if the Category Menu is displayed to the user, meant to be used in conjunction with a useState button
}

function CategoryMenu({ isDisplayed }: CategoryMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  function handleMouseEnter(item: string) {
    setHoveredItem(item)
  }

  function handleMouseLeave(item: string) {
    // Ensure dropdown only hides if the user leaves both the menu item and the dropdown
    if (hoveredItem !== item) {
      setHoveredItem(null)
    }
  }

  const categoryMenuStyles =
    "relative py-[0.95rem] px-[1.25rem] text-[.9rem] font-[500] orange-hover after:absolute after:left-1/2 after:bottom-0 after:w-[90%] after:translate-x-[-50%] after:h-[0.5px] after:bg-borderGray"

  return (
    <div className="w-full relative text-lightTextGray">
      <ul
        className={`default-transition w-full overflow-hidden border-[2px] border-darkOrange ${
          isDisplayed ? "max-h-[525px]" : "max-h-[0]"
        }`}
      >
        <div
          onMouseEnter={() => handleMouseEnter("Cameras & Videos")}
          onMouseLeave={() => handleMouseLeave("Cameras & Videos")}
        >
          <Navlink
            href="/"
            className={categoryMenuStyles}
            hasCaret
            hoverContentDirection="right"
          >
            Cameras & Videos
          </Navlink>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("Computers & Laptops")}
          onMouseLeave={() => handleMouseLeave("Computers & Laptops")}
        >
          <Navlink
            href="/"
            className={categoryMenuStyles}
            hasCaret
            hoverContentDirection="right"
          >
            Computers & Laptops
          </Navlink>
        </div>
        <Navlink href="/" className={categoryMenuStyles}>
          Home Appliances
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Mobiles & Tablets
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Smart Phones
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Portable Speakers
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Music & Gaming
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Phone Cases
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Bluetooth Speaker
        </Navlink>
        <Navlink href="/" className={categoryMenuStyles}>
          Contact Us
        </Navlink>
      </ul>

      {/* Hover content for "Cameras & Videos" */}
      {hoveredItem === "Cameras & Videos" && (
        <div
          onMouseEnter={() => handleMouseEnter("Cameras & Videos")}
          onMouseLeave={() => handleMouseLeave("")}
        >
          <Dropdown
            links={CAMERAS_AND_VIDEOS_LINKS}
            className="absolute left-[100%] top-0 z-[50]"
          />
        </div>
      )}

      {/* Hover content for "Computers & Laptops" */}
      {hoveredItem === "Computers & Laptops" && (
        <div
          onMouseEnter={() => handleMouseEnter("Computers & Laptops")}
          onMouseLeave={() => handleMouseLeave("")}
        >
          <Dropdown
            links={COMPUTERS_AND_LAPTOP_LINKS}
            className="absolute left-[100%] top-[10%] z-[50]"
          />
        </div>
      )}
    </div>
  )
}

export default CategoryMenu
