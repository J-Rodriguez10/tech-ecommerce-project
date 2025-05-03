import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Heart from "@/components/svgs/heart";
import Compare from "@/components/svgs/compare";
import Navlink from "@/components/home/navbar/navlink";
import MagnifyingGlass from "@/components/svgs/magnifying-glass";
import { AppDispatch, RootState } from "@/redux/store";
import { addToWishlist, deleteFromWishlist } from "@/redux/slices/userSlice"; 

/**
 * Displays a vertical stack of interactive hover buttons for wishlist, add-to-cart, and quick view actions on
 * a product card. It dynamically updates labels based on user authentication and Redux wishlist state, and redirects
 * unauthenticated users to the login page. Integrates tightly with Redux actions for cart and wishlist management.
 */

interface ButtonLabelProps {
  label: string;
}

function ButtonLabel({ label }: ButtonLabelProps) {
  return (
    <p className="relative inline-block whitespace-nowrap bg-darkGray px-[0.7rem] py-[.4rem] text-[0.75rem] capitalize text-white">
      {label}
      <span className="absolute right-[-6px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-darkGray" />
    </p>
  );
}

interface HoverButtonsProps {
  productId: string;
  price: number;
  onAddToCart: (productId: string, quantity: number, price: number) => void;
  onQuickView: () => void;
}

function HoverButtons({
  productId,
  price,
  onAddToCart,
  onQuickView,
}: HoverButtonsProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [wishlistLabel, setWishlistLabel] = useState("Add to wishlist");
  const [cartLabel, setCartLabel] = useState("Add to Cart");
  // const [quickViewLabel, setQuickViewLabel] = useState("Quick View");
  const quickViewLabel = "Quick View";

  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const wishlist = useSelector((state: RootState) => state.user.user?.wishlist); // Get the wishlist from Redux

  // Check if the product is already in the wishlist directly during rendering
  const isFilled = wishlist?.some(item => item.productId === productId);

  const hoverButtonsStyle =
    "black-hover flex min-h-[40px] min-w-[40px] h-[30%] w-[30%] items-center justify-center rounded-[50%] bg-darkOrange text-white";

  const handleAddToCartClick = () => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      router.push("/account");
    } else {
      onAddToCart(productId, 1, price); 
      // Change label to "Added to Cart!"
      setCartLabel("Added to Cart!"); 
      // Revert back after 3 seconds
      setTimeout(() => setCartLabel("Add to Cart"), 3000);
    }
  };

  const handleAddToWishlistClick = () => {
    if (!isAuthenticated) {
       // Redirect to login if not authenticated
      router.push("/account");
    } else {
      if (isFilled) {
        // If the product is in the wishlist, remove it
        dispatch(deleteFromWishlist(productId));
        setWishlistLabel("Add to wishlist");
      } else {
        // If the product is not in the wishlist, add it
        dispatch(addToWishlist(productId));
        setWishlistLabel("Remove from Wishlist!");
      }
    }
  };

  const handleQuickViewClick = () => {
    if (!isAuthenticated) {
      router.push("/account"); 
    } else {
      onQuickView(); 
    }
  };

  return (
    <ul className="absolute right-4 top-[15%] flex transform flex-col gap-[0.5rem] opacity-0 duration-500 ease-in-out group-hover:-translate-y-[10%] group-hover:opacity-100">
      
      <Navlink
        className={hoverButtonsStyle}
        hoverContent={<ButtonLabel label={wishlistLabel} />}
        hoverContentDirection="left"
        hoverContentInteractable={false}
        onClick={handleAddToWishlistClick}
      >
         {/* Heart dynamically filled based on wishlist state */}
        <Heart isFilled={isFilled} />
      </Navlink>

      <Navlink
        className={hoverButtonsStyle}
        hoverContent={<ButtonLabel label={cartLabel} />}
        hoverContentDirection="left"
        hoverContentInteractable={false}
        onClick={handleAddToCartClick}
      >
        <Compare />
      </Navlink>
      <Navlink
        className={hoverButtonsStyle}
        href={`shop/${productId}`}
        hoverContent={<ButtonLabel label={quickViewLabel} />}
        hoverContentDirection="left"
        hoverContentInteractable={false}
        onClick={handleQuickViewClick}
      >
        <MagnifyingGlass />
      </Navlink>
    </ul>
  );
}

export default HoverButtons;
