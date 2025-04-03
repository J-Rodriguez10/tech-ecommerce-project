"use client";

import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import type { default as SliderType } from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import ProductImgSliderItem from "../slider/slider-items/product-img-slider-item";
import CustomSliderArrow from "../slider/custom-slider-arrow";
import { Product } from "@/util/interfaces/product";

// Component to display product images
interface ProductImagesDisplayerProps {
  product: Product; // Product type from your interface
}

function ProductImagesDisplayer({ product }: ProductImagesDisplayerProps) {
  // Set the initial selected image to the first image in the product's images
  const [selectedImage, setSelectedImage] = useState<string>(product.productImages[0]);

  const sliderRef = useRef<SliderType | null>(null);

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
          slidesToShow: 3, // Show 4 slides
        },
      },
      {
        breakpoint: 575, // Screen width <= 575px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
    ],
  };

  // Function to update main image & scroll slider
  const handleThumbnailClick = (img: string, index: number) => {
    setSelectedImage(img);
    sliderRef.current?.slickGoTo(index, true); // Change slider position to the clicked image
  };

  return (
    <aside className="relative h-auto max-w-[50%] flex-1 s:!max-w-full">
      {/* Zoom image container */}
      <div className="sticky top-0 s:!min-w-full">
        {/* Main product image with zoom feature */}
        <div className="light-shadow relative h-auto w-full s:!min-w-full">
          <InnerImageZoom
            src={selectedImage}
            zoomType="hover"
            className="object-contain s:!min-w-full"
            hideHint={true}
          />
        </div>

        {/* Product thumbnail slider */}
        <div className="mt-5 w-full">
          <Slider ref={sliderRef} className="h-auto w-full" {...sliderSettings}>
            {product.productImages.map((img, i) => (
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
  );
}

export default ProductImagesDisplayer;
