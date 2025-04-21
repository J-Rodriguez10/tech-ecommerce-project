
import Link from "next/link"
import Rating from "../rating"
import Button from "../button"



import { Product } from "@/util/interfaces/product"

import SocialMediaStrip from "./helper-components/social-media-strip"

import PaymentsStrip from "./helper-components/payments-strip"
import TermsAndConditions from "./helper-components/terms-and-conditions"
import AddToCartSection from "./helper-components/add-to-cart-section"
import AdditionalInformationButtons from "./helper-components/additional-information-buttons"
import StorageOptions from "./helper-components/storage-options"
import ColorSelection from "./helper-components/color-selection"
import Availability from "./helper-components/availability"

function ProductDetails({ product }: { product: Product }) {
  
  return (
    <main className="flex h-auto flex-1 flex-col gap-4 pb-[35px] text-darkGray s:pb-[0px]">
      {/* Product name */}
      <h1 className="text-[1.75rem] font-[500]">{product.name}</h1>

      {/* Availability status */}
      <Availability stock={product.stock} />

      {/* Rating and reviews */}
      <div className="flex gap-4">
        <Rating className="!justify-start" rating={product.rating} />
        <p className="text-[.95rem] font-[500]">
          {product.reviews.length} Reviews
        </p>
      </div>

      {/* Price information */}
      <p className="text-[1.3rem] font-[500]">${product.price}</p>

      {/* Product description */}
      <p>{product.description}</p>

      {/* Additional Information Buttons */}
      <AdditionalInformationButtons />

      {/* Storage Options */}
      <StorageOptions storageSize={product.storageSize} />

      {/* Color Selection */}
      <ColorSelection color={product.color} />

      {/* AddToCartSection (Refactored to use new component) */}
      <AddToCartSection product={product} />

      {/* Terms and conditions */}
      <TermsAndConditions />

      {/* Buy now button */}
      <Link href="/account">
        <Button variant="lightOrange">Buy It Now</Button>
      </Link>

      {/* Payment methods */}
      <PaymentsStrip />

      {/* Social Media Listings */}
      <SocialMediaStrip />
    </main>
  )
}

export default ProductDetails
