type TiktokProps = React.SVGProps<SVGSVGElement>


function Tiktok({className, ...props}: TiktokProps) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.23 6.59A5.717 5.717 0 0121.52.879.879.879 0 0020.64 0h-4.706a.879.879 0 00-.88.879v19.299a3.361 3.361 0 01-3.357 3.357 3.361 3.361 0 01-3.357-3.357 3.361 3.361 0 013.357-3.358.879.879 0 00.88-.879v-4.707a.879.879 0 00-.88-.879c-5.416 0-9.822 4.407-9.822 9.823S6.281 30 11.697 30c5.416 0 9.823-4.406 9.823-9.822v-8.543a12.09 12.09 0 005.71 1.42.879.879 0 00.88-.88V7.47a.879.879 0 00-.88-.88z"
        fill="currentColor"
      />
    </svg>
  )
}
export default Tiktok;
