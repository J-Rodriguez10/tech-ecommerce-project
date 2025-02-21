import React from "react"


type ButtonProps = {
  onClick?: () => void // Function to be called when the button is clicked
  className?: string // Optional custom class name for additional styling
  children: React.ReactNode // The content (label) inside the button
  variant?: "black" | "lightOrange" | "orange" | "red" // Button variants
}

function Button({
  onClick,
  className = "",
  children,
  variant = "black"
}: ButtonProps) {
  // Define button styles for different variants
  const variantStyles: Record<string, string> = {
    black:
      "bg-darkGray text-white default-transition hover:bg-darkOrange max-w-[180px] font-[500]",
    lightOrange:
      "bg-[#f66608] text-white font-[500] text-center opacity-60 max-w-[340px]",
    orange:
    "bg-darkOrange text-white w-full text-center font-[500]",
    red: "bg-[#d3122a] text-white default-transition max-w-[180px] font-[500]"
  }

  return (
    <button
      onClick={onClick} // Button click handler
      className={`rounded-[1.5rem] px-[2.75rem] py-[.75rem] text-[.9rem] uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
