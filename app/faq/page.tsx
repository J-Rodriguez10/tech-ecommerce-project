import CustomerSupportStrip from "@/components/faq/customer-support-strip"
import OurReturnPolicySection from "@/components/faq/our-return-policy-section"
import ShippingInformationSection from "@/components/faq/shipping-information-section"
import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"

function FaqPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader header="FAQ" route="faq" />
      <div className="stick-cont">
        <ShippingInformationSection />
      </div>
      <CustomerSupportStrip />
      <div className="stick-cont">
        <OurReturnPolicySection />
      </div>
      <Footer />
    </>
  )
}

export default FaqPage
