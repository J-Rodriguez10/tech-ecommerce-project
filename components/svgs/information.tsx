type InformationProps = React.SVGProps<SVGSVGElement>

function Information({ className, ...props }: InformationProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-9.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1V7H7a.75.75 0 0 0 0 1.5h.25v2zM8 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Information
