import Calendar from "@/components/svgs/calendar"
import UserSvg from "@/components/svgs/navbar-svgs/user-svg"
import Image from "next/image"

export interface NewsData {
  previewUrl: string // represents the thumbnail for the news article
  author: string // represents the author of the news article
  title: string // represents the title of the news article
  date: string // represents the date in which the article was published
}

function NewsArticleSliderItem({ previewUrl, author, title, date }: NewsData) {
  return (
    <div className="news-article-slider-heights mx-2 flex-col">
      {/* News image */}
      <div className="relative h-[78%] w-full overflow-hidden rounded-[1.5rem]">
        <Image src={previewUrl} fill alt={title} className="object-fill" />
      </div>

      {/* Article info */}
      <div className="mt-4">
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
        <h6 className="text-4 mt-2 font-[500] text-darkGray">{title}</h6>
      </div>
    </div>
  )
}

export default NewsArticleSliderItem
