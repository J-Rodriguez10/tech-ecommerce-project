import { AccordionItemProps } from "@/components/accordion-menu"
import { Links } from "@/components/home/navbar/dropdown"

// Following the structure to make the <Dropdown/> component work.
export const CAMERAS_AND_VIDEOS_LINKS: Links[] = [
  {
    headerLink: { label: "DSLR & Mirrorless", href: "/cameras-videos/dslr" },
    links: [
      { label: "Canon", href: "/cameras-videos/dslr/canon" },
      { label: "Nikon", href: "/cameras-videos/dslr/nikon" },
      { label: "Sony", href: "/cameras-videos/dslr/sony" },
      { label: "Lenses", href: "/cameras-videos/dslr/lenses" }
    ]
  },
  {
    headerLink: { label: "Action Cameras", href: "/cameras-videos/action" },
    links: [
      { label: "GoPro", href: "/cameras-videos/action/gopro" },
      { label: "DJI", href: "/cameras-videos/action/dji" },
      { label: "Waterproof", href: "/cameras-videos/action/waterproof" },
      { label: "Accessories", href: "/cameras-videos/action/accessories" }
    ]
  },
  {
    headerLink: { label: "Camcorders", href: "/cameras-videos/camcorders" },
    links: [
      {
        label: "Professional",
        href: "/cameras-videos/camcorders/professional"
      },
      { label: "Handheld", href: "/cameras-videos/camcorders/handheld" },
      { label: "4K Video", href: "/cameras-videos/camcorders/4k" },
      { label: "Microphones", href: "/cameras-videos/camcorders/microphones" }
    ]
  },
  {
    headerLink: { label: "Drones", href: "/cameras-videos/drones" },
    links: [
      { label: "DJI", href: "/cameras-videos/drones/dji" },
      { label: "FPV Racing", href: "/cameras-videos/drones/fpv" },
      { label: "Gimbals", href: "/cameras-videos/drones/gimbals" },
      { label: "Accessories", href: "/cameras-videos/drones/accessories" }
    ]
  }
]

// Following the structure to make the <Dropdown/> component work.
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
      { label: "MacBook", href: "/laptops/macbook" },
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

// Category Menu Links Data structured to fit AccordionMenu component for the mobile version
export const ACCORDION_CATEGORY_LINKS: AccordionItemProps[] = [
  {
    label: "Cameras & Videos",
    href: "/cameras-videos",
    links: [
      {
        label: "DSLR & Mirrorless",
        href: "/cameras-videos/dslr",
        links: [
          { label: "Canon", href: "/cameras-videos/dslr/canon" },
          { label: "Nikon", href: "/cameras-videos/dslr/nikon" },
          { label: "Sony", href: "/cameras-videos/dslr/sony" },
          { label: "Lenses", href: "/cameras-videos/dslr/lenses" }
        ]
      },
      {
        label: "Action Cameras",
        href: "/cameras-videos/action",
        links: [
          { label: "GoPro", href: "/cameras-videos/action/gopro" },
          { label: "DJI", href: "/cameras-videos/action/dji" },
          { label: "Waterproof", href: "/cameras-videos/action/waterproof" },
          { label: "Accessories", href: "/cameras-videos/action/accessories" }
        ]
      },
      {
        label: "Camcorders",
        href: "/cameras-videos/camcorders",
        links: [
          {
            label: "Professional",
            href: "/cameras-videos/camcorders/professional"
          },
          { label: "Handheld", href: "/cameras-videos/camcorders/handheld" },
          { label: "4K Video", href: "/cameras-videos/camcorders/4k" },
          {
            label: "Microphones",
            href: "/cameras-videos/camcorders/microphones"
          }
        ]
      },
      {
        label: "Drones",
        href: "/cameras-videos/drones",
        links: [
          { label: "DJI", href: "/cameras-videos/drones/dji" },
          { label: "FPV Racing", href: "/cameras-videos/drones/fpv" },
          { label: "Gimbals", href: "/cameras-videos/drones/gimbals" },
          { label: "Accessories", href: "/cameras-videos/drones/accessories" }
        ]
      }
    ]
  },
  {
    label: "Computers & Laptops",
    href: "/computers-laptops",
    links: [
      {
        label: "Desktop Computers",
        href: "/desktop-computers",
        links: [
          {
            label: "All-in-One Computers",
            href: "/desktop-computers/all-in-one"
          },
          { label: "Gaming Desktops", href: "/desktop-computers/gaming" },
          { label: "Business Desktops", href: "/desktop-computers/business" },
          { label: "Office Computers", href: "/desktop-computers/office" }
        ]
      },
      {
        label: "Laptops",
        href: "/laptops",
        links: [
          { label: "Gaming Laptops", href: "/laptops/gaming" },
          { label: "Ultrabooks", href: "/laptops/ultrabooks" },
          { label: "MacBook", href: "/laptops/macbook" },
          { label: "2-in-1 Laptops", href: "/laptops/2-in-1" }
        ]
      },
      {
        label: "Accessories",
        href: "/accessories",
        links: [
          { label: "Keyboards", href: "/accessories/keyboards" },
          { label: "Monitors", href: "/accessories/monitors" },
          { label: "Laptop Bags", href: "/accessories/laptop-bags" },
          { label: "External Drives", href: "/accessories/external-drives" }
        ]
      },
      {
        label: "Networking",
        href: "/networking",
        links: [
          { label: "Routers", href: "/networking/routers" },
          { label: "Wi-Fi Adapters", href: "/networking/wi-fi-adapters" },
          { label: "Ethernet Cables", href: "/networking/ethernet-cables" },
          { label: "Modems", href: "/networking/modems" }
        ]
      }
    ]
  },
  {
    label: "Home Appliances",
    href: "/home-appliances"
  },
  {
    label: "Mobiles & Tablets",
    href: "/mobiles-tablets"
  },
  {
    label: "Smartphones",
    href: "/smartphones"
  },
  {
    label: "Portable Speakers",
    href: "/portable-speakers"
  },
  {
    label: "Music & Gaming",
    href: "/music-gaming"
  },
  {
    label: "Phone Cases",
    href: "/phone-cases"
  },
  {
    label: "Bluetooth Speakers",
    href: "/bluetooth-speakers"
  },
  {
    label: "Contact Us",
    href: "/contact"
  }
]
