import * as Accordion from "@radix-ui/react-accordion"
import AccordionToggleHeader from "./custom-accordion-menu-components/accordion-header"

import CategoriesDropdown from "./custom-accordion-menu-components/dropdowns/categories-dropdown"
import AvailabilityDropdown from "./custom-accordion-menu-components/dropdowns/availability-dropdown"
import PriceDropdown from "./custom-accordion-menu-components/dropdowns/price-dropdown"
import BrandDropdown from "./custom-accordion-menu-components/dropdowns/brand-dropdown"
import ColorDropdown from "./custom-accordion-menu-components/dropdowns/color-dropdown"
import SizeDropdown from "./custom-accordion-menu-components/dropdowns/size-dropdown"
import Image from "next/image"

function ProductFilterSettingsBar({
  className = "",
  displaysAd = true
}: {
  className?: string
  displaysAd?: boolean
}) {
  return (
    <aside className={`flex-[2.5] ${className}`}>
      <Accordion.Root
        className="flex flex-col gap-3"
        type="multiple"
        defaultValue={["item-1", "item-2", "item-3", "item-4"]}
      >
        {/* Item 1 */}
        <Accordion.Item value="item-1">
          {/* Toggles dropdown content*/}
          <AccordionToggleHeader label="Categories" />
          {/* Dropdown content  */}
          <Accordion.Content>
            <CategoriesDropdown />
          </Accordion.Content>
        </Accordion.Item>
        {/* End of Item */}

        {/* Item 2 */}
        <Accordion.Item value="item-2">
          {/* Toggles dropdown content*/}
          <AccordionToggleHeader label="Availability" />
          {/* Dropdown content  */}
          <Accordion.Content>
            <AvailabilityDropdown />
          </Accordion.Content>
        </Accordion.Item>
        {/* End of Item */}

        {/* Item 3 */}
        <Accordion.Item value="item-3">
          {/* Toggles dropdown content*/}
          <AccordionToggleHeader label="Price" />
          {/* Dropdown content  */}
          <Accordion.Content>
            <PriceDropdown />
          </Accordion.Content>
        </Accordion.Item>
        {/* End of Item */}

        {/* Item 4 */}
        <Accordion.Item value="item-4">
          {/* Toggles dropdown content*/}
          <AccordionToggleHeader label="Color" />
          {/* Dropdown content  */}
          <Accordion.Content>
            <ColorDropdown />
          </Accordion.Content>
        </Accordion.Item>
        {/* End of Item */}

        {/* Item 5 */}
        <Accordion.Item value="item-5">
          {/* Toggles dropdown content*/}
          <AccordionToggleHeader label="Size" />
          {/* Dropdown content  */}
          <Accordion.Content>
            <SizeDropdown />
          </Accordion.Content>
        </Accordion.Item>
        {/* End of Item */}

        {/* Item 6 */}
        <Accordion.Item value="item-6">
          {/* Toggles dropdown content*/}
          <AccordionToggleHeader label="Brand" />
          {/* Dropdown content  */}
          <Accordion.Content>
            <BrandDropdown />
          </Accordion.Content>
        </Accordion.Item>
        {/* End of Item */}
      </Accordion.Root>

      {/* Black Friday Ad */}
      {displaysAd && (
        <Image
          src="https://quickstep007.myshopify.com/cdn/shop/files/Untitled-2_b927e485-682c-4fd9-a559-9c5bdb6865c3_grande.png?v=1701880277"
          alt="Black Friday Sell"
          width={270}
          height={330}
          className="mt-[2rem] !w-full object-contain"
        />
      )}
    </aside>
  )
}

export default ProductFilterSettingsBar
