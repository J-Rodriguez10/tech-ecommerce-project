"use client"

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/util/interfaces/product";
import ProtoProductItemSlider from "../slider/slider-items/proto-product-slider-item";

/**
 * Displays a wishlist section where users can see a grid of products they have added to their wishlist. 
 * Each product is displayed using a `ProductItemSlider`, allowing users to view and interact with the items.
 */

function WishlistDisplay() {
  // const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.user.user?.wishlist); // Get wishlist productIds
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]); // Local state to store fetched products
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    if (wishlist && wishlist.length > 0) {
      // Fetch products if wishlist exists
      const productIds = wishlist.map(item => item.productId); // Extract product IDs from the wishlist

      // Fetch product details from the backend using the product IDs
      axios
        .post("http://localhost:4000/api/products/fetch", { productIds })
        .then((response) => {
          setWishlistProducts(response.data.products); // Set the fetched products in local state
          setIsLoading(false); // Set loading to false when data is fetched
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false); // Set loading to false even in case of an error
        });
    }
  }, [wishlist]); // Only re-run this effect when the `wishlist` changes

  // Display loading message if products are still being fetched
  if (isLoading) {
    return <div>Loading your wishlist...</div>;
  }

  return (
    <main className="my-[5rem] flex h-auto min-h-[250px] flex-col justify-center gap-4 bg-white text-darkGray">
      <div className="grid-container gap-[1.5rem]">
        {wishlistProducts?.map((product) => (
          <ProtoProductItemSlider
            key={product._id} // Use unique key from the product
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default WishlistDisplay;