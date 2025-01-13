type SearchSvgProps = React.SVGProps<SVGSVGElement>

function SearchSvg(props: SearchSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21L16.65 16.65" />
    </svg>
  )
}

export default SearchSvg
