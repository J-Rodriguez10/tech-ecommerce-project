import Button from "../../button"

interface HeroSliderItemProps {
  bgUrl: string
  label: string
  header: string
}
// !NOTE TO SELF: For the slider items, you have to define the height in the individual slider item components
function HeroSliderItem({ bgUrl, label, header }: HeroSliderItemProps) {
  return (
    <div
      className="flex min-h-[490px] items-center justify-start rounded-[4px] bg-cover bg-center px-[4rem]"
      style={{
        backgroundImage: `url(${bgUrl})` // Inline style for dynamic background
      }}
    >
      <div className="flex flex-col">
        <span className="text-[1.15rem] font-[500] uppercase text-darkOrange">
          {label}
        </span>
        <p className="text-[4rem] text-darkGray xs:my-[.8rem] xs:text-[2rem]">
          {header}
        </p>
        <Button>Shop Now</Button>
      </div>
    </div>
  )
}

export default HeroSliderItem
