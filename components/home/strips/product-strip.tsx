/**
 * Product Component
 *
 * Represents an individual product with a background image, label, and pricing.
 * Includes an overlay for readability and a zoom effect on hover.
 */

interface ProductProps {
  productUrl: string // URL of the product image
  label: string // Name or category of the product
  pricing: string // Pricing information (e.g., "Starting at $299")
}

function Product({ productUrl, label, pricing }: ProductProps) {
  return (
    <li
      style={{
        backgroundImage: `url(${productUrl})` // Sets background image dynamically
      }}
      className="group relative flex h-[250px] flex-1 flex-col items-start justify-center gap-4 overflow-hidden rounded-[1rem] bg-cover bg-center px-[1rem] s:!max-h-[300px] s:!min-h-[300px] m:min-h-[390px] l:max-h-[160px]"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-50"></div>

      {/* Product label */}
      <p className="relative z-10 !max-w-[60%] text-[2rem] font-[500] leading-none text-white xs:!text-[1.5rem] l:text-[1.8rem]">
        {label}
      </p>

      {/* Pricing information */}
      <p className="relative z-10 font-[600] text-gray-200">{pricing}</p>

      {/* Zoom effect on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${productUrl})` }}
      ></div>
    </li>
  )
}

/**
 * ProductStrip Component
 *
 * Displays a horizontal or vertical list of Product components.
 * Used to showcase featured products in a visually appealing format.
 */

interface ProductsStripProps {
  products: {
    productUrl: string // URL of the product image
    label: string // Name or category of the product
    pricing: string // Pricing information
  }[]
}

function ProductStrip({ products }: ProductsStripProps) {
  return (
    <div>
      <ul className="flex justify-between gap-8 m:flex-col">
        {products.map((product, index) => (
          <Product
            key={index} // Unique key for React list rendering
            productUrl={product.productUrl}
            label={product.label}
            pricing={product.pricing}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProductStrip
