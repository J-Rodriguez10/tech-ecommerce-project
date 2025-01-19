type Layout1Props = React.SVGProps<SVGSVGElement>

export function Layout1({ className = "", ...props }: Layout1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <rect width={7} height={7} x={3} y={3} rx={1}></rect>
        <rect width={7} height={7} x={3} y={14} rx={1}></rect>
        <path d="M14 4h7m-7 5h7m-7 6h7m-7 5h7"></path>
      </g>
    </svg>
  )
}

type Layout2Props = React.SVGProps<SVGSVGElement>

export function Layout2({ className = "", ...props }: Layout2Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.068 3.228a18.8 18.8 0 0 0-4.136 0a1.916 1.916 0 0 0-1.69 1.673a18 18 0 0 0 0 4.198a1.916 1.916 0 0 0 1.69 1.673c1.363.152 2.773.152 4.136 0a1.916 1.916 0 0 0 1.69-1.673a18 18 0 0 0 0-4.198a1.916 1.916 0 0 0-1.69-1.673m0 10a18.8 18.8 0 0 0-4.136 0a1.916 1.916 0 0 0-1.69 1.673a18 18 0 0 0 0 4.198a1.916 1.916 0 0 0 1.69 1.673c1.363.152 2.773.152 4.136 0a1.916 1.916 0 0 0 1.69-1.673a18 18 0 0 0 0-4.198a1.916 1.916 0 0 0-1.69-1.673m10-10a18.8 18.8 0 0 0-4.136 0a1.916 1.916 0 0 0-1.69 1.673a18 18 0 0 0 0 4.198a1.916 1.916 0 0 0 1.69 1.673c1.364.152 2.772.152 4.136 0a1.916 1.916 0 0 0 1.69-1.673a18 18 0 0 0 0-4.198a1.916 1.916 0 0 0-1.69-1.673m0 10a18.8 18.8 0 0 0-4.136 0a1.916 1.916 0 0 0-1.69 1.673a18 18 0 0 0 0 4.198a1.916 1.916 0 0 0 1.69 1.673c1.364.152 2.772.152 4.136 0a1.916 1.916 0 0 0 1.69-1.673a18 18 0 0 0 0-4.198a1.916 1.916 0 0 0-1.69-1.673"
      ></path>
    </svg>
  )
}

type Layout3Props = React.SVGProps<SVGSVGElement>

export function Layout3({ className = "", ...props }: Layout3Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 3a1 1 0 0 0-1 1v4h5.5V3zm6.5 0v5h5V3zm7 0v5H22V4a1 1 0 0 0-1-1zm5.5 7h-5.5v4H22zm0 6h-5.5v5H21a1 1 0 0 0 1-1zm-7.5 5v-5h-5v5zm-7 0v-5H2v4a1 1 0 0 0 1 1zM2 14h5.5v-4H2zm7.5-4h5v4h-5z"
      ></path>
    </svg>
  )
}

type Layout4Props = React.SVGProps<SVGSVGElement>

export function Layout4({ className = "", ...props }: Layout4Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM13 3h-2.5v14H13zM7 3h2.5v14H7zM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"
      ></path>
    </svg>
  )
}
