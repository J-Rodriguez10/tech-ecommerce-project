"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import SectionHeader from "./section-header"
import ProductItemSlider from "./slider/slider-items/product-slider-item"
import CustomSliderArrow from "./slider/custom-slider-arrow"

function RecommendationsSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomSliderArrow direction="right" />,
    prevArrow: <CustomSliderArrow direction="left" />,
    responsive: [
      {
        breakpoint: 990, // Screen width <= 990px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      },
      {
        breakpoint: 770, // Screen width <= 770px
        settings: {
          slidesToShow: 1 // Show 1 slides
        }
      }
    ]
  }

  return (
    <section className="my-[4rem]">
      <SectionHeader>You may also like</SectionHeader>

      <main>
        <Slider {...sliderSettings}>
          <ProductItemSlider />
          <ProductItemSlider />
          <ProductItemSlider />
          <ProductItemSlider />
          <ProductItemSlider />
        </Slider>
      </main>
    </section>
  )
}

export default RecommendationsSection
