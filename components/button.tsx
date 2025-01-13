import React from "react"

// Define the possible variants for the button
type ButtonProps = {
  onClick?: () => void // Function to be called when the button is clicked
  className?: string // Optional custom class name for additional styling
  children: React.ReactNode // The content (label) inside the button
  variant?: "black" | "secondary" | "outline" | "danger" | "success" // Button variants
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
      "bg-darkGray text-white default-transition hover:bg-darkOrange max-w-[180px] font-[500]"
  }

  return (
    <button
      onClick={onClick} // Button click handler
      className={`rounded-[1.5rem] px-[2.75rem] py-[.7rem] text-[.9rem] uppercase ${variantStyles[variant]} ${className}`}
    >
      {children} {/* Display children (content passed into the button) */}
    </button>
  )
}

export default Button
