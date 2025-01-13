type XProps = React.SVGProps<SVGSVGElement>

function X({ className = "", ...props }: XProps) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M17.244.25h3.308l-7.227 8.26 8.502 11.24H15.17l-5.214-6.817L3.99 19.75H.68l7.73-8.835L.254.25H7.08l4.713 6.231L17.243.25zm-1.161 17.52h1.833L6.084 2.126H4.117L16.083 17.77z" />
    </svg>
  )
}

export default X
