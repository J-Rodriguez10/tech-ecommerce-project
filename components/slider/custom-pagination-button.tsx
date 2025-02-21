/**
 * CustomPaginationButton Component
 *
 * This component represents a single pagination dot for the slider.
 * It changes color based on the active state and triggers a slide change when clicked.
 */

type CustomPaginationButtonProps = {
  onClick?: () => void // Click handler function provided by react-slick to navigate slides
  isActive?: boolean // Determines whether the button represents the current active slide
}

function CustomPaginationButton({ onClick, isActive }: CustomPaginationButtonProps) {
  return (
    <div
      className={`h-[0.8rem] w-[0.8rem] rounded-[50%] ${isActive ? "bg-darkOrange" : "bg-white"}`}
      onClick={onClick} // Handles slide change when clicked
    />
  )
}

export default CustomPaginationButton