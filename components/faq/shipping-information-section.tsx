import FaqAccordionMenu from "./faq-accordion-menu"
import { SHIPPING_FAQ } from "@/util/data/dummy-data/faq-data"

function ShippingInformationSection() {
  return (
    <section className="my-[5rem]">
      <FaqAccordionMenu
        menuHeader="Shipping Information"
        faqData={SHIPPING_FAQ}
      />
    </section>
  )
}

export default ShippingInformationSection
