/**
 * Dropdown component displays a list of categories with optional headers
 * and links associated with each category. It takes an array of links and 
 * renders them in a responsive dropdown layout.
 */

import Link from "next/link"
import Navlink from "./navlink"

export type Links = {
  headerLink?: { label: string; href: string } // Optional category title with link
  links: { label: string; href: string }[] // List of category links
}

type DropdownProps = {
  links: Links[] // Array of categories with associated links
  className?: string // Additional CSS classes
}

function Dropdown({ links, className = "" }: DropdownProps) {
  return (
    <div
      className={`flex min-w-[890px] gap-8 rounded border border-gray-200 bg-white px-[1.3rem] py-[1.4rem] shadow-lg ${className} l:min-w-[725px]`}
    >
      {links.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex-1">
          {/* Optional category header */}
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
                className="orange-hover py-[0.35rem] text-[0.9rem] font-[500] text-lightTextGray"
              >
                {link.label}
              </Navlink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Dropdown