import React from "react"
import Rating from "../rating"
import Button from "../button"
import Heart from "../svgs/heart"
import Information from "../svgs/information"
import Mail from "../svgs/mail"
import Image from "next/image"
import Facebook from "../svgs/social-media-svgs/facebook"
import Link from "next/link"
import X from "../svgs/social-media-svgs/x"
import Pinterest from "../svgs/social-media-svgs/pinterest"

/*  
  Displays detailed information about a product, including its name, availability, rating, price,  
  description, and customizable options (storage, color, quantity). Users can interact with  
  buttons to add the item to the cart, buy it now, or save it to their wishlist.  
  Social sharing and secure payment options are also provided.  
*/

function ProductDetails() {
  return (
    <main className="flex h-auto flex-1 flex-col gap-4 pb-[35px] text-darkGray s:pb-[0px]">
      {/* Product name */}
      <h1 className="text-[1.75rem] font-[500]">OnePlus 6t Mirror</h1>

      {/* Availability status */}
      <p>
        Availability:{" "}
        <span className="font-[500] text-darkOrange">9 in stock</span>
      </p>

      {/* Rating and reviews */}
      <div className="flex gap-4">
        <Rating className="!justify-start" rating={5} />
        <p className="text-[.95rem] font-[500]">1 Review</p>
      </div>

      {/* Price information */}
      <p className="text-[1.3rem] font-[500]">$150.00</p>

      {/* Product description */}
      <p>
        Mobile phones are pivotal in our daily lives. Living without a mobile
        phone is challenging in this contemporary environment. A mobile phone is
        a broadband network
      </p>

      {/* Additional information buttons */}
      <div className="flex gap-[2rem]">
        <button className="orange-hover flex items-center gap-1">
          <Information />
          Shipping
        </button>
        <button className="orange-hover flex items-center gap-2 capitalize">
          <Mail />
          Ask About This Product
        </button>
      </div>

      {/* Storage options */}
      <div className="flex items-center gap-4">
        <p>Storage:</p>
        <button className="rounded-lg border-[1px] border-[#ababab] px-2 py-1 text-[1.1rem] font-[500] text-[#ababab]">
          128GB
        </button>
        <button className="rounded-lg border-[1px] border-darkGray px-2 py-1 text-[1.1rem] font-[500]">
          256GB
        </button>
      </div>

      {/* Color selection */}
      <div className="flex items-center gap-2">
        <p className="mr-4">Color: </p>
        <div className="rounded-md border-[1px] border-gray-400 p-[1px]">
          <button className="rounded-md bg-blue-500 p-[1.15rem]"></button>
        </div>
        <button className="rounded-md bg-pink-300 p-[1.15rem]"></button>
        <button className="rounded-md bg-purple-500 p-[1.15rem]"></button>
      </div>

      {/* Quantity selection */}
      <div className="flex items-center gap-5">
        <p>Quantity:</p>
        <div className="rounded-md border-[1px] border-darkGray">
          <button className="h-[43px] px-4 font-[500]">-</button>
          <input type="number" value="1" min="1" className="h-[43px] w-12 !text-center" readOnly />
          <button className="h-[43px] px-4 font-[500]">+</button>
        </div>
      </div>

      {/* Add to cart and wishlist buttons */}
      <div className="flex gap-5">
        <Button className="max-w-[400px] !px-[4.2rem] !py-[0.8rem]">Add To Cart</Button>
        <button className="default-transition rounded-[50%] border-[1px] border-[#d8d8d8] bg-white p-[1rem] hover:bg-darkGray hover:text-white">
          <Heart />
        </button>
      </div>

      {/* Terms and conditions */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" aria-label="I agree with the terms and conditions" />
        <p>I agree with the terms and conditions</p>
      </div>

      {/* Buy now button */}
      <Button variant="lightOrange">Buy It Now</Button>

      {/* Payment methods */}
      <div>
        <p>Guaranteed safe checkout</p>
        <Image
          alt="Guaranteed safe checkout: Visa, MasterCard, Paypal, Amazon"
          src="https://quickstep007.myshopify.com/cdn/shop/files/payments_large_8ba3451a-08df-4db0-925a-f1cf2f34f183.png?v=1703144464"
          width={320}
          height={32}
          className="mt-2"
        />
      </div>

      {/* Social media share buttons */}
      <div className="flex items-center">
        <p className="mr-6">Share:</p>
        <div className="flex gap-3">
          <Link href="https://www.facebook.com/" className="rounded-md bg-[#3b5998] p-[0.6rem] text-white hover:opacity-75">
            <Facebook width="18" height="18" />
          </Link>
          <Link href="https://x.com/?lang=en" className="rounded-md bg-darkGray p-[0.6rem] text-white hover:opacity-75">
            <X width="18" height="18" />
          </Link>
          <Link href="https://www.pinterest.com/" className="rounded-md bg-[#bd081b] p-[0.6rem] text-white hover:opacity-80">
            <Pinterest width="18" height="18" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
