import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/button";
import Heart from "@/components/svgs/heart";
import { Product } from "@/util/interfaces/product";
import { AppDispatch, RootState } from "@/redux/store";
import { addToCart, addToWishlist, deleteFromWishlist} from "@/redux/slices/userSlice";


interface AddToCartSectionProps {
  product: Product
}

/***
 * Allows users to select quantity, add a product to cart or wishlist, and shows a 
 * success notification—redirecting unauthenticated users to login.
 */

function AddToCartSection({ product }: AddToCartSectionProps) {
  // Importing dispatch and router tools:
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // State variables to control input fields
  const [quantity, setQuantity] = useState(1); 
  const [showCartNotification, setShowCartNotification] = useState(false);

  // Extracting if user is authenticated from user redux
  const isAuthenticated = useSelector((state: RootState ) => state.user.isAuthenticated);

  // Extracting wishlist from user redux
  const wishlist = useSelector((state: RootState) => state.user?.user?.wishlist); 

  // Check if the product is already in the wishlist
  const isInWishlist = wishlist?.some(item => item.productId === product._id);

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      router.push("/account");
      return;
    }

    dispatch(addToCart({
      productId: product._id, quantity,
      actionType: "UPDATE"
    }));
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  // Handle adding/removing product to/from wishlist
  const handleWishlistClick = () => {
    if (!isAuthenticated) {
      router.push("/account");
      return;
    }

    if (isInWishlist) {
      // Remove product from wishlist
      dispatch(deleteFromWishlist(product._id));
    } else {
      // Add product to wishlist
      dispatch(addToWishlist(product._id));
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Quantity selection */}
      <div className="flex items-center gap-5">
        <p>Quantity:</p>
        <div className="rounded-md border-[1px] border-darkGray">
          <button
            className="h-[43px] px-4 font-[500]"
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            className="h-[43px] w-12 !text-center"
            readOnly
          />
          <button
            className="h-[43px] px-4 font-[500]"
            onClick={() => setQuantity(prev => prev + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart and wishlist buttons */}
      <div className="flex gap-5">
        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="max-w-[400px] !px-[4.2rem] !py-[0.8rem]"
        >
          Add To Cart
        </Button>

        {/* Add/Remove From Wishlist Button */}
        <button
          className="default-transition rounded-[50%] border-[1px] border-[#d8d8d8] bg-white p-[1rem] hover:bg-darkGray hover:text-white"
          onClick={handleWishlistClick}
        >
          <Heart isFilled={isInWishlist} />
        </button>
      </div>

      {/* Cart notification (success message) */}
      {showCartNotification && (
        <div className="mt-4 rounded-md bg-green-500 p-4 text-center text-white">
          Item added to cart!
        </div>
      )}
    </div>
  );
}

export default AddToCartSection;
