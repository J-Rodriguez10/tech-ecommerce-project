"use client"

import { useRef, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import type { default as SliderType } from "react-slick"
import InnerImageZoom from "react-inner-image-zoom"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css"

import ProductImgSliderItem from "../slider/slider-items/product-img-slider-item"
import CustomSliderArrow from "../slider/custom-slider-arrow"

const productImages = [
  "https://quickstep007.myshopify.com/cdn/shop/files/20_1024x1024.jpg?v=1701772815",
  "https://quickstep007.myshopify.com/cdn/shop/files/24_1024x1024.jpg?v=1701772818",
  "https://quickstep007.myshopify.com/cdn/shop/files/25_1024x1024.jpg?v=1701772818",
  "https://quickstep007.myshopify.com/cdn/shop/files/23_1024x1024.jpg?v=1701772814",
  "https://quickstep007.myshopify.com/cdn/shop/files/22_1024x1024.jpg?v=1701772814",
  "https://quickstep007.myshopify.com/cdn/shop/files/21_1024x1024.jpg?v=1701772814"
]

/* 
  Displays a product image gallery with a main zoomable image and a thumbnail slider for selecting images.
  The main image can be zoomed in upon hover, and the thumbnail slider allows users to change the main image by clicking on the thumbnails.
*/

function ProductImagesDisplayer() {
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://quickstep007.myshopify.com/cdn/shop/files/20_1024x1024.jpg?v=1701772815"
  )

  const sliderRef = useRef<SliderType | null>(null)

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
        breakpoint: 990, // Screen width <= 990px
        settings: {
          slidesToShow: 4 // Show 4 slides
        }
      },
      {
        breakpoint: 575, // Screen width <= 575px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      }
    ]
  }

  // Function to update main image & scroll slider
  const handleThumbnailClick = (img: string, index: number) => {
    setSelectedImage(img)
    sliderRef.current?.slickGoTo(index, true)
  }

  return (
    // ^NOTE: Aside needs to have max-w-[50%] to prevent infinite width container caused by react-inner-image-zoom library
    <aside className="relative h-auto max-w-[50%] flex-1 s:!max-w-full">
      {/* Zoom image container */}
      <div className="sticky top-0 s:!min-w-full">
        {/* Main product */}
        <div className="light-shadow relative h-auto w-full s:!min-w-full">
          <InnerImageZoom
            src={selectedImage}
            zoomType="hover"
            className="object-contain s:!min-w-full"
            hideHint={true}
          />
        </div>

        {/* Product slider */}
        <div className="mt-5 w-full">
          <Slider ref={sliderRef} className="h-auto w-full" {...sliderSettings}>
            {productImages.map((img, i) => (
              <ProductImgSliderItem
                isActive={img === selectedImage}
                onClick={() => handleThumbnailClick(img, i)}
                productImg={img}
                key={i}
              />
            ))}
          </Slider>
        </div>
      </div>
    </aside>
  )
}

export default ProductImagesDisplayer
