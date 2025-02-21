import FollowUsSection from "@/components/about-us/follow-us-section"
import OurStorySection from "@/components/about-us/our-story-section"
import OurTeamSection from "@/components/about-us/our-team-section"
import QuoteStrip from "@/components/about-us/quote-strip"
import Footer from "@/components/footer"
import ClientsReviewsSection from "@/components/home/clients-reviews-section"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"

function AboutUsPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader header="About Us" route="About" />
      <div className="stick-cont">
        <OurStorySection />
      </div>
      <ClientsReviewsSection />
      <div className="tight-cont">
        <OurTeamSection />
      </div>
      <QuoteStrip />
      <div className="tight-cont">
        <FollowUsSection />
      </div>
      <Footer />
    </>
  )
}

export default AboutUsPage
