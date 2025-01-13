"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import dynamic from "next/dynamic"

import ProductItemSlider from "@/components/slider/slider-items/product-slider-item"
import CustomSliderArrow from "../slider/custom-slider-arrow"
import Button from "../button"
import Countdown from "./countdown"

// Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false })

function TodaysDealsSection() {
  const targetDate = new Date()
  targetDate.setFullYear(targetDate.getFullYear() + 1) // Set the target date to one year from today

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomSliderArrow direction="right" />, // Custom next arrow
    prevArrow: <CustomSliderArrow direction="left" />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 990, // Screen width <= 990px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      },
      {
        breakpoint: 800, // Screen width <= 800px
        settings: {
          slidesToShow: 1 // Show 1 slides
        }
      }
    ]
  }
  return (
    <section className="w-full px-[3.5rem] py-[6rem] s:min-h-[950px] m:my-[6rem] m:h-[740px] m:p-0 l:px-0">
      {/* Box-shadow */}
      <div className="light-shadow flex h-[495px] w-full items-start justify-between rounded-[1rem] px-[3.8rem] py-[3.3rem] m:min-h-full m:flex-col">
        {/* Header */}
        <header className="flex h-full max-w-[25%] flex-col items-start justify-start gap-[2.5rem] m:w-auto m:max-w-full m:gap-[1rem]">
          <div className="flex flex-col items-start gap-2">
            <h3 className="max-w-[250px] text-[2.8rem] font-[400] leading-tight text-darkGray s:text-[1.5rem] m:max-w-full">
              Today&apos;s Hot Deals!
            </h3>
            <div className="h-[2px] w-[50%] bg-gray-300 s:!w-[50%] m:mt-[.7rem] m:w-[25%]"></div>
          </div>

          <Countdown className="max-w-[250px]" targetDate={targetDate} />

          <Button className="mt-[1rem]">Shop now</Button>
        </header>

        {/* Slider */}
        <Slider className="max-w-[73%] m:max-w-full" {...sliderSettings}>
          <ProductItemSlider />
          <ProductItemSlider />
          <ProductItemSlider />
          <ProductItemSlider />
        </Slider>
      </div>
    </section>
  )
}

export default TodaysDealsSection
