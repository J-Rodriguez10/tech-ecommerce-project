/**
 * CategoryMenu - Displays a list of product categories with optional dropdowns on hover.
 * Visibility is controlled via a state prop.
 */

"use client"

import { useState } from "react"

import Navlink from "./navlink"
import Dropdown from "./dropdown"
import {
  CAMERAS_AND_VIDEOS_LINKS,
  COMPUTERS_AND_LAPTOP_LINKS
} from "@/util/data/dropdown-links/category-menu-links"

interface CategoryMenuProps {
  isDisplayed: boolean // Determines if the category menu is visible
}

function CategoryMenu({ isDisplayed }: CategoryMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Handles when a category is hovered
  function handleMouseEnter(item: string) {
    setHoveredItem(item)
  }

  // Ensures dropdown only hides if the user leaves both the menu item and the dropdown
  function handleMouseLeave(item: string) {
    if (hoveredItem !== item) {
      setHoveredItem(null)
    }
  }

  // Shared styles for category menu items
  const categoryMenuStyles =
    "relative py-[0.95rem] px-[1.25rem] text-[.9rem] font-[500] orange-hover after:absolute after:left-1/2 after:bottom-0 after:w-[90%] after:translate-x-[-50%] after:h-[0.5px] after:bg-borderGray"

  return (
    <div className="relative w-full text-lightTextGray">
      {/* Category list container */}
      <ul
        className={`default-transition w-full overflow-hidden border-[2px] border-darkOrange ${
          isDisplayed ? "max-h-[525px]" : "max-h-[0]"
        }`}
      >
        {/* Categories with dropdowns */}
        <div
          onMouseEnter={() => handleMouseEnter("Cameras & Videos")}
          onMouseLeave={() => handleMouseLeave("")}
        >
          <Navlink
            href="/shop"
            className={categoryMenuStyles}
            hasCaret
            hoverContentDirection="right"
          >
            Cameras & Videos
          </Navlink>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("Computers & Laptops")}
          onMouseLeave={() => handleMouseLeave("")}
        >
          <Navlink
            href="/shop"
            className={categoryMenuStyles}
            hasCaret
            hoverContentDirection="right"
          >
            Computers & Laptops
          </Navlink>
        </div>

        {/* Static category links */}
        <Navlink href="/shop" className={categoryMenuStyles}>Home Appliances</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Mobiles & Tablets</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Smart Phones</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Portable Speakers</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Music & Gaming</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Phone Cases</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Bluetooth Speaker</Navlink>
        <Navlink href="/shop" className={categoryMenuStyles}>Contact Us</Navlink>
      </ul>

      {/* Dropdown for "Cameras & Videos" */}
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

      {/* Dropdown for "Computers & Laptops" */}
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
