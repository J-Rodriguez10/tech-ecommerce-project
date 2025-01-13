"use client"

import * as Accordion from "@radix-ui/react-accordion"
import Link from "next/link"
import { useState } from "react"

// Interface to define the shape of each accordion item
export interface AccordionItemProps {
  label: string // The label or title of the accordion item
  href: string // The link associated with the item
  links?: AccordionItemProps[] // Optional sub-links for nested accordion items
}

// AccordionMenu component
function AccordionMenu({ items }: { items: AccordionItemProps[] }) {
  // State to track which accordion item is currently open
  const [openItem, setOpenItem] = useState<string | null>(null)

  // Function to handle toggling accordion items
  const handleToggle = (label: string) => {
    setOpenItem(prev => (prev === label ? null : label))
  }

  return (
    <Accordion.Root type="single" collapsible>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.label}>
          {/* Accordion Header */}
          <Accordion.Header>
            <div
              className="flex cursor-pointer items-center justify-between px-4 py-[0.6rem]"
              onClick={() => handleToggle(item.label)}
            >
              {/* Link for the label */}
              <Link
                href={item.href}
                className="text-[1rem] font-[500] text-lightTextGray"
              >
                {item.label}
              </Link>
              {/* Toggle icon for items with nested links */}
              {item.links && (
                <span className="text-darkGray">
                  {openItem === item.label ? "-" : "+"}
                </span>
              )}
            </div>
          </Accordion.Header>

          {/* Accordion Content */}
          <Accordion.Content forceMount>
            {openItem === item.label && item.links && (
              <div className="pl-4">
                {/* Recursively render nested items */}
                <AccordionMenu items={item.links} />
              </div>
            )}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default AccordionMenu
