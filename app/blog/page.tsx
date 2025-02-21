import BlogPostsSection from "@/components/blog/blog-posts-section"
import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"

function BlogPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader header="Blog" route="blog" />
      <div className="tight-cont">
        <BlogPostsSection />
      </div>
      <Footer />
    </>
  )
}

export default BlogPage
