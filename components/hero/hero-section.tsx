"use client"

import { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import HeroSliderItem from "../slider/slider-items/hero-slider-item"
import CustomPaginationButton from "../slider/custom-pagination-button"

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    customPaging: (i: number) => (
      <CustomPaginationButton
        isActive={i === currentSlide}
        onClick={() => console.log(`Go to slide ${i}`)}
      />
    )
  }

  return (
    <section className="flex h-[524px] w-full justify-end pt-[2.1rem]">
      {/* Slick slider */}
      <Slider className="max-w-[73%] m:max-w-full" {...sliderSettings}>
        <HeroSliderItem
          bgUrl="https://quickstep007.myshopify.com/cdn/shop/files/sl21_23fb6c25-f095-439a-90f0-510ae470e9de.png?v=1705753642"
          label="Up to 30% off"
          header="New Arrivals"
        />
        <HeroSliderItem
          bgUrl="https://quickstep007.myshopify.com/cdn/shop/files/sl11_10760a93-4429-4c16-964f-6e69ebb2d3cb.png?v=1705751040"
          label="Up to 40% off"
          header="New AirPods"
        />
      </Slider>
    </section>
  )
}

export default HeroSection