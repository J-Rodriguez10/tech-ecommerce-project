"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SectionHeader from "./section-header"
import CustomSliderArrow from "./slider/custom-slider-arrow"
import RecommendationsSlider from "./slider/recommendations-slider"

/**
 * Displays a responsive product recommendation slider with custom navigation
 * arrows and dynamic settings.
 */

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
        <RecommendationsSlider slideHeight="h-[420px] s:min-h-[80vw]" settings={sliderSettings} />
      </main>
    </section>
  )
}

export default RecommendationsSection
