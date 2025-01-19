import XSvg from "../svgs/x"
import ProductFilterSettingsBar from "./product-filter-settings-bar"

function ProductFilterSettingsBarMobile({
  className = "",
  handleMenuClose
}: {
  className?: string
  handleMenuClose: () => void
}) {
  return (
    // Backdrop
    <div
      onClick={handleMenuClose}
      className={`fixed left-0 top-0 z-[100] h-screen w-screen bg-[#0d0d0d6f] ${className}`}
    >
      {/* Mobile menu's content */}
      <aside className="relative h-screen w-[330px] overflow-y-scroll bg-white px-5 py-[3.25rem]">
        {/* Close mobile menu button */}
        <button
          onClick={handleMenuClose}
          className="absolute right-3 top-1 p-[0.3rem] text-lightTextGray"
        >
          <XSvg className="h-[2.5rem] w-[2.5rem]" />
        </button>
        <ProductFilterSettingsBar displaysAd={false} />
      </aside>
    </div>
  )
}

export default ProductFilterSettingsBarMobile
