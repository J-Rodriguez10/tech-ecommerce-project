"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import dynamic from "next/dynamic"
import Image from "next/image"
import { DUMMY_BRANDS } from "@/util/data/dummy-data/dummy-brands"

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), {
  ssr: false
})

function BrandSliderItem({
  brandUrl,
  brand
}: {
  brandUrl: string
  brand: string
}) {
  return (
    <div className="mx-3">
      <div className="lighter-shadow relative h-[60px] w-[150px] rounded-[1rem] overflow-hidden xs:w-auto">
        <Image src={brandUrl} alt={brand} fill className="object-contain" />
      </div>
    </div>
  )
}

function BrandsStrip() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enabling auto playing for the slider
    autoplaySpeed: 5000, // Time interval of 5 seconds between slides
    responsive: [
      {
        breakpoint: 1200, // Screen width <= 1200px
        settings: {
          slidesToShow: 5 // Show 5 slides
        }
      },
      {
        breakpoint: 990, // Screen width <= 990px
        settings: {
          slidesToShow: 4 // Show 4 slides
        }
      },
      {
        breakpoint: 770, // Screen width <= 770px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      },
      {
        breakpoint: 575, // Screen width <= 770px
        settings: {
          slidesToShow: 2 // Show 2 slides
        }
      }
    ]
  }

  return (
    <div>
      <Slider className="" {...sliderSettings}>
        {DUMMY_BRANDS.map((brand, i) => (
          <BrandSliderItem {...brand} key={i} />
        ))}
      </Slider>
    </div>
  )
}

export default BrandsStrip
