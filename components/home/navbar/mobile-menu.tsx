import { ACCORDION_NAVBAR_LINKS } from "@/util/data/dropdown-links/navbar-links"
import AccordionMenu from "../../accordion-menu"

import SearchSvg from "../../svgs/navbar-svgs/search-svg"
import XSvg from "../../svgs/x"

import { ACCORDION_CATEGORY_LINKS } from "@/util/data/dropdown-links/category-menu-links"

interface MobileMenuProps {
  handleMenuClose: () => void // state function handling the closing of the Mobile Menu
  className?: string
  variant: "category-menu" | "navbar-menu" // Refers to the mobile menu version that will be displayed, depending on the variant, different links will appear in the MobileMenu Component
}

function MobileMenu({
  className = "",
  variant,
  handleMenuClose
}: MobileMenuProps) {
  const menuLinks = {
    "category-menu": ACCORDION_CATEGORY_LINKS,
    "navbar-menu": ACCORDION_NAVBAR_LINKS
  }

  return (
    // Backdrop
    <div
      onClick={handleMenuClose}
      className={`fixed left-0 top-0 z-[100] h-screen w-screen bg-[#0d0d0d6f] ${className}`}
    >
      <aside
        className="relative h-screen w-[370px] bg-white py-[1.35rem]"
        onClick={e => e.stopPropagation()} // Prevent event from propagating to the parent div
      >
        {/* Search bar */}
        <div className="relative mb-[1.5rem] px-4">
          <input
            className="h-[43px] w-full border border-gray-300 bg-[#f1f1f2] pl-[1.5rem] text-darkGray placeholder-darkGray focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Our Store"
            type="text"
          />
          <button className="orange-hover absolute right-[1.5rem] top-[25%] flex h-[0.9rem] w-[0.9rem] text-lightTextGray focus:outline-none">
            <SearchSvg />
          </button>
        </div>

        {/* Mobile navlinks */}
        <AccordionMenu items={menuLinks[variant]} />

        {/* Close mobile menu button */}
        <button
          onClick={handleMenuClose}
          className="absolute right-[-2.70rem] top-0 bg-darkGray p-[0.3rem] text-white"
        >
          <XSvg className="h-[2rem] w-[2rem]" />
        </button>
      </aside>
    </div>
  )
}

export default MobileMenu
