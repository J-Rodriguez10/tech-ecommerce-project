"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import CustomSliderArrow from "../slider/custom-slider-arrow"
import SectionHeader from "../section-header"
import ClientsReviewSliderItem from "../slider/slider-items/clients-review-slider-item"
import { DUMMY_REVIEWS_DATA } from "@/util/data/dummy-data/clients-review-data"


function ClientsReviewsSection() {
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
        breakpoint: 1200, // Screen width <= 1200px
        settings: {
          slidesToShow: 2 // Show 2 slides
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
    <section className="h-[auto] min-h-[500px] w-screen bg-bgGray py-[5.5rem]">
      <div className="cont flex flex-col items-center justify-center">
        <SectionHeader subHeader="Customers Feedback">
          What Clients Say
        </SectionHeader>

        <Slider
          className="w-[1150px] overflow-hidden rounded-[1rem] l:w-full"
          {...sliderSettings}
        >
          {DUMMY_REVIEWS_DATA.map((review, index) => (
            <ClientsReviewSliderItem key={index} {...review} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ClientsReviewsSection
