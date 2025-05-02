"use client"

import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


import ProductItemSlider from "../slider/slider-items/product-slider-item"
import { Product } from "@/util/interfaces/product"
import { RootState } from "@/redux/store"

/**
 * Displays a wishlist section where users can see a grid of products they have added to their wishlist.
 * Each product is displayed using a `ProductItemSlider`, allowing users to view and interact with the items.
 */

function WishlistDisplay() {

  const wishlist = useSelector((state: RootState) => state.user.user?.wishlist) 
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]) 
  const [isLoading, setIsLoading] = useState<boolean>(true) 

  useEffect(() => {
    if (wishlist && wishlist.length > 0) {
      // Fetch products if wishlist exists
      // Extract product IDs from the wishlist
      const productIds = wishlist.map(item => item.productId) 

      // Fetch product details from the backend using the product IDs
      axios
        .post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/products/fetch`, { productIds })
        .then(response => {
          // Set the fetched products in local state
          setWishlistProducts(response.data.products) 
          // Set loading to false when data is fetched
          setIsLoading(false) 
        })
        .catch(error => {
          console.error("Error fetching products:", error)
          setIsLoading(false) // Set loading to false even in case of an error
        })
    }
  }, [wishlist]) // Re-run when the `wishlist` changes

  // Display loading message if products are still being fetched
  if (isLoading) {
    return <div>Loading your wishlist...</div>
  }

  return (
    <main className="my-[5rem] flex h-auto min-h-[250px] flex-col justify-center gap-4 bg-white text-darkGray">
      <div className="grid-container gap-[1.5rem]">
        {wishlistProducts?.map(product => (
          <ProductItemSlider
            key={product._id} // Use unique key from the product
            product={product}
          />
        ))}
      </div>
    </main>
  )
}

export default WishlistDisplay
