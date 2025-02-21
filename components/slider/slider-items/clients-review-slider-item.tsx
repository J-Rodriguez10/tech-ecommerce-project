import Image from "next/image"

import Rating from "@/components/rating"

export interface ClientsReviewSliderItemProps {
  userName: string // The name of the reviewer
  profession: string // The profession or title of the reviewer
  profPic: string // URL of the reviewer's profile picture
  review: string // The review content provided by the client
  rating: number // The rating given by the client (e.g., 1-5 stars)
}

/*  
  Represents an individual client review in a slider format.  
  Displays the client's review text, rating, profile picture, name, and profession.  
*/

function ClientsReviewSliderItem({
  userName,
  profession,
  profPic,
  review,
  rating
}: ClientsReviewSliderItemProps) {
  return (
    <div className="flex min-h-[325px] flex-col justify-between bg-white p-[2.5rem] text-darkGray">
      {/* Top half */}
      <div className="flex flex-col items-start gap-4">
        <p className="leading-[2rem]">{review}</p>
        <Rating rating={rating} starSize=".8rem" />
      </div>

      {/* Bottom half */}
      <div className="flex items-center m:flex-col m:items-start">
        {/* Profile picture */}
        <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-[50%] m:my-5">
          <Image src={profPic} alt={userName} fill className="object-cover" />
        </div>
        {/* Profile username and profession */}
        <p className="">{userName}</p>
        <p className="m:text-[.8rem] m:font-[500]">
          <span className="mx-1">-</span> {profession}
        </p>
      </div>
    </div>
  )
}

export default ClientsReviewSliderItem
