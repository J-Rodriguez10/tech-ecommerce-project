import Image from "next/image"
import Information from "../svgs/information"
import CheckoutItemsDisplay from "./checkout-items-display"

function CheckoutForm() {
  const inputStyles =
    "w-full my-2 rounded-md border px-4 py-3 placeholder-lightTextGray font-[500] text-[1rem] border-[#DEDEDE]"
  const checkboxStyles = "mr-3 !rounded-[5px] !border-lightTextGray p-2"
  const labelStyles = "text-[1rem] font-[400] text-black"

  return (
    <form className="w-[50%] space-y-6 rounded-lg bg-white pr-[2.5rem] text-darkGray m:min-w-full m:pr-0 l:w-[65%]">
      {/* Notice */}
      <div className="mt-8 flex items-center gap-3 rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#F6F6F6] px-3 py-5 text-black">
        <Information />

        <p>Your cart has been updated based on your shipping country.</p>
      </div>

      {/* Contact Info */}
      <fieldset>
        <legend className="block text-[1.6rem] font-[600]">Contact</legend>

        <input
          type="text"
          placeholder="Email or mobile phone number"
          className={`${inputStyles}`}
          aria-label="Contact"
        />

        <div className="mt-2 flex items-center">
          <input type="checkbox" id="newsletter" className={checkboxStyles} />
          <label htmlFor="newsletter" className={labelStyles}>
            Email me with news and offers
          </label>
        </div>
      </fieldset>

      {/* Delivery Info */}
      <fieldset className="">
        <legend className="block text-[1.6rem] font-[600]">Delivery</legend>

        {/* Choose a country */}
        <select className={inputStyles}>
          <option>Choose a country</option>
          <option>United States</option>
        </select>

        {/* First + Last Name */}
        <div className="mt-2 grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className={inputStyles} />
          <input type="text" placeholder="Last Name" className={inputStyles} />
        </div>

        {/* Address */}
        <input type="text" placeholder="Address" className={inputStyles} />

        {/* Apartment */}
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className={inputStyles}
        />

        {/* City, State, Zipcode */}
        <div className="mt-2 grid grid-cols-3 gap-4">
          <input type="text" placeholder="City" className={inputStyles} />
          <input type="text" placeholder="State" className={inputStyles} />
          <input type="text" placeholder="Zipcode" className={inputStyles} />
        </div>

        {/* Save Info Checkbox */}
        <div className="mt-2 flex items-center">
          <input type="checkbox" id="saveInfo" className={checkboxStyles} />
          <label htmlFor="saveInfo" className={labelStyles}>
            Save this information for next time
          </label>
        </div>
      </fieldset>

      {/* Shipping Method */}
      <fieldset className="">
        <legend className="text-[1.2rem] font-[600]">Shipping Method</legend>

        {/* Shipping Options */}
        <div className="mt-4 flex items-center rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#F6F6F6] px-3 py-5">
          <input type="radio" id="shipping" name="shipping" className="mr-2" />
          <label htmlFor="shipping" className="text-sm">
            International Shipping
          </label>
        </div>
      </fieldset>

      {/* Payment Info */}
      <fieldset className="">
        <legend className="block text-[1.6rem] font-[600]">
          Payment Information
        </legend>

        <p className="text-lightTextGray">
          All transactions are secure and encrypted.
        </p>

        {/* Card Inputs Container */}
        <div className="mt-4">
          {/* Header */}
          <header className="flex w-full justify-between rounded-t-md border-[1.5px] border-black bg-[#F6F6F6] px-2 py-4">
            <h3>Credit Card</h3>
            <Image
              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/bogus.CIsYlO1z.svg"
              alt="THIS IS FAKE"
              width={38}
              height={25}
            />
          </header>

          {/* Card Inputs */}
          <div className="rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#F6F6F6] px-3 py-5 pt-0">
            {/* Card Number */}
            <input
              placeholder="Credit Number"
              className={inputStyles}
              type="text"
            />

            {/* Expiration Date + Security Code */}
            <div className="mt-2 grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                className={inputStyles}
              />
              <input
                type="text"
                placeholder="Security Code"
                className={inputStyles}
              />
            </div>

            {/* Name on Card */}
            <input
              type="text"
              placeholder="Name on Card"
              className={inputStyles}
            />

            {/* Use This Address Checkbox */}
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="billing"
                className={`${checkboxStyles} white-check !bg-black !text-white`}
              />
              <label htmlFor="billing" className={labelStyles}>
                Use shipping address as billing address
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      {/* Mobile Version - Checkout Items Display */}
      <CheckoutItemsDisplay className="!my-4 hidden !bg-white m:block" />

      {/* Submit Button */}
      <button className="w-full rounded-sm bg-black p-2 py-3 font-[700] text-white">
        Pay Now
      </button>

      {/* All rights reserved */}
      <p className="!mt-[50px] border-t-[1px] border-t-[#DEDEDE] py-4 text-[0.8rem] text-lightTextGray">
        All rights reserved
      </p>
    </form>
  )
}

export default CheckoutForm
