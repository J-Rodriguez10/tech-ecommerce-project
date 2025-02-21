import Star from "@/components/svgs/navbar-svgs/star"


interface RatingProps {
  rating: number // Represents the rating that is displayed
  className ?:string
  starSize?: string // Controls the size of the stars displayed - Enter a measuring unit like 1rem 
}

function Rating({
  rating,
  className = "",
  starSize = "1rem"
}: RatingProps) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <ul className={`flex items-center justify-center gap-1 ${className}`}>
      {stars.map((star, index) => {
        const fullStar = rating >= star
        const halfStar = rating >= star - 0.5 && rating < star
        return (
          <li key={index}>
            <Star
              className="text-darkOrange"
              style={{ height: starSize, width: starSize }}
              filled={fullStar}
              halfFilled={halfStar}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Rating
