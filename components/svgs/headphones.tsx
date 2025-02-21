type HeadphonesProps = React.SVGProps<SVGSVGElement>

function Headphones({ className = "", width, height, ...props }: HeadphonesProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.5 9h-1v7h1c.275 0 .5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m7 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5h1V9z"
      ></path>
      <path
        fill="currentColor"
        d="M16 8A8 8 0 1 0 .479 10.732A3.5 3.5 0 0 0 3 15.964V9.036a3.5 3.5 0 0 0-1.371.506a6.5 6.5 0 1 1 12.743 0A3.5 3.5 0 0 0 13 9.035v6.929a3.5 3.5 0 0 0 2.521-5.232C15.831 9.879 16 8.959 16 8"
      ></path>
    </svg>
  )
}

export default Headphones
