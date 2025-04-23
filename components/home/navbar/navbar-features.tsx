"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import Navlink from "./navlink"
import Star from "@/components/svgs/navbar-svgs/star"
import UserSvg from "@/components/svgs/navbar-svgs/user-svg"
import ShoppingBag from "@/components/svgs/navbar-svgs/shopping-bag"
import MenuSvg from "@/components/svgs/navbar-svgs/menu-svg"

interface NavbarFeaturesListProps {
  handleMobileMenuDisplay: (menu: string) => void
  toggleCartMenuDisplay: () => void
}

export default function NavbarFeaturesList({
  handleMobileMenuDisplay,
  toggleCartMenuDisplay
}: NavbarFeaturesListProps) {
  // Grab authentication & verification status
  const { isAuthenticated } = useSelector((state: RootState) => state.user)

  // Only allow access to /wishlist if the user is both signed in and verified
  const wishlistHref = isAuthenticated ? "/wishlist" : "/account"

  return (
    <ul className="flex gap-[1.5rem] text-darkGray">
      {/* Wishlist (gated on verification) */}

      <Navlink className="orange-hover" href={wishlistHref}>
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

      {/* Mobile Menu Toggle */}
      <li className="hidden m:flex m:items-center m:justify-center">
        <button onClick={() => handleMobileMenuDisplay("navbar-menu")}>
          <MenuSvg className="h-[40px] w-[40px]" />
        </button>
      </li>
    </ul>
  )
}
