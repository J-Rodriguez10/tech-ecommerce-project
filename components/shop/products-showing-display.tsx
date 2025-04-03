"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type ProductsShowingDisplayProps = {
  totalPages: number; // Pass totalPages instead of totalResults
};

function ProductsShowingDisplay({ totalPages }: ProductsShowingDisplayProps) {
  // Access the current page and products per page from Redux state
  const { currentPage, productsDisplayed } = useSelector(
    (state: RootState) => state.filters
  );

  // Ensure productsDisplayed is a positive number and defaults to 1 if invalid
  const validProductsDisplayed = Math.max(1, productsDisplayed);

  // Calculate the range of products being displayed
  const start = (currentPage - 1) * validProductsDisplayed + 1;
  const end = Math.min(currentPage * validProductsDisplayed, totalPages * validProductsDisplayed);

  // Check if the user is on the last page
  const isLastPage = currentPage === totalPages;

  // Set the message based on the totalPages and currentPage
  let displayMessage = "";

  if (totalPages === 0) {
    displayMessage = "There are no results.";
  } else if (isLastPage) {
    displayMessage = "Showing final products from the last page.";
  } else {
    displayMessage = `Showing ${start} - ${end} from ${totalPages} pages`;
  }

  return (
    <p className="m:hidden">
      {displayMessage}

    </p>
  );
}

export default ProductsShowingDisplay;
