import FaqAccordionMenu from "./faq-accordion-menu"
import { RETURN_POLICY_FAQ } from "@/util/data/dummy-data/faq-data"

/***
 * Displays a FAQ accordion menu specifically for the return policy using
 * predefined data.
 */

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
