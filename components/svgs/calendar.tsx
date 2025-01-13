type CalendarProps = React.SVGProps<SVGSVGElement> & {
  size?: number
}

function Calendar({ size = 24, className = "", ...props }: CalendarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
      <path d="M16 2L16 6" />
      <path d="M8 2L8 6" />
      <path d="M3 10L21 10" />
    </svg>
  )
}

export default Calendar
