/**
 * Navlink - A flexible navigation link that supports hover-based dropdowns.
 * Can display a caret icon and handle different dropdown directions.
 */

"use client"

import { useState, ReactNode } from "react"
import Link from "next/link"
import Caret from "../../svgs/navbar-svgs/caret-svg"

type NavlinkProps = {
  href: string // Link destination
  children: ReactNode // Link content (text or elements)
  className?: string // Custom styling classes
  hoverContent?: ReactNode // Optional dropdown content
  hoverContentDirection?: "down" | "right" | "left" // Dropdown direction (default: down)
  hasCaret?: boolean // Shows a caret icon if true
  hoverContentInteractable?: boolean // Allows interaction with dropdown if true
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
  const [isHovered, setIsHovered] = useState(false) // Tracks hover state

  // Positioning styles for dropdown based on direction
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
