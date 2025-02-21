import Funnel from "../svgs/shop/funnel"
import { Layout1, Layout2, Layout3, Layout4 } from "../svgs/shop/layout-svgs"

interface LayoutSettingsBarProps {
  handleMobileMenuDisplay: () => void // Function responsible for displaying/removing the filters mobile menu. Should be added to the Funnel button.
}

function LayoutSettingsBar({ handleMobileMenuDisplay }: LayoutSettingsBarProps) {
  return (
    <aside className="flex h-auto items-center justify-between py-3 text-darkGray">
      {/* Grid layout settings - icons to toggle between different layouts */}
      <ul className="flex items-center gap-4 text-gray-400">
        <li className="text-darkGray">
          <Layout4 />
        </li>
        <li>
          <Layout3 />
        </li>
        <li>
          <Layout2 />
        </li>
        <li>
          <Layout1 />
        </li>
      </ul>

      {/* Product results display settings */}
      <div className="flex items-center gap-6 l:gap-5">
        {/* Displaying number of results */}
        <p className="m:hidden">Showing 1 - 12 of 15 results</p>

        {/* Input for number of results per page */}
        <p className="s:hidden">
          Show
          <input
            type="number"
            placeholder="12"
            aria-label="Results per page"
            min="1"
            max="100"
            className="mx-2 rounded-[5px] border-[1px] border-gray-400 px-2 py-2 font-[500] placeholder-darkGray"
          />
          <span className="m:hidden">per page</span>
        </p>

        {/* Dropdown for sorting products */}
        <p className="xs:hidden">
          Sort By:
          <select
            aria-label="Sort by"
            className="mx-2 rounded-[5px] border-[1px] border-gray-400 px-2 py-2 font-[500]"
          >
            <option value="featured">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="alpha-asc">Alphabetically, A-Z</option>
            <option value="alpha-desc">Alphabetically, Z-A</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="date-new">Date, new to old</option>
            <option value="date-old">Date, old to new</option>
          </select>
        </p>

        {/* Filters button to toggle <ProductFilterSettingsBarMobile/> */}
        <button
          onClick={handleMobileMenuDisplay}
          className="hidden items-center gap-1 text-[.9rem] text-lightTextGray m:flex"
        >
          <Funnel />
          Filters
        </button>
      </div>
    </aside>
  )
}

export default LayoutSettingsBar
