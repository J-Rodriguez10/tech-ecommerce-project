"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import CustomSliderArrow from "../slider/custom-slider-arrow"
import ProductItemSlider from "../slider/slider-items/product-slider-item"
import SectionHeader from "../section-header"


function FeaturedCollectionSection() {
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
        <ProductItemSlider slideHeight={sliderHeightStyles} />
        <ProductItemSlider slideHeight={sliderHeightStyles} />
        <ProductItemSlider slideHeight={sliderHeightStyles} />
        <ProductItemSlider slideHeight={sliderHeightStyles} />
        <ProductItemSlider slideHeight={sliderHeightStyles} />
        <ProductItemSlider slideHeight={sliderHeightStyles} />
        <ProductItemSlider slideHeight={sliderHeightStyles} />
      </Slider>
    </section>
  )
}

export default FeaturedCollectionSection
