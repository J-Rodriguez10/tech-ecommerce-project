type UserSvgProps = React.SVGProps<SVGSVGElement> & {
  size?: number // Allow a custom `size` prop
}

function UserSvg({ size = 24, className = "", ...props }: UserSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Use the `size` prop for width
      height={size} // Use the `size` prop for height
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className} // Add the `className` if provided
      {...props} // Spread any additional props
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx={12} cy={7} r={4} />
    </svg>
  )
}

export default UserSvg
