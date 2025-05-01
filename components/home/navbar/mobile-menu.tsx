/**
 * This component represents the mobile menu that can display either a category menu or a navbar menu, depending on the provided variant.
 * It includes a search bar, a list of collapsible links in an accordion format, and a close button for dismissing the menu.
 * The backdrop is clickable to close the menu, and it also stops the event propagation when clicking inside the menu to avoid closing it immediately.
 */
import AccordionMenu from "../../accordion-menu"
import SearchSvg from "../../svgs/navbar-svgs/search-svg"
import XSvg from "../../svgs/x"
import { ACCORDION_CATEGORY_LINKS } from "@/util/data/dropdown-links/category-menu-links"
import { ACCORDION_NAVBAR_LINKS } from "@/util/data/dropdown-links/navbar-links"

interface MobileMenuProps {
  handleMenuClose: () => void // State function handling the closing of the Mobile Menu
  className?: string // Optional additional className to style the outer container
  variant: "category-menu" | "navbar-menu" // Determines which set of links to display (category or navbar)
}

function MobileMenu({
  className = "",
  variant,
  handleMenuClose
}: MobileMenuProps) {
  // Menu links are dynamically chosen based on the variant (category or navbar menu)
  const menuLinks = {
    "category-menu": ACCORDION_CATEGORY_LINKS,
    "navbar-menu": ACCORDION_NAVBAR_LINKS
  }

  return (
    // Backdrop that closes the menu when clicked
    <div
      onClick={handleMenuClose}
      className={`fixed left-0 top-0 z-[100] h-screen w-screen bg-[#0d0d0d6f] ${className}`}
    >
      <aside
        className="relative h-screen w-[370px] bg-white py-[1.35rem]"
        onClick={e => e.stopPropagation()} // Prevent event from propagating to the parent div, so the menu doesn’t close immediately
      >
        {/* Search bar section */}
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

        {/* Accordion menu with links */}
        <AccordionMenu items={menuLinks[variant]} />

        {/* Close button for the mobile menu */}
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
