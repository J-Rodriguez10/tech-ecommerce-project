import React from "react"
import Image from "next/image"
import { Product } from "@/util/interfaces/product"
import Rating from "@/components/rating"
import HoverButtons from "./product-slider-item-helper/hover-buttons"
import { useDispatch } from "react-redux"
import { addToCart} from "@/redux/slices/userSlice"
import { AppDispatch } from "@/redux/store"
import Link from "next/link"

interface ProductItemSliderProps {
  slideHeight?: string
  hoverButtons?: boolean
  product: Product
}

// This is the updated one
function ProductItemSlider({
  slideHeight = "h-[370px] l:h-[320px] s:min-h-[600px]",
  hoverButtons = true,
  product
}: ProductItemSliderProps) {
  const dispatch = useDispatch<AppDispatch>() // Correctly type dispatch


  const handleAddToCart = (productId: string) => {
    // Implement add to cart logic
    dispatch(addToCart({
      productId,
      actionType: "INCREMENT"
    }))
  }

  const handleQuickView = () => {
    // Implement quick view logic
    console.log("Viewing quick view of product", product._id)
  }

  return (
    <div>
      <div className={`${slideHeight} product l:px-0`}>
        <div className="group relative grid min-h-full grid-rows-[70%_30%] overflow-hidden text-darkGray">
          {/* Product image */}
          <div className="relative flex items-center justify-center">
            <Link
              href={`shop/${product._id}`}
              className="light-shadow relative h-[95%] w-[95%] p-[10px]"
            >
              <Image
                src={product.productImages[0]}
                alt={product.name}
                fill
                className="absolute inset-0 object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                quality={75}
              />
              <Image
                src={product.productImages[1]}
                alt={product.name}
                fill
                className="absolute inset-0 object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                quality={75}
              />
            </Link>

            {/* Hover buttons */}
            {hoverButtons && (
              <HoverButtons
                productId={product._id} // Pass the productId and other necessary props
                price={product.price} // Pass the price
              
                onAddToCart={handleAddToCart} // Pass handleAddToCart to HoverButtons
                onQuickView={handleQuickView}
              />
            )}
          </div>

          {/* Bottom section: Product description */}
          <Link
            href={`shop/${product._id}`}
            className="flex flex-col justify-center gap-[10px] text-center "
          >
            <Rating rating={product.rating} />
            <div className="relative h-[25px]">
              <p className="absolute inset-x-0 text-[1.1rem] font-[400] transition-all duration-500 ease-in-out group-hover:translate-y-[-9px] group-hover:opacity-0">
                {product.name}
              </p>
              <div className="absolute inset-x-0 translate-y-[10px] text-[1.1rem] font-[500] text-darkOrange opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-[-1px] group-hover:opacity-100">
                + Select Options
              </div>
            </div>
            <p className="text-[0.9rem] font-[500]">${product.price}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItemSlider
