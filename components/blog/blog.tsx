import Image from "next/image"

import Calendar from "../svgs/calendar"
import UserSvg from "../svgs/navbar-svgs/user-svg"
import Button from "../button"
import { NewsData } from "../slider/slider-items/news-article-slider-item"

function Blog({ author, date, title, previewUrl }: NewsData) {
  return (
    <div className="h-auto cursor-pointer flex-col">
      {/* News image */}
      <div className="relative h-[250px] w-full overflow-hidden rounded-[1.5rem] xs:!max-h-[50vw] xs:!min-h-[50vw] m:min-h-[300px] l:h-[200px]">
        <Image src={previewUrl} fill alt={title} className="object-cover" />
      </div>

      {/* Article info */}
      <div className="mt-[1.25rem] flex flex-col gap-4">
        {/* Icons */}
        <div className="flex gap-[1.5rem] text-[0.9rem] text-lightTextGray">
          <p className="flex items-center gap-2">
            {" "}
            <UserSvg size={15} /> {author}
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <Calendar size={15} /> {date}
          </p>
        </div>

        {/* Title */}
        <h6 className="mt-2 text-[1.1rem] font-[500] text-darkGray">{title}</h6>

        {/* Preview */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quaerat
          quisquam harum est, odit
        </p>

        {/* Button */}
        <Button variant="black">Read More</Button>
      </div>
    </div>
  )
}

export default Blog
