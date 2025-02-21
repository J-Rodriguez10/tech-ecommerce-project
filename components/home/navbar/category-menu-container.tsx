/**
 * CategoryMenuContainer - Handles the display of the category menu,
 * supporting both desktop and mobile views.
 */

import MenuSvg from "@/components/svgs/navbar-svgs/menu-svg"
import CategoryMenu from "./category-menu"

interface CategoryMenuContainerProps {
  handleMobileMenuDisplay: (menu: string) => void // Toggles mobile category menu
  setIsCategoryMenuDisplayed: React.Dispatch<React.SetStateAction<boolean>> // Toggles desktop category menu
  isCategoryMenuDisplayed: boolean // Controls visibility of the desktop category menu
}

function CategoryMenuContainer({
  handleMobileMenuDisplay,
  setIsCategoryMenuDisplayed,
  isCategoryMenuDisplayed
}: CategoryMenuContainerProps) {
  return (
    <aside className="absolute bottom-0 top-0 h-full max-h-[65.5px] w-[21%] min-w-[210px] m:relative m:w-full">
      {/* Button to toggle category menu (mobile & desktop) */}
      <button
        onClick={() => {
          if (window.innerWidth <= 990) {
            handleMobileMenuDisplay("category-menu") // Mobile
          } else {
            setIsCategoryMenuDisplayed(prev => !prev) // Desktop
          }
        }}
        className="flex h-full w-full items-center justify-between gap-[0.7rem] bg-darkOrange px-[1rem] text-[1.1rem] font-[500] uppercase"
      >
        Shop By Category
        <MenuSvg />
      </button>

      {/* Desktop category menu */}
      <div className="m:hidden">
        <CategoryMenu isDisplayed={isCategoryMenuDisplayed} />
      </div>
    </aside>
  )
}

export default CategoryMenuContainer
