import { Links } from "@/components/home/navbar/dropdown"
import { AccordionItemProps } from "@/components/accordion-menu"

export const SHOP_LINKS: Links[] = [
  {
    headerLink: { label: "Smartphones", href: "/smartphones" },
    links: [
      { label: "Samsung", href: "/smartphones/samsung" },
      { label: "Honor", href: "/smartphones/honor" },
      { label: "Motorola", href: "/smartphones/motorola" },
      { label: "iPhone", href: "/smartphones/iphone" },
      { label: "OnePlus", href: "/smartphones/oneplus" },
      { label: "Infinix", href: "/smartphones/infinix" },
      { label: "Nokia", href: "/smartphones/nokia" }
    ]
  },
  {
    headerLink: { label: "Mobile Accessories", href: "/mobile-accessories" },
    links: [
      { label: "Power Bank", href: "/mobile-accessories/power-bank" },
      {
        label: "Charger & Adapter",
        href: "/mobile-accessories/charger-adapter"
      },
      { label: "Memory Card", href: "/mobile-accessories/memory-card" },
      { label: "Data Cable", href: "/mobile-accessories/data-cable" },
      { label: "Case & Cover", href: "/mobile-accessories/case-cover" },
      { label: "Headphone", href: "/mobile-accessories/headphone" },
      { label: "Protector", href: "/mobile-accessories/protector" }
    ]
  },
  {
    headerLink: {
      label: "Electronics & Appliances",
      href: "/electronics-appliances"
    },
    links: [
      { label: "Television", href: "/electronics-appliances/television" },
      {
        label: "Air Conditioner",
        href: "/electronics-appliances/air-conditioner"
      },
      { label: "Room Heater", href: "/electronics-appliances/room-heater" },
      { label: "Rice Cooker", href: "/electronics-appliances/rice-cooker" },
      { label: "Gas Burner", href: "/electronics-appliances/gas-burner" },
      {
        label: "Washing Machine",
        href: "/electronics-appliances/washing-machine"
      },
      { label: "Home Theater", href: "/electronics-appliances/home-theater" }
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
        href: "/shop/smartphones",
        links: [
          { label: "Samsung", href: "/" },
          { label: "Honor", href: "/" },
          { label: "Motorola", href: "/" },
          { label: "iPhone", href: "/" },
          { label: "OnePlus", href: "/" },
          { label: "Infinix", href: "/" },
          { label: "Nokia", href: "/" }
        ]
      },
      {
        label: "Mobile Accessories",
        href: "/shop/mobile-accessories",
        links: [
          { label: "Power Bank", href: "/shop/mobile-accessories/power-bank" },
          {
            label: "Charger & Adapter",
            href: "/shop/mobile-accessories/charger-adapter"
          },
          {
            label: "Memory Card",
            href: "/shop/mobile-accessories/memory-card"
          },
          { label: "Data Cable", href: "/shop/mobile-accessories/data-cable" },
          {
            label: "Case & Cover",
            href: "/shop/mobile-accessories/case-cover"
          },
          { label: "Headphone", href: "/shop/mobile-accessories/headphone" },
          { label: "Protector", href: "/shop/mobile-accessories/protector" }
        ]
      },
      {
        label: "Electronics & Appliances",
        href: "/shop/electronics-appliances",
        links: [
          {
            label: "Television",
            href: "/shop/electronics-appliances/television"
          },
          {
            label: "Air Conditioner",
            href: "/shop/electronics-appliances/air-conditioner"
          },
          {
            label: "Room Heater",
            href: "/shop/electronics-appliances/room-heater"
          },
          {
            label: "Rice Cooker",
            href: "/shop/electronics-appliances/rice-cooker"
          },
          {
            label: "Gas Burner",
            href: "/shop/electronics-appliances/gas-burner"
          },
          {
            label: "Washing Machine",
            href: "/shop/electronics-appliances/washing-machine"
          },
          {
            label: "Home Theater",
            href: "/shop/electronics-appliances/home-theater"
          }
        ]
      }
    ]
  },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Faq", href: "/faq" }
]
