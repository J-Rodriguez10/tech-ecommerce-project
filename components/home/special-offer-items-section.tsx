import SectionHeader from "../section-header"
import CompactProductItemSlider from "../slider/slider-items/compact-product-slider-item"

function SpecialOfferItemsSection() {
  return (
    <section className="my-[5rem]">
      <SectionHeader subHeader="Explore and find the right one">
        Special Offer Items
      </SectionHeader>

      <div className="mx-auto grid max-w-[1200px] grid-cols-3  s:!grid-cols-1 l:grid-cols-2 gap-6">
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
        <CompactProductItemSlider />
      </div>
    </section>
  )
}

export default SpecialOfferItemsSection
