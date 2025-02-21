interface PageHeaderProps {
  header?: string // Optional header for the page (typically the title)
  route: string // Navigation path displayed as "Home / {route}"
}

/* 
  Displays a page header with a title and breadcrumb-style route navigation.
  The height of the header section adjusts based on the presence of a title.
*/

function PageHeader({ header = "", route }: PageHeaderProps) {
  return (
    // Header container with dynamic height and background color
    <div
      className={`${header ? "h-[160px]" : "h-auto py-[1.5rem]"} w-screen bg-bgGray text-darkGray`}
    >
      <div className="stick-cont flex h-full flex-col justify-center gap-[4px]">
        {/* Main header text */}
        <h2 className="text-[2.9rem] font-[500] capitalize">{header}</h2>

        {/* Route navigation text */}
        <p>
          Home /<span className="capitalize text-lightTextGray"> {route}</span>
        </p>
      </div>
    </div>
  )
}

export default PageHeader
