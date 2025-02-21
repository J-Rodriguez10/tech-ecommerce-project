import { Links } from "@/components/home/navbar/dropdown"
import { AccordionItemProps } from "@/components/accordion-menu"

export const SHOP_LINKS: Links[] = [
  {
    headerLink: { label: "Smartphones", href: "/shop" },
    links: [
      { label: "Samsung", href: "/shop" },
      { label: "Honor", href: "/shop" },
      { label: "Motorola", href: "/shop" },
      { label: "iPhone", href: "/shop" },
      { label: "OnePlus", href: "/shop" },
      { label: "Infinix", href: "/shop" },
      { label: "Nokia", href: "/shop" }
    ]
  },
  {
    headerLink: { label: "Mobile Accessories", href: "/shop" },
    links: [
      { label: "Power Bank", href: "/shop" },
      { label: "Charger & Adapter", href: "/shop" },
      { label: "Memory Card", href: "/shop" },
      { label: "Data Cable", href: "/shop" },
      { label: "Case & Cover", href: "/shop" },
      { label: "Headphone", href: "/shop" },
      { label: "Protector", href: "/shop" }
    ]
  },
  {
    headerLink: { label: "Electronics & Appliances", href: "/shop" },
    links: [
      { label: "Television", href: "/shop" },
      { label: "Air Conditioner", href: "/shop" },
      { label: "Room Heater", href: "/shop" },
      { label: "Rice Cooker", href: "/shop" },
      { label: "Gas Burner", href: "/shop" },
      { label: "Washing Machine", href: "/shop" },
      { label: "Home Theater", href: "/shop" }
    ]
  }
]

// Links Data structured to fit AccordionMenu component
export const ACCORDION_NAVBAR_LINKS: AccordionItemProps[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    links: [
      {
        label: "Smartphones",
        href: "/shop",
        links: [
          { label: "Samsung", href: "/shop" },
          { label: "Honor", href: "/shop" },
          { label: "Motorola", href: "/shop" },
          { label: "iPhone", href: "/shop" },
          { label: "OnePlus", href: "/shop" },
          { label: "Infinix", href: "/shop" },
          { label: "Nokia", href: "/shop" }
        ]
      },
      {
        label: "Mobile Accessories",
        href: "/shop",
        links: [
          { label: "Power Bank", href: "/shop" },
          { label: "Charger & Adapter", href: "/shop" },
          { label: "Memory Card", href: "/shop" },
          { label: "Data Cable", href: "/shop" },
          { label: "Case & Cover", href: "/shop" },
          { label: "Headphone", href: "/shop" },
          { label: "Protector", href: "/shop" }
        ]
      },
      {
        label: "Electronics & Appliances",
        href: "/shop",
        links: [
          { label: "Television", href: "/shop" },
          { label: "Air Conditioner", href: "/shop" },
          { label: "Room Heater", href: "/shop" },
          { label: "Rice Cooker", href: "/shop" },
          { label: "Gas Burner", href: "/shop" },
          { label: "Washing Machine", href: "/shop" },
          { label: "Home Theater", href: "/shop" }
        ]
      }
    ]
  },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Faq", href: "/faq" }
]
