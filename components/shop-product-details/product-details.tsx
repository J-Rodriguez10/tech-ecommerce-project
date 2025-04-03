import React, { useState } from "react"
import Link from "next/link"
import Rating from "../rating"
import Button from "../button"

import { useDispatch, useSelector } from "react-redux"

import { Product } from "@/util/interfaces/product"
import { RootState } from "@/redux/store" // Import RootState for type checking
import SocialMediaStrip from "./helper-components/social-media-strip"
import { addItemToCart } from "@/redux/helpers/cart-helpers"
import { useRouter } from "next/navigation"
import PaymentsStrip from "./helper-components/payments-strip"
import TermsAndConditions from "./helper-components/terms-and-conditions"
import AddToCartSection from "./helper-components/add-to-cart-section"
import AdditionalInformationButtons from "./helper-components/additional-information-buttons"
import StorageOptions from "./helper-components/storage-options"
import ColorSelection from "./helper-components/color-selection"
import Availability from "./helper-components/availability"

function ProductDetails({ product }: { product: Product }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1) // Local state for quantity
  const [showCartNotification, setShowCartNotification] = useState(false) // State to control the visibility of the notification

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  )

  // Handle adding product to the cart
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      // Redirect to the /account page (Login page) if not authenticated
      router.push("/account")
      return
    }

    // If authenticated, proceed with adding item to the cart
    addItemToCart(dispatch, product._id, quantity, product.price)

    // Show a success message that the item was added to the cart
    setShowCartNotification(true)

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowCartNotification(false)
    }, 3000)
  }

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
      <AddToCartSection
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
        showCartNotification={showCartNotification}
      />

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
