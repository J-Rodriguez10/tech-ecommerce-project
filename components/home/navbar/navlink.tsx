"use client"

import { useState, ReactNode } from "react"
import Link from "next/link"
import Caret from "../../svgs/navbar-svgs/caret-svg"

type NavlinkProps = {
  href: string // The URL for the link
  children: ReactNode // The content of the link (text or other elements)
  className?: string // Additional CSS classes for styling
  hoverContent?: ReactNode // Optional dropdown content displayed on hover
  hoverContentDirection?: "down" | "right" | "left" // Direction of the dropdown (default: down)
  hasCaret?: boolean // Determines if a caret icon is displayed with the link
  hoverContentInteractable?: boolean // Whether the dropdown content can be interacted with
}

function Navlink({
  href,
  children,
  className = "",
  hoverContent,
  hoverContentDirection = "down",
  hasCaret = false,
  hoverContentInteractable = true
}: NavlinkProps) {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false)

  // Style mapping for different dropdown directions
  const hoverContentDirectionStyles: Record<string, string> = {
    down: "left-0 top-full mt-1",
    right: "left-full top-0 ml-0",
    left: "right-full top-0 mr-1 translate-y-[4px]"
  }

  return (
    <li
      className="relative flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main link */}
      <Link
        className={`flex h-full w-full items-center whitespace-nowrap ${className}`}
        href={href}
      >
        {children}
        {hasCaret && (
          <Caret
            direction={hoverContentDirection}
            className="absolute right-0"
          />
        )}
      </Link>

      {/* Dropdown content */}
      {hoverContent && isHovered && (
        <div
          className={`absolute z-10 ${hoverContentDirectionStyles[hoverContentDirection]}`}
          onMouseEnter={
            hoverContentInteractable
              ? () => setIsHovered(true)
              : () => setIsHovered(false)
          }
          onMouseLeave={
            hoverContentInteractable ? undefined : () => setIsHovered(false)
          }
        >
          {hoverContent}
        </div>
      )}
    </li>
  )
}

export default Navlink
