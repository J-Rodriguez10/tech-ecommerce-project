/**
 * NavbarFeaturesList - Renders a list of interactive navbar features, including 
 * favorite items, user account, cart, and mobile menu toggle.
 */

import UserSvg from "@/components/svgs/navbar-svgs/user-svg"
import Navlink from "./navlink"
import Star from "@/components/svgs/navbar-svgs/star"
import ShoppingBag from "@/components/svgs/navbar-svgs/shopping-bag"
import MenuSvg from "@/components/svgs/navbar-svgs/menu-svg"

interface NavbarFeaturesListProps {
  handleMobileMenuDisplay: (menu: string) => void // Toggles mobile menu
  toggleCartMenuDisplay: () => void // Toggles cart menu
}

function NavbarFeaturesList({
  handleMobileMenuDisplay,
  toggleCartMenuDisplay
}: NavbarFeaturesListProps) {
  return (
    <ul className="flex gap-[1.5rem] text-darkGray">
      {/* Wishlist */}
      <Navlink className="orange-hover" href="/wishlist">
        <Star />
      </Navlink>

      {/* User Account */}
      <Navlink className="orange-hover" href="/account">
        <UserSvg />
      </Navlink>

      {/* Shopping Cart */}
      <li>
        <div className="orange-hover flex h-full cursor-pointer items-center justify-center">
          <button onClick={toggleCartMenuDisplay}>
            <ShoppingBag />
          </button>
        </div>
      </li>

      {/* Mobile Menu Toggle (Visible on smaller screens) */}
      <li className="hidden m:flex m:items-center m:justify-center">
        <button onClick={() => handleMobileMenuDisplay("navbar-menu")}>
          <MenuSvg className="h-[40px] w-[40px]" />
        </button>
      </li>
    </ul>
  )
}

export default NavbarFeaturesList
