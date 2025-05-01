import Blog from "./blog"

import { DUMMY_NEWS_DATA } from "@/util/data/dummy-data/news"

/**
 * Displays a grid of blog posts using dummy data with pagination controls
 */

function BlogPostsSection() {
  return (
    <section className="my-[5.5rem]">
      <main className="grid grid-cols-2 gap-[2rem] m:grid-cols-1 m:gap-[3rem]">
        {DUMMY_NEWS_DATA.map((data, i) => (
          <Blog {...data} key={i} />
        ))}
      </main>
      {/* No pagination needed since its dummy data */}
    </section>
  )
}

export default BlogPostsSection
