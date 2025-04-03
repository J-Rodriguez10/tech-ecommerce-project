import React from "react"

type ButtonProps = {
  onClick?: () => void; // Function to be called when the button is clicked
  className?: string; // Optional custom class name for additional styling
  children: React.ReactNode; // The content (label) inside the button
  variant?: "black" | "lightOrange" | "orange" | "red"; // Button variants
  type?: "button" | "submit" | "reset"; // Type of the button (submit, button, reset)
  disabled?: boolean; // Disabled state for the button
}

function Button({
  onClick,
  className = "",
  children,
  variant = "black",
  type = "button", // Default type is "button"
  disabled = false, // Default is not disabled
}: ButtonProps) {
  // Define button styles for different variants
  const variantStyles: Record<string, string> = {
    black:
      "bg-darkGray text-white default-transition hover:bg-darkOrange max-w-[180px] font-[500]",
    lightOrange:
      "bg-[#f66608] text-white font-[500] text-center opacity-60 max-w-[340px]",
    orange:
      "bg-darkOrange text-white w-full text-center font-[500]",
    red: "bg-[#d3122a] text-white default-transition max-w-[180px] font-[500]",
  }

  // Styles for disabled state (reduces opacity and prevents pointer events)
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick} // Button click handler
      className={`rounded-[1.5rem] px-[2.75rem] py-[.75rem] text-[.9rem] uppercase ${variantStyles[variant]} ${className} ${disabled ? disabledStyles : ""}`}
      type={type} // Set the button type here
      disabled={disabled} // Apply the disabled prop to the button
    >
      {children}
    </button>
  )
}

export default Button
