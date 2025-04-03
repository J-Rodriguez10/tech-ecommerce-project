interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onNextPage: () => void
  onPrevPage: () => void
  className?: string
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage,
  className = "",
}: PaginationProps) {
  const buttonStyles =
    "min-w-[55px] min-h-[40px] text-white bg-darkGray font-[500] hover:bg-darkOrange rounded-[0.25rem]"

  const renderPageButtons = () => {
    const buttons = []

    // Add Previous Button
    buttons.push(
      <button
        key="prev"
        onClick={onPrevPage}
        className={buttonStyles}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    )

    // Add Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`${buttonStyles} ${currentPage === i ? "bg-darkOrange" : ""}`}
        >
          {i}
        </button>
      )
    }

    // Add Next Button
    buttons.push(
      <button
        key="next"
        onClick={onNextPage}
        className={buttonStyles}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    )

    return buttons
  }

  return (
    <div className={`flex h-auto w-full justify-center ${className}`}>
      <div className="m-auto flex gap-5">{renderPageButtons()}</div>
    </div>
  )
}

export default Pagination
