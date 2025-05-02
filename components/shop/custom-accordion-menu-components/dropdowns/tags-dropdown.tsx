"use client"

import { useSelector, useDispatch } from "react-redux"

import { setFilters } from "@/redux/slices/filtersSlice"
import { RootState, AppDispatch } from "@/redux/store"

function TagsDropdown() {
  const dispatch = useDispatch<AppDispatch>()
  const selectedTags = useSelector((state: RootState) => state.filters.tags)

  console.log("Current selected tags:", selectedTags) // Log state changes

  const tagsOption = [
    { label: "Hot Deal", value: "hotDeal" },
    { label: "Featured", value: "featured" },
    { label: "Special Offer", value: "specialOffer" }
  ]

  function toggleTag(tagValue: string) {
    const newTags = selectedTags.includes(tagValue)
      ? selectedTags.filter(t => t !== tagValue)
      : [...selectedTags, tagValue]

    dispatch(setFilters({ tags: newTags }))
  }

  return (
    <div className="flex flex-col">
      {tagsOption.map(({ label, value }) => (
        <button
          className={`my-[0.5rem] text-left ${
            selectedTags.includes(value) ? "text-darkOrange" : "text-darkGray"
          }`}
          key={value}
          onClick={() => toggleTag(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default TagsDropdown
