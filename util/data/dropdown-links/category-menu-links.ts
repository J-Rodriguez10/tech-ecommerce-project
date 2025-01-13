import { AccordionItemProps } from "@/components/accordion-menu"
import { Links } from "@/components/home/navbar/dropdown"

export const CAMERAS_AND_VIDEOS_LINKS: Links[] = [
  {
    headerLink: { label: "Airpods", href: "/airpods" },
    links: [
      { label: "Headphones", href: "/airpods/headphones" },
      { label: "Mini Speaker", href: "/airpods/mini-speaker" },
      { label: "Wireless Charging", href: "/airpods/wireless-charging" },
      { label: "Airpod Cases", href: "/airpods/cases" }
    ]
  },
  {
    headerLink: { label: "Headphones", href: "/cameras-videos" },
    links: [
      { label: "Mini Speakers", href: "/cameras-videos/cameras" },
      { label: "Mobiles & Tablets", href: "/cameras-videos/headphones" },
      { label: "Portable Speakers", href: "/cameras-videos/mini-speaker" },
      { label: "Music & Gaming", href: "/cameras-videos/action-cameras" }
    ]
  },
  {
    headerLink: { label: "iPads", href: "/ipads" },
    links: [
      { label: "Accessories", href: "/ipads/accessories" },
      { label: "Cameras", href: "/ipads/cameras" },
      { label: "Headphones", href: "/ipads/headphones" },
      { label: "Mini Speaker", href: "/ipads/mini-speaker" }
    ]
  },
  {
    headerLink: { label: "Laptops", href: "/laptops" },
    links: [
      { label: "Smart Watches", href: "/laptops/smart-watches" },
      { label: "Smart Television", href: "/laptops/smart-television" },
      { label: "Smart Phones", href: "/laptops/smart-phones" },
      { label: "Computers", href: "/laptops/computers" }
    ]
  }
]

export const COMPUTERS_AND_LAPTOP_LINKS: Links[] = [
  {
    headerLink: { label: "Desktop Computers", href: "/desktop-computers" },
    links: [
      { label: "All-in-One Computers", href: "/desktop-computers/all-in-one" },
      { label: "Gaming Desktops", href: "/desktop-computers/gaming" },
      { label: "Business Desktops", href: "/desktop-computers/business" },
      { label: "Office Computers", href: "/desktop-computers/office" }
    ]
  },
  {
    headerLink: { label: "Laptops", href: "/laptops" },
    links: [
      { label: "Gaming Laptops", href: "/laptops/gaming" },
      { label: "Ultrabooks", href: "/laptops/ultrabooks" },
      { label: "MacBook M2", href: "/laptops/macbook-m2" },
      { label: "2-in-1 Laptops", href: "/laptops/2-in-1" }
    ]
  },
  {
    headerLink: { label: "Accessories", href: "/accessories" },
    links: [
      { label: "Keyboards", href: "/accessories/keyboards" },
      { label: "Monitors", href: "/accessories/monitors" },
      { label: "Laptop Bags", href: "/accessories/laptop-bags" },
      { label: "External Drives", href: "/accessories/external-drives" }
    ]
  },
  {
    headerLink: { label: "Networking", href: "/networking" },
    links: [
      { label: "Routers", href: "/networking/routers" },
      { label: "Wi-Fi Adapters", href: "/networking/wi-fi-adapters" },
      { label: "Ethernet Cables", href: "/networking/ethernet-cables" },
      { label: "Modems", href: "/networking/modems" }
    ]
  }
]

// Category Menu Links Data structured to fit AccordionMenu component
export const ACCORDION_CATEGORY_LINKS: AccordionItemProps[] = [
  {
    label: "Cameras & Videos",
    href: "/",
    links: [
      {
        label: "Airpods",
        href: "/",
        links: [
          { label: "Headphones", href: "/" },
          { label: "Mini Speaker", href: "/" },
          { label: "Wireless Charging", href: "/" },
          { label: "Airpod Cases", href: "/" }
        ]
      },
      {
        label: "Headphones",
        href: "/",
        links: [
          { label: "Mini Speakers", href: "/" },
          { label: "Mobiles & Tablets", href: "/" },
          { label: "Portable Speakers", href: "/" },
          { label: "Music & Gaming", href: "/" }
        ]
      },
      {
        label: "iPads",
        href: "/",
        links: [
          { label: "Accessories", href: "/" },
          { label: "Cameras", href: "/" },
          { label: "Headphones", href: "/" },
          { label: "Mini Speaker", href: "/" }
        ]
      },
      {
        label: "Laptops",
        href: "/",
        links: [
          { label: "Smart Watches", href: "/" },
          { label: "Smart Television", href: "/" },
          { label: "Smart Phones", href: "/" },
          { label: "Computers", href: "/" }
        ]
      }
    ]
  },
  {
    label: "Computer & Laptop",
    href: "/",
    links: [
      {
        label: "Desktop Computers",
        href: "/",
        links: [
          { label: "All-in-One Computers", href: "/" },
          { label: "Gaming Desktops", href: "/" },
          { label: "Business Desktops", href: "/" },
          { label: "Office Computers", href: "/" }
        ]
      },
      {
        label: "Laptops",
        href: "/",
        links: [
          { label: "Gaming Laptops", href: "/" },
          { label: "Ultrabooks", href: "/" },
          { label: "MacBook M2", href: "/" },
          { label: "2-in-1 Laptops", href: "/" }
        ]
      },
      {
        label: "Accessories",
        href: "/",
        links: [
          { label: "Keyboards", href: "/" },
          { label: "Monitors", href: "/" },
          { label: "Laptop Bags", href: "/" },
          { label: "External Drives", href: "/" }
        ]
      },
      {
        label: "Networking",
        href: "/",
        links: [
          { label: "Routers", href: "/" },
          { label: "Wi-Fi Adapters", href: "/" },
          { label: "Ethernet Cables", href: "/" },
          { label: "Modems", href: "/" }
        ]
      }
    ]
  },
  {
    label: "Home Appliances",
    href: "/"
  },
  {
    label: "Mobiles & tablets",
    href: "/"
  },
  {
    label: "Smart phones",
    href: "/"
  },
  {
    label: "Portable Speakers",
    href: "/"
  },
  {
    label: "Music & Gaming",
    href: "/"
  },
  {
    label: "Phone Cases",
    href: "/"
  },
  {
    label: "Bluetooth Speaker",
    href: "/"
  },
  {
    label: "Contact Us",
    href: "/"
  }
]
