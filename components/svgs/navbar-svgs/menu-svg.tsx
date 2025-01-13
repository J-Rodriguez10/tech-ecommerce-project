type MenuSvgProps = React.SVGProps<SVGSVGElement>

function MenuSvg(props: MenuSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 12a.75.75 0 00-.75-.75H5a.75.75 0 000 1.5h14a.75.75 0 00.75-.75m0-5a.75.75 0 00-.75-.75H5a.75.75 0 000 1.5h14a.75.75 0 00.75-.75m0 10a.75.75 0 00-.75-.75H5a.75.75 0 000 1.5h14a.75.75 0 00.75-.75"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default MenuSvg
