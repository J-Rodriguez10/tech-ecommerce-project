import SearchSvg from "@/components/svgs/navbar-svgs/search-svg"

function Searchbar() {
  return (
    <div className="relative w-[400px] m:hidden">
      {/* Search input field */}
      <input
        className="h-[50px] w-full rounded-[1.5rem] border border-gray-300 bg-[#f7f8fa] px-[1rem] pr-[3rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Our Store"
        type="text"
      />

      {/* Search button with icon */}
      <button className="orange-hover absolute right-4 top-1/2 flex -translate-y-1/2 transform gap-[.5rem] text-[1.1rem] font-[400] text-darkGray focus:outline-none">
        <SearchSvg />
        Search
      </button>
    </div>
  )
}

export default Searchbar