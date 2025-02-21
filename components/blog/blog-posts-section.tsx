import Blog from "./blog"
import Pagination from "../pagination"
import { DUMMY_NEWS_DATA } from "@/util/data/dummy-data/news"

function BlogPostsSection() {
  return (
    <section className="my-[5.5rem]">
      <main className="grid grid-cols-2 gap-[2rem] m:grid-cols-1 m:gap-[3rem]">
        {DUMMY_NEWS_DATA.map((data, i) => (
          <Blog {...data} key={i} />
        ))}
      </main>
      <Pagination className="mt-[6rem]" />
    </section>
  )
}

export default BlogPostsSection
