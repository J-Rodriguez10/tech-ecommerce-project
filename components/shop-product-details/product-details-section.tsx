import { Product } from "@/util/interfaces/product";

import ProductDetails from "./product-details";
import ProductImagesDisplayer from "./product-images-displayer";

interface ProductDetailsSectionProps {
  product: Product;
}

/***
 * Renders the main product details layout with image
 * display and product info side-by-side.
 */

function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  return (
    <section className="my-[5rem] flex gap-6 xs:gap-10 s:flex-col">
      <ProductImagesDisplayer product={product} />
      <ProductDetails product={product} />
    </section>
  );
}

export default ProductDetailsSection;
