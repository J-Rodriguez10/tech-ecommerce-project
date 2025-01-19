interface PaginationProps {
  className ?: string
}

function Pagination({ className = "" }: PaginationProps) {
  const buttonStyles =
    "min-w-[55px] min-h-[40px] text-white bg-darkGray font-[500] hover:bg-darkOrange rounded-[0.25rem]"
  return (
    <div
      className={`flex h-auto w-full justify-center ${className}`}
    >
      <div className="m-auto flex gap-5">
        <button className={buttonStyles}>Prev</button>
        <button className={buttonStyles}>1</button>
        <button className={buttonStyles}>2</button>
        <button className={buttonStyles}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
