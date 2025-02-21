import Link from "next/link"
import Button from "../../button"

interface HeroSliderItemProps {
  bgUrl: string // URL for the background image of the slider item
  label: string // Promotional label (e.g., discount or offer text)
  header: string // Main heading text for the slider item
}

/**
 * HeroSliderItem Component
 *
 * This component represents a single slide in the Hero Section's slider.
 * Each slide includes a background image, promotional label, headline, and a "Shop Now" button.
 * 
 * ! NOTE: The height must be explicitly defined in each slider item component.
 */
function HeroSliderItem({ bgUrl, label, header }: HeroSliderItemProps) {
  return (
    <div
      className="flex min-h-[490px] items-center justify-start rounded-[4px] bg-cover bg-center px-[4rem]"
      style={{
        backgroundImage: `url(${bgUrl})` // Dynamically set background image
      }}
    >
      <div className="flex flex-col">
        {/* Promotional label */}
        <span className="text-[1.15rem] font-[500] uppercase text-darkOrange">
          {label}
        </span>

        {/* Main heading text */}
        <p className="text-[4rem] text-darkGray xs:my-[.8rem] xs:text-[2rem]">
          {header}
        </p>

        {/* Call-to-action button linking to the shop page */}
        <Link href="/shop">
          <Button>Shop Now</Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSliderItem
