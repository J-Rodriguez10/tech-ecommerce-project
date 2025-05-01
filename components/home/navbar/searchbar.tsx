"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import SearchSvg from "@/components/svgs/navbar-svgs/search-svg";

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const router = useRouter(); // Access the Next.js router

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    // If there's no search term, we don't want to search
    if (!searchQuery.trim()) {
      return;
    }

    // Navigate to the /shop page with the search query
    router.push(`/shop?search=${searchQuery}`);
  };

  return (
    <div className="relative w-[400px] m:hidden">
      {/* Search input field */}
      <input
        className="h-[50px] w-full rounded-[1.5rem] border border-gray-300 bg-[#f7f8fa] px-[1rem] pr-[3rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Our Store"
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
      />

      {/* Search button with icon */}
      <button
        className="orange-hover absolute right-4 top-1/2 flex -translate-y-1/2 transform gap-[.5rem] text-[1.1rem] font-[400] text-darkGray focus:outline-none"
        onClick={handleSearch} // Trigger search when button is clicked
      >
        <SearchSvg />
        Search
      </button>
    </div>
  );
}

export default Searchbar;
