"use client"

import Slider, { Settings } from "react-slick"

import ProductItemSlider from "./slider-items/product-slider-item"
import { PRELOADED_PRODUCTS } from "@/util/data/dummy-data/preloaded-products"

interface RecommendationsSliderProps {
  className?: string
  slideHeight?: string // The height for the individual slider items
  settings: Settings // Settings for slick slider component
}

/**
 * Renders a product slider using preloaded product data with customizable
 * height and slider settings.
 */

function RecommendationsSlider({
  className = "",
  slideHeight = "",
  settings
}: RecommendationsSliderProps) {
  return (
    <Slider className={className} {...settings}>
      {PRELOADED_PRODUCTS.map(product => (
        <ProductItemSlider
          slideHeight={slideHeight}
          key={product._id}
          product={product}
        />
      ))}
    </Slider>
  )
}

export default RecommendationsSlider
