"use client"

import { useState } from "react"

import LayoutSettingsBar from "./layout-settings-bar"
import ProductFilterSettingsBar from "./product-filter-settings-bar"
import ProductResults from "./product-results"
import ProductFilterSettingsBarMobile from "./product-filter-settings-bar-mobile"

/* 
  Displays product results with filter and layout settings. 
  Includes a mobile filter menu that toggles on smaller screens.
*/

function ProductsResultsDisplayer() {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false)

  function toggleMobileMenuDisplay() {
    setIsMobileMenuDisplayed(prev => !prev)
  }

  return (
    <section className="pt-4">
      {/* Layout settings  */}
      <LayoutSettingsBar handleMobileMenuDisplay={toggleMobileMenuDisplay} />

      {/* Filter settings + Product results list */}
      <div className="mt-[3.5rem] flex h-auto gap-6">
        <ProductFilterSettingsBar className="m:hidden" />
        <ProductResults />
      </div>

      {/* Mobile menu - (displayed when screen size is smaller than 990px) */}
      {/* Triggered by a button in the <ProductFilterSettingsBar/> component */}
      {isMobileMenuDisplayed && (
        <div className="hidden m:block">
          <ProductFilterSettingsBarMobile handleMenuClose={toggleMobileMenuDisplay} />
        </div>
      )}
    </section>
  )
}

export default ProductsResultsDisplayer
