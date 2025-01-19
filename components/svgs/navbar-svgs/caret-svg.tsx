type CaretProps = React.SVGProps<SVGSVGElement> & {
  direction?: "down" | "right" | "left" | "up" | "none"
}

function Caret({ direction = "down", className = "", ...props }: CaretProps) {
  // Define rotation classes for different directions
  const rotationClasses: Record<string, string> = {
    down: "rotate-180 translate-y-[1px]",
    right: "rotate-90",
    up: "rotate-0",
    left: "rotate-270",
    none : ""
  }

  // Get the rotation class based on the direction
  const rotationClass = rotationClasses[direction] || ""

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      className={`inline-block transition-transform ${rotationClass} ${className}`}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 14l4-4l4 4"
      ></path>
    </svg>
  )
}

export default Caret
