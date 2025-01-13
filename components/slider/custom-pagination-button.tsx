import React from "react"

type CustomPaginationButtonProps = {
  onClick?: () => void // Pass the click handler from react-slick
  isActive?: boolean // Optionally pass the active state
}

function CustomPaginationButton({
  onClick,
  isActive
}: CustomPaginationButtonProps) {
  return (
    <div
      className={`h-[0.8rem] w-[0.8rem] rounded-[50%] ${isActive ? "bg-darkOrange" : "bg-white"}`}
      onClick={onClick} // Forward the onClick handler
    />
  )
}

export default CustomPaginationButton
