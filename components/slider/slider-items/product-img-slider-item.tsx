
import Image from "next/image"

export interface ProductImgSliderItemsProps {
  productImg: string // URL of the product image
  onClick: () => void // Function triggered when the item is clicked
  isActive: boolean // Determines if the image is currently selected (adds an opacity effect)
}

/* 
  A thumbnail item for the product image slider.  
  Displays a product image and applies an overlay effect when active.  
  Clicking the thumbnail updates the main displayed product image.  
*/

function ProductImgSliderItem({ productImg, onClick, isActive }: ProductImgSliderItemsProps) {
  return (
    // Container for the thumbnail, applying opacity if active
    <div
      onClick={onClick}
      className={`relative mx-1 flex h-[150px] items-center justify-center ${isActive ? "opacity-75" : ""}`}
    >
      {/* Thumbnail image */}
      <Image
        src={productImg}
        alt={productImg}
        fill
        className="object-contain"
      />
    </div>
  )
}

export default ProductImgSliderItem
