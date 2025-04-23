"use client";

import { useEffect, useState } from "react";
import {  usePathname } from "next/navigation"; // Use next/navigation
import { fetchProductById } from "@/util/helperFunctions/backend-fetching";
import ProductDetailsSection from "./product-details-section";
import ProductTabsInfo from "./product-info-tabs";
import GamingProductsPromoSection from "./gaming-products-promo-section";
import RecommendationsSection from "../recommendations-section";
import { Product } from "@/util/interfaces/product";
import Loading from "@/app/loading";

function ProductDetailsContainer() {
  const pathname = usePathname(); // Get the current pathname
  const [productId, setProductId] = useState<string | null>(null); // State for productId
  const [product, setProduct] = useState<Product | null>(null);

  // Extract the productId from the pathname (e.g., "/shop/67c5fbd43757936fe72328fc")
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/'); // Split the pathname by '/'
      const id = segments[segments.length - 1]; // Get the last segment, which is the product ID
      setProductId(id); // Set the productId state
    }
  }, [pathname]);

  // useEffect to fetch the product once productId is available
  useEffect(() => {
    if (productId) {
      console.log("Product ID extracted from path:", productId); // Log the product ID
      fetchProductById(productId, setProduct); // Fetch product data by productId
    }
  }, [productId]);

  if (!product) return <Loading/>; // Show loading until the product is fetched

  return (
    <>
      {/* Pass product details as a prop to child components */}
      <ProductDetailsSection product={product} />
      <ProductTabsInfo product={product} />
      <GamingProductsPromoSection />
      <RecommendationsSection />
    </>
  );
}

export default ProductDetailsContainer;
