type StarProps = React.SVGProps<SVGSVGElement> & {
  filled?: boolean
  halfFilled?: boolean
}

function Star({ filled, halfFilled, ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Spread any additional props
    >
      {/* Filled portion of the star */}
      <path
        d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
        fill={halfFilled || filled ? "currentColor" : "none"} // Dark Orange fill for full or half-filled
      />
      {/* Empty portion of the star (this will be white) */}
      {halfFilled && (
        <path
          d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
          fill="white"
          clipPath="url(#clip)"
        />
      )}
      {/* Define the half fill clipping area */}
      {halfFilled && (
        <defs>
          <clipPath id="clip">
            {/* Move the clip path to the right half (the white part) */}
            <rect x="12" y="0" width="12" height="24" />
          </clipPath>
        </defs>
      )}
    </svg>
  )
}

export default Star
