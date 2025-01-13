type FacebookProps = React.SVGProps<SVGSVGElement>

function Facebook({className="", ...props}: FacebookProps) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M41.667 10.126H48V.427A97.063 97.063 0 0038.77 0c-9.163 0-15.428 5.063-15.428 14.335v7.991H13v10.858h10.342V61h12.396V33.184h10.308l1.55-10.858H35.738v-6.923c0-3.203.943-5.277 5.929-5.277z"
        fill="currentColor"
      />
    </svg>
  )
}
export default Facebook;
