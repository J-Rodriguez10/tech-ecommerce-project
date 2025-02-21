"use client"

import Image from "next/image"
import { useState } from "react"

import ShopDropdownHoverMenu from "./shop-dropdown-hover-menu"
import { SHOP_LINKS } from "@/util/data/dropdown-links/navbar-links"
import MobileMenu from "./mobile-menu"
import Searchbar from "./searchbar"
import NavbarFeaturesList from "./navbar-features"
import CategoryMenuContainer from "./category-menu-container"
import NavbarCenterLinks from "./navbar-center-links"
import CartSideMenu from "./cart-side-menu"

interface NavbarProps {
  hasCategoryMenu?: boolean // Controls whether the category menu is displayed (not all pages have the category menu part of the Navbar)
}

function Navbar({ hasCategoryMenu = true }: NavbarProps) {
  // State for displaying the hover menu for the "shop" link when hovered
  const [isShopHovered, setIsShopHovered] = useState(false)

  // State for toggling the category side menu
  const [isCategoryMenuDisplayed, setIsCategoryMenuDisplayed] = useState(true)

  // State for tracking which mobile menu is currently displayed (if any)
  const [mobileMenuDisplayed, setMobileMenuDisplayed] = useState<string | null>(
    null
  )

  // State for toggling the cart menu display
  const [isCartMenuDisplayed, setIsCartMenuDisplayed] = useState(false)

  function handleMobileMenuDisplay(menu: string) {
    setMobileMenuDisplayed(prev => (prev === menu ? null : menu))
  }

  function handleMobileMenuClose() {
    setMobileMenuDisplayed(null)
  }

  function toggleCartMenuDisplay() {
    setIsCartMenuDisplayed(prev => !prev)
  }

  return (
    <nav className="relative">
      {/* Top section of the navbar */}
      <div className="cont text-lightTextGray">
        <div className="flex h-[112px] items-center justify-between">
          {/* Logo */}
          <Image
            width={150}
            height={18.5}
            src="https://quickstep007.myshopify.com/cdn/shop/files/logo_74cea665-41e6-4e29-a95a-56ceb67bb81e_150x@2x.png?v=1702468281"
            alt="Phoone"
          />

          {/* Search bar for finding products */}
          <Searchbar />

          {/* List of navbar features (cart, user account, etc.) */}
          <NavbarFeaturesList
            handleMobileMenuDisplay={handleMobileMenuDisplay}
            toggleCartMenuDisplay={toggleCartMenuDisplay}
          />
        </div>
      </div>

      {/* Bottom section of the navbar */}
      <div
        className={`min-w-screen bg-darkGray m:bg-white ${!hasCategoryMenu ? "m:hidden" : ""}`}
      >
        <div className="cont relative flex h-[65.5px] items-center justify-between text-white">
          {/* Category menu (only displayed if enabled) */}
          {hasCategoryMenu && (
            <CategoryMenuContainer
              handleMobileMenuDisplay={handleMobileMenuDisplay}
              setIsCategoryMenuDisplayed={setIsCategoryMenuDisplayed}
              isCategoryMenuDisplayed={isCategoryMenuDisplayed}
            />
          )}

          {/* Center-aligned navigation links */}
          <NavbarCenterLinks setIsShopHovered={setIsShopHovered} />
        </div>

        {/* Shop dropdown menu (shown when hovered) */}
        {isShopHovered && (
          <div
            onMouseEnter={() => setIsShopHovered(true)}
            onMouseLeave={() => setIsShopHovered(false)}
            className="z-10"
          >
            <ShopDropdownHoverMenu links={SHOP_LINKS} />
          </div>
        )}
      </div>

      {/* Mobile navigation menus */}
      <MobileMenu
        handleMenuClose={handleMobileMenuClose}
        variant="category-menu"
        className={`hidden ${mobileMenuDisplayed === "category-menu" ? "m:block" : "m:hidden"}`}
      />
      <MobileMenu
        handleMenuClose={handleMobileMenuClose}
        variant="navbar-menu"
        className={`hidden ${mobileMenuDisplayed === "navbar-menu" ? "m:block" : "m:hidden"}`}
      />

      {/* Cart sidebar menu (shown when cart is toggled) */}
      {isCartMenuDisplayed && (
        <CartSideMenu toggleCartMenuDisplay={toggleCartMenuDisplay} />
      )}
    </nav>
  )
}

export default Navbar
