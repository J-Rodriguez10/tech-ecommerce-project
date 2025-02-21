import { RETURN_POLICY_FAQ } from "@/util/data/dummy-data/faq-data"
import FaqAccordionMenu from "./faq-accordion-menu"

function OurReturnPolicySection() {
  return (
    <section className="my-[5rem]">
      <FaqAccordionMenu
        menuHeader="Our Return Policy"
        faqData={RETURN_POLICY_FAQ}
      />
    </section>
  )
}

export default OurReturnPolicySection
