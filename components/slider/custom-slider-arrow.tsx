type CustomSliderArrowProps = {
  direction: "left" | "right" // Direction of the arrow
  onClick?: () => void // Click handler
}

function CustomSliderArrow({ direction, onClick }: CustomSliderArrowProps) {
  const isLeft = direction === "left"

  return (
    <button
      className={`${
        isLeft ? "left-0" : "right-0"
      }  custom-slider bigShadow dark-shadow default-transition absolute top-[55%] z-50 flex h-[3.25rem] w-[3.25rem] -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 hover:bg-darkOrange hover:text-white`}
      onClick={onClick}
      aria-label={isLeft ? "Previous Slide" : "Next Slide"}
    >
      {isLeft ? "<" : ">"}
    </button>
  )
}

export default CustomSliderArrow
