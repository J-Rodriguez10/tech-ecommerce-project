"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import SectionHeader from "../section-header"
import NewsArticleSliderItem from "../slider/slider-items/news-article-slider-item"
import CustomSliderArrow from "../slider/custom-slider-arrow"
import { DUMMY_NEWS_DATA } from "@/util/data/dummy-data/news"


function LatestNewsSection() {
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
      },
    ]
  }

  return (
    <section className="my-[5rem]">
      {/* Header */}
      <SectionHeader subHeader="Explore and find tips and tricks">
        {" "}
        Our Latest News
      </SectionHeader>

      {/* News Slider */}
      <div className="mt-[4rem]">
        <Slider className="w-full" {...sliderSettings}>
          {DUMMY_NEWS_DATA.map((news, i) => (<NewsArticleSliderItem key={i} {...news} />))}
        </Slider>
      </div>
    </section>
  )
}

export default LatestNewsSection
