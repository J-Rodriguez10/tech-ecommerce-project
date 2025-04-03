import Image from "next/image"
import Link from "next/link"

import Rating from "@/components/rating"
import { Product } from "@/util/interfaces/product"

// Props interface for CompactProductItemSlider component
interface CompactProductItemSliderProps {
  slideHeight?: string // Defines the height for the individual slide components. Defaults to "h-[370px] l:h-[320px] s:min-h-[600px]"
  product: Product
}

function CompactProductItemSlider({
  slideHeight = "h-[125px]",
  product
}: CompactProductItemSliderProps) {
  return (
    <Link href={`/shop/productId`} className={`${slideHeight} group`}>
      <div className="relative flex min-h-full gap-[.8rem] px-4 py-4 text-darkGray">
        {/* Left section: Displaying the product image */}
        <div className="relative flex max-w-[95px] flex-[1] items-center justify-center">
          {/* Box shadow effect for the product image container */}
          <div className="light-shadow relative h-[95%] w-[95%] overflow-hidden rounded-[1.25rem] p-[10px]">
            {/* Product image that scales within the container */}
            <Image
              src={product.productImages[0]}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right section: Product description including title, rating, and price */}
        <div className="flex flex-[3] flex-col items-start justify-center gap-[10px] m:flex-[2.33]">
          {/* Product rating (5 stars displayed) */}
          <Rating rating={product.rating} />

          {/* Product name and the option to select options (if applicable) */}
          <p className="text-[1.1rem] font-[400] default-transition group-hover:text-darkOrange">
            {product.name}
          </p>

          {/* Product price */}
          <p className="text-[0.9rem] font-[500]">${product.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default CompactProductItemSlider
