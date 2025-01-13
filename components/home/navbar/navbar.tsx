"use client"

import Image from "next/image"
import { useState } from "react"

import Star from "../../svgs/navbar-svgs/star"
import UserSvg from "../../svgs/navbar-svgs/user-svg"
import ShoppingBag from "../../svgs/navbar-svgs/shopping-bag"
import SearchSvg from "../../svgs/navbar-svgs/search-svg"
import MenuSvg from "../../svgs/navbar-svgs/menu-svg"
import Navlink from "./navlink"
import CategoryMenu from "./category-menu"
import ShopDropdownHoverMenu from "./shop-dropdown-hover-menu"
import { SHOP_LINKS } from "@/util/data/dropdown-links/navbar-links"
import MobileMenu from "./mobile-menu"

function Navbar() {
  const [isShopHovered, setIsShopHovered] = useState(false)
  const [isCategoryMenuDisplayed, setIsCategoryMenuDisplayed] = useState(true) // Desktop category menu toggle
  const [mobileMenuDisplayed, setMobileMenuDisplayed] = useState<string | null>(
    null
  ) // Active mobile menu toggle

  // Handles toggling the mobile menu (navbar or category menu)
  function handleMobileMenuDisplay(menu: string) {
    setMobileMenuDisplayed(prev => (prev === menu ? null : menu))
  }

  // Closes any open mobile menu
  function handleMobileMenuClose() {
    setMobileMenuDisplayed(null)
  }

  return (
    <nav className="relative">
      {/* top half */}
      <div className="cont text-lightTextGray">
        <div className="flex h-[112px] items-center justify-between">
          {/* logo */}
          <Image
            width={150}
            height={18.5}
            src="https://quickstep007.myshopify.com/cdn/shop/files/logo_74cea665-41e6-4e29-a95a-56ceb67bb81e_150x@2x.png?v=1702468281"
            alt="Phoone"
          />
          {/* product search bar */}
          <div className="relative w-[400px] m:hidden">
            <input
              className="h-[50px] w-full rounded-[1.5rem] border border-gray-300 bg-[#f7f8fa] px-[1rem] pr-[3rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search Our Store"
              type="text"
            />
            <button className="orange-hover absolute right-4 top-1/2 flex -translate-y-1/2 transform gap-[.5rem] text-[1.1rem] font-[400] text-darkGray focus:outline-none">
              <SearchSvg />
              Search
            </button>
          </div>

          {/* features listing */}
          <ul className="flex gap-[1.5rem] text-darkGray">
            <Navlink className="orange-hover" href="/">
              <Star />
            </Navlink>
            <Navlink className="orange-hover" href="/">
              <UserSvg />
            </Navlink>
            <li>
              <div className="orange-hover flex h-full cursor-pointer items-center justify-center">
                <ShoppingBag />
              </div>
            </li>
            {/* Handles the Mobile Navbar Links Menu */}
            <li className="hidden m:flex m:items-center m:justify-center">
              <button onClick={() => handleMobileMenuDisplay("navbar-menu")}>
                <MenuSvg className="h-[40px] w-[40px]" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom half */}
      <div className="min-w-screen bg-darkGray m:bg-white">
        <div className="cont relative flex h-[65.5px] items-center justify-between text-white">
          {/* category menu - placed left  -- OPTIONAL --*/}
          <aside className="absolute bottom-0 top-0 h-full max-h-[64px] w-[21%] min-w-[210px] m:relative m:w-full">
            {/* Toggles the Desktop Category Menu and Mobile Category Menu */}
            <button
              onClick={() => {
                if (window.innerWidth <= 990) {
                  handleMobileMenuDisplay("category-menu") // Mobile
                } else {
                  setIsCategoryMenuDisplayed(prev => !prev) // Desktop
                }
              }}
              className="flex h-full w-full items-center justify-between gap-[0.7rem] bg-darkOrange px-[1rem] text-[1.1rem] font-[500] uppercase"
            >
              Shop By Category
              <MenuSvg />
            </button>
            <div className="m:hidden">
              <CategoryMenu isDisplayed={isCategoryMenuDisplayed} />
            </div>
          </aside>

          {/* navlinks - placed center */}
          <ul className="m-auto flex h-full gap-[2.3rem] text-[1rem] font-[500] m:hidden">
            <Navlink className="orange-hover" href="/">
              Home
            </Navlink>
            <div
              className="ml-[10px] flex items-center justify-end"
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
            >
              <Navlink className="orange-hover pr-[1.5rem]" hasCaret href="/">
                Shop
              </Navlink>
            </div>
            <Navlink className="orange-hover" href="/">
              About Us
            </Navlink>
            <Navlink className="orange-hover" href="/">
              Blog
            </Navlink>
            <Navlink className="orange-hover" href="/">
              Faq
            </Navlink>
          </ul>
        </div>

        {/* Shop dropdown menu */}
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

      {/* Mobile Menus */}
      <MobileMenu
        handleMenuClose={handleMobileMenuClose}
        variant="category-menu"
        className={`hidden ${
          mobileMenuDisplayed === "category-menu" ? "m:block" : "m:hidden"
        }`}
      />
      <MobileMenu
        handleMenuClose={handleMobileMenuClose}
        variant="navbar-menu"
        className={`hidden ${
          mobileMenuDisplayed === "navbar-menu" ? "m:block" : "m:hidden"
        }`}
      />
    </nav>
  )
}

export default Navbar
