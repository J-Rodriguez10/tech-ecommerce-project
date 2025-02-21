import Rating from "@/components/rating"

function ProductRatingDistribution() {
  return (
    <ul className="flex flex-1 flex-col">
      <li className="flex items-center gap-[2rem]">
        {/* 5 star rating */}
        <Rating rating={5} />
        {/* Bar amount percentage from total amount reviews */}
        <div className="h-[14px] w-[140px] bg-[#e0e0e080]">
          <span
            style={{ width: `${(1 / 2) * 100}%` }}
            className="block h-full bg-darkOrange"
          ></span>
        </div>
        {/* Number amount from total amount of reviews */}
        <p>1</p>
      </li>

      <li className="flex items-center gap-[2rem]">
        {/* 4 star rating */}
        <Rating rating={4} />
        {/* Bar amount percentage from total amount reviews */}
        <div className="h-[14px] w-[140px] bg-[#e0e0e080]"></div>
        {/* Number amount from total amount of reviews */}
        <p>0</p>
      </li>

      <li className="flex items-center gap-[2rem]">
        {/* 3 star rating */}
        <Rating rating={3} />
        {/* Bar amount percentage from total amount reviews */}
        <div className="h-[14px] w-[140px] bg-[#e0e0e080]"></div>
        {/* Number amount from total amount of reviews */}
        <p>0</p>
      </li>

      <li className="flex items-center gap-[2rem]">
        {/* 2 star rating */}
        <Rating rating={2} />
        {/* Bar amount percentage from total amount reviews */}
        <div className="h-[14px] w-[140px] bg-[#e0e0e080]"></div>
        {/* Number amount from total amount of reviews */}
        <p>0</p>
      </li>

      <li className="flex items-center gap-[2rem]">
        {/* 1 star rating */}
        <Rating rating={1} />
        {/* Bar amount percentage from total amount reviews */}
        <div className="h-[14px] w-[140px] bg-[#e0e0e080]"></div>
        {/* Number amount from total amount of reviews */}
        <p>0</p>
      </li>
    </ul>
  )
}

export default ProductRatingDistribution
