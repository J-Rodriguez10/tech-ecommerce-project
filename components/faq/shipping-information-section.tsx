import { SHIPPING_FAQ } from "@/util/data/dummy-data/faq-data"
import FaqAccordionMenu from "./faq-accordion-menu"

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
