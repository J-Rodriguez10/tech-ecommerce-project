type FunnelProps = React.SVGProps<SVGSVGElement>

function Funnel({className="", ...props}:FunnelProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 256 256"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M200 136a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"
      ></path>
    </svg>
  )
}

export default Funnel
