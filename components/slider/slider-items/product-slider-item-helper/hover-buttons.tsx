"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"; // Use useSelector to access global state
import Heart from "@/components/svgs/heart";
import Compare from "@/components/svgs/compare";
import MagnifyingGlass from "@/components/svgs/magnifying-glass";
import Navlink from "@/components/home/navbar/navlink";
import { RootState } from "@/redux/store"; // Import RootState for type checking

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
  onAddToWishlist: () => void;
  onAddToCart: () => void;
  onQuickView: () => void;
}

function HoverButtons({
  onAddToWishlist,
  onAddToCart,
  onQuickView
}: HoverButtonsProps) {
  const router = useRouter();
  
  // State to manage dynamic button labels
  const [wishlistLabel, setWishlistLabel] = useState("Add to wishlist");
  const [cartLabel, setCartLabel] = useState("Add to Cart");
  const [quickViewLabel, setQuickViewLabel] = useState("Quick View");

  // Access the isAuthenticated state directly from Redux
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const hoverButtonsStyle =
    "black-hover flex min-h-[40px] min-w-[40px] h-[30%] w-[30%] items-center justify-center rounded-[50%] bg-darkOrange text-white";

  // Handle Add to Cart with authentication check
  const handleAddToCartClick = () => {
    if (!isAuthenticated) {
      router.push("/account"); // Redirect to login if not authenticated
    } else {
      onAddToCart(); // Add to cart if authenticated
      setCartLabel("Added to Cart!"); // Change label to "Added to Cart!"
      setTimeout(() => setCartLabel("Add to Cart"), 3000); // Revert back after 3 seconds
    }
  };

  // Handle Add to Wishlist with authentication check
  const handleAddToWishlistClick = () => {
    if (!isAuthenticated) {
      router.push("/account"); // Redirect to login if not authenticated
    } else {
      onAddToWishlist(); // Add to wishlist if authenticated
      setWishlistLabel("Added to Wishlist!"); // Change label to "Added to Wishlist!"
      setTimeout(() => setWishlistLabel("Add to wishlist"), 3000); // Revert back after 3 seconds
    }
  };

  // Handle Quick View with authentication check
  const handleQuickViewClick = () => {
    if (!isAuthenticated) {
      router.push("/account"); // Redirect to login if not authenticated
    } else {
      onQuickView(); // Proceed to quick view if authenticated
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
        <Heart />
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
        href="#"
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
