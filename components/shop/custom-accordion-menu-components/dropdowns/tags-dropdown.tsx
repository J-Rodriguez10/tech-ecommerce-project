"use client"

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setFilters } from "@/redux/slices/filtersSlice";


function TagsDropdown() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTags = useSelector((state: RootState) => state.filters.tags);
  
  console.log("Current selected tags:", selectedTags); // Log state changes

  const tagsOption = ["Hot Deal", "Featured", "Special Offer"];

  function toggleTag(tag: string) {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag) // Remove tag if already selected
      : [...selectedTags, tag]; // Add tag if not selected

    dispatch(setFilters({ tags: newTags }));
  };

  
  return (
    <div className="flex flex-col">
      {tagsOption.map((tag) => (
        <button
          className={`my-[0.5rem] text-left ${selectedTags.includes(tag) ? " text-darkOrange" : "text-darkGray"}`}
          key={tag}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

export default TagsDropdown
