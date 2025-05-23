"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useEffect, useState } from "react"

import CustomSliderArrow from "../slider/custom-slider-arrow"
import SectionHeader from "../section-header"
import ProductItemSlider from "../slider/slider-items/product-slider-item"
import { Product } from "@/util/interfaces/product"

function FeaturedCollectionSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/products?tags=featured&limit=10`
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomSliderArrow direction="right" />,
    prevArrow: <CustomSliderArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1200, // Screen width <= 1200px
        settings: {
          slidesToShow: 4 // Show 4 slides
        }
      },
      {
        breakpoint: 990, // Screen width <= 990px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      },
      {
        breakpoint: 770, // Screen width <= 770px
        settings: {
          slidesToShow: 2 // Show 2 slide
        }
      },
      {
        breakpoint: 575, // Screen width <= 575px
        settings: {
          slidesToShow: 1 // Show 1 slide
        }
      }
    ]
  }

  const sliderHeightStyles = "h-[30vw] m:h-[400px]  xs:min-h-[600px]"

  return (
    <section className="my-[6rem] h-auto w-full text-darkGray">
      {/* Header */}
      <SectionHeader subHeader="Get Your Desired Product!">
        Featured Collection
      </SectionHeader>

      {/* Slider component */}
      <Slider className="w-full" {...sliderSettings}>
        {/* Render individual product sliders */}
        {products.length > 0 ? (
          products.map(product => (
            <ProductItemSlider
              slideHeight={sliderHeightStyles}
              key={product._id}
              product={product}
            />
          ))
        ) : (
          // Invisible placeholder fallback to maintain slider layout while products load
          <div className="invisible">Loading…</div>
        )}
      </Slider>
    </section>
  )
}

export default FeaturedCollectionSection
