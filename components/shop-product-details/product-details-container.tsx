"use client";

import {  usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";

import ProductDetailsSection from "./product-details-section";
import ProductTabsInfo from "./product-info-tabs";
import GamingProductsPromoSection from "./gaming-products-promo-section";
import RecommendationsSection from "../recommendations-section";
import Loading from "@/app/loading";
import { Product } from "@/util/interfaces/product";
import { fetchProductById } from "@/util/helperFunctions/backend-fetching";

/***
 * Dynamically fetches and renders product details based on the URL, including
 * product info, tabs, promotions, and recommendations.
 */

function ProductDetailsContainer() {
  const pathname = usePathname(); 
  const [productId, setProductId] = useState<string | null>(null); 
  const [product, setProduct] = useState<Product | null>(null);

  /**
   * Process:
   * 1) Extract the productId from the URL - usePathname
   * 2) Use the productID to find and set the product state variable
   * 3) Pass the product into corresponding components to render
   */

  // Extract the productId from the pathname
  // (e.g., "/shop/67c5fbd43757936fe72328fc")
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/');
      const id = segments[segments.length - 1];
      // Set the productId state
      setProductId(id);
    }
  }, [pathname]);

  // useEffect to fetch the product once productId is available
  useEffect(() => {
    if (productId) {
      console.log("Product ID extracted from path:", productId); // Log the product ID
      fetchProductById(productId, setProduct); // Fetch product data by productId
    }
  }, [productId]);

  // Show loading until the product is fetched
  if (!product) return <Loading/>; 

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
