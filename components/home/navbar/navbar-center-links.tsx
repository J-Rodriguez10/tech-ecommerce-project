import Navlink from "./navlink"

interface NavbarCenterLinksProps {
  // Function to toggle the hover state of the "Shop" link
  setIsShopHovered: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Renders the main center navigation links with hover handling for the "Shop" link dropdown.
 */

function NavbarCenterLinks({setIsShopHovered}: NavbarCenterLinksProps) {
  return (
    <ul className="m-auto flex h-full gap-[2.3rem] text-[1rem] font-[500] m:hidden">
      <Navlink className="orange-hover" href="/">
        Home
      </Navlink>

      {/* Hovering the "Shop" link will trigger a dropdown menu*/}
      <div
        className="ml-[10px] flex items-center justify-end"
        onMouseEnter={() => setIsShopHovered(true)}
        onMouseLeave={() => setIsShopHovered(false)}
      >
        <Navlink className="orange-hover pr-[1.5rem]" hasCaret href="/shop">
          Shop
        </Navlink>
      </div>
      <Navlink className="orange-hover" href="/about-us">
        About Us
      </Navlink>
      <Navlink className="orange-hover" href="/blog">
        Blog
      </Navlink>
      <Navlink className="orange-hover" href="/faq">
        Faq
      </Navlink>
    </ul>
  )
}

export default NavbarCenterLinks
