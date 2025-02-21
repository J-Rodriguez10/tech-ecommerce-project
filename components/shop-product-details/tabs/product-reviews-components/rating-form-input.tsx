"use client"

import Star from "@/components/svgs/navbar-svgs/star"
import { useState } from "react"

interface RatingFormInput {
  className?: string
  starSize?: string // Controls the size of the stars displayed - Enter a measuring unit like 1rem
}

function RatingFormInput({ className="", starSize="1.5rem" }: RatingFormInput) {
  const [currRating, setCurrRating] = useState<number>(0)

  function handleStarClick(star: number) {
    console.log("Clicked star number: ", star)
    setCurrRating(star)
  }
  return (
    <ul className={`flex items-center justify-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const starFilled = currRating >= star
        
        return (
          <li key={star} onClick={() => handleStarClick(star)} className="cursor-pointer">
            <Star
              className="text-darkGray"
              style={{ height: starSize, width: starSize }}
              filled={starFilled}
          
            />
          </li>
        )
      })}
    </ul>
  )
}

export default RatingFormInput
