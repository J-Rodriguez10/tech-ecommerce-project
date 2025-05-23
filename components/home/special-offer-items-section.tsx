"use client"

import { useEffect, useState } from "react"

import SectionHeader from "../section-header"
import CompactProductItemSlider from "../slider/slider-items/compact-product-slider-item"
import { Product } from "@/util/interfaces/product"

/**
 * Fetches and displays products tagged as "specialOffer" in a
 * responsive grid layout with a section header.
 */

function SpecialOfferItemsSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/products?tags=specialOffer&limit=10`
        )

        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error("Failed to fetch hot deals:", error)
      }
    }

    fetchDeals()
  }, [])

  return (
    <section className="my-[5rem]">
      <SectionHeader subHeader="Explore and find the right one">
        Special Offer Items
      </SectionHeader>

      <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-6 s:!grid-cols-1 l:grid-cols-2">
        {/* Display Products */}
        {products.length > 0 ? (
          products.map(product => (
            <CompactProductItemSlider key={product._id} product={product} />
          ))
        ) : (
          // Invisible placeholder fallback to maintain slider layout while products load
          <div className="invisible">Loading…</div>
        )}
      </div>
    </section>
  )
}

export default SpecialOfferItemsSection
