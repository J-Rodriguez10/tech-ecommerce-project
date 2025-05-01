/**
 * Today's Deals Section Component
 *
 * This section showcases time-sensitive deals using a countdown timer and a product slider.
 * It includes a header, a countdown timer, and a horizontally scrolling product slider.
 */

"use client"

import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import CustomSliderArrow from "../slider/custom-slider-arrow"
import Button from "../button"
import Countdown from "./countdown"

import { Product } from "@/util/interfaces/product"
import ProductItemSlider from "../slider/slider-items/product-slider-item"

function TodaysDealsSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await fetch(
          `http://localhost:4000/api/products?tags=hotDeal&limit=10`
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

  // Set the target countdown date to one year from today
  const targetDate = new Date()
  targetDate.setFullYear(targetDate.getFullYear() + 1)

  // Slider settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomSliderArrow direction="right" />,
    prevArrow: <CustomSliderArrow direction="left" />,
    responsive: [
      {
        breakpoint: 990, // Adjust settings for screens ≤ 990px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      },
      {
        breakpoint: 800, // Adjust settings for screens ≤ 800px
        settings: {
          slidesToShow: 1 // Show 1 slide
        }
      }
    ]
  }

  return (
    <section className="w-full px-[3.5rem] py-[6rem] s:min-h-[950px] m:my-[6rem] m:h-[740px] m:p-0 l:px-0">
      {/* Container with box shadow */}
      <div className="light-shadow flex h-[495px] w-full items-start justify-between rounded-[1rem] px-[3.8rem] py-[3.3rem] m:min-h-full m:flex-col">
        {/* Header section with title, separator, countdown, and button */}
        <header className="flex h-full max-w-[25%] flex-col items-start justify-start gap-[2.5rem] m:w-auto m:max-w-full m:gap-[1rem]">
          <div className="flex flex-col items-start gap-2">
            {/* Section title */}
            <h3 className="max-w-[250px] text-[2.8rem] font-[400] leading-tight text-darkGray s:text-[1.5rem] m:max-w-full">
              Today&apos;s Hot Deals!
            </h3>
            {/* Decorative separator line */}
            <div className="h-[2px] w-[50%] bg-gray-300 s:!w-[50%] m:mt-[.7rem] m:w-[25%]"></div>
          </div>

          {/* Countdown timer */}
          <Countdown className="max-w-[250px]" targetDate={targetDate} />

          {/* CTA button to shop */}
          <Button className="mt-[1rem]">Shop now</Button>
        </header>

        {/* Product slider displaying deal items */}
        <Slider className="max-w-[73%] m:max-w-full" {...sliderSettings}>
          {products.length > 0 ? (
            products.map(product => (
              <ProductItemSlider key={product._id} product={product} />
            ))
          ) : (
            // Invisible placeholder fallback to maintain slider layout while products load
            <div className="invisible">Loading…</div>
          )}
        </Slider>
      </div>
    </section>
  )
}

export default TodaysDealsSection
