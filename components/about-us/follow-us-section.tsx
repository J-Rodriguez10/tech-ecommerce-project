"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import SectionHeader from "../section-header"
import CustomSliderArrow from "../slider/custom-slider-arrow"
import IgPictureSliderItem, {
  IgPictureSliderItemProps
} from "../slider/slider-items/ig-picture-slider-item"


/*
 * A responsive Instagram-style image slider showcasing posts with
 * custom navigation arrows.
 */

function FollowUsSection() {
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
          slidesToShow: 2 // Show 2 slides
        }
      },
      {
        breakpoint: 575, // Screen width <= 575px
        settings: {
          slidesToShow: 1 // Show 1 slides
        }
      }
    ]
  }

  const DUMMY_INSTAGRAM_POSTS: IgPictureSliderItemProps[] = [
    {
      post: "Post 1",
      pictureUrl:
        "https://quickstep007.myshopify.com/cdn/shop/files/c3_480x280.png?v=1701754130"
    },
    {
      post: "Post 2",
      pictureUrl:
        "https://quickstep007.myshopify.com/cdn/shop/files/c1_570x415_70d1714a-db12-4146-8ab0-2943d1df3207_480x280.png?v=1702553049"
    },
    {
      post: "Post 3",
      pictureUrl:
        "https://quickstep007.myshopify.com/cdn/shop/files/c4_480x280.png?v=1701754148"
    },
    {
      post: "Post 4",
      pictureUrl:
        "https://quickstep007.myshopify.com/cdn/shop/files/c2_480x280.png?v=1701754116"
    }
  ]

  return (
    <section className="my-[4rem]">
      <SectionHeader subHeader="Follow us on instagram">
        @phoone_shop
      </SectionHeader>

      {/* Slider */}
      <div className="">
        <Slider className="" {...sliderSettings}>
          {DUMMY_INSTAGRAM_POSTS.map((post, i) => (
            <IgPictureSliderItem {...post} key={i} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default FollowUsSection
