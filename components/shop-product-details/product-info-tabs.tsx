"use client"

import { useState } from "react"

import Description from "./tabs/product-description"
import ShippingAndReturnDetails from "./tabs/shipping-&-return-details"
import ProductReviews from "./tabs/product-reviews"

/*  
  Displays product-related information using a tabbed interface.  
  Users can switch between the "Description," "Reviews," and "Shipping & Returns" tabs.  
  The selected tab determines which component is rendered dynamically.  
*/


function ProductTabsInfo() {
  const [selectedTab, setSelectedTab] = useState<
    "description" | "reviews" | "shipping"
  >("description")

  const keyToComponent = {
    description: <Description />,
    reviews: <ProductReviews />,
    shipping: <ShippingAndReturnDetails />
  }

  return (
    <section className="mt-[7rem] flex h-auto w-full flex-col items-center justify-center gap-[3rem] text-darkGray">
      {/* Tabs for selecting different sections */}
      <div className="flex flex-wrap justify-center gap-[2rem]">
        <button
          onClick={() => setSelectedTab("description")}
          className={`block text-[1.8rem] font-[400] leading-none m:text-[1.25rem] ${
            selectedTab === "description" ? "text-DarkGray" : "text-[#ababab]"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setSelectedTab("reviews")}
          className={`block text-[1.8rem] font-[400] leading-none m:text-[1.25rem] ${
            selectedTab === "reviews" ? "text-DarkGray" : "text-[#ababab]"
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setSelectedTab("shipping")}
          className={`block text-[1.8rem] font-[400] leading-none m:text-[1.25rem] ${
            selectedTab === "shipping" ? "text-DarkGray" : "text-[#ababab]"
          }`}
        >
          Shipping & Returns
        </button>
      </div>
      
      {/* Displays the corresponding component based on the selected tab */}
      <main className="h-auto w-full">{keyToComponent[selectedTab]}</main>
    </section>
  )
}

export default ProductTabsInfo
