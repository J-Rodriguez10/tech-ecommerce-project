import Rating from "@/components/rating"
import UserSvg from "@/components/svgs/navbar-svgs/user-svg"

function ProductReview() {
  return (
    <div className="flex flex-col gap-2 text-darkGray">
      {/* Rating + Date */}
      <div className="flex items-center justify-between">
        <Rating rating={5} />
        <p className="text-lightTextGray">01/11/2024</p>
      </div>

      {/* Prof Pic + Author */}
      <div className="flex items-center justify-start gap-3">
        <div className="flex items-center justify-center bg-[#e0e0e080] p-[0.25rem] text-darkOrange">
          <UserSvg size={30} />
        </div>
        <p>John Doe</p>
      </div>

      {/* Product Name */}
      <p className="font-[500]">Oneplus 6t Mirror</p>

      {/* Review */}
      <p>Oneplus 6t Mirror is a great phone!</p>
    </div>
  )
}

export default ProductReview
