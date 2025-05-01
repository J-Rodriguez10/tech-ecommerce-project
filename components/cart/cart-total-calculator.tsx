import Link from "next/link"

import Button from "../button"

/**
 * Component for calculating cart totals and estimating shipping costs.
 * Does not really calculate anything, just for show.
 */

function CartTotalCalculator() {
  const inputStyles =
    "inset-shadow w-full p-[9px] rounded-[5px] placeholder-darkGray border-[0.5px] border-[#DEDEDE]"
  return (
    <section className="!my-[8rem] flex gap-8 m:flex-col m:gap-[4rem]">
      
      {/* Shipping Estimates Input */}
      <form className="flex flex-1 flex-col gap-[3rem]">

        {/* Pick Delivery Data + Time */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 text-[1.4rem]">
            Pick a Delivery Date and Time
          </legend>
          <input
            className={`${inputStyles} max-w-[300px]`}
            type="date"
            aria-label="Select Date Here"
          />
          <input
            className={`${inputStyles} max-w-[300px]`}
            type="time"
            aria-label="Enter Delivery Time Here"
            placeholder="Write delivery time"
          />
          <p className="text-[0.9rem]">
            Pick delivery date and time as you choose. Delivery Time takes place
            between 12PM - 4PM MON-FRI AND 8AM-11AM SAT.
          </p>
        </fieldset>

        {/* Get Shopping Estimates */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 text-[1.4rem]">Get Shipping Estimates</legend>
          <input
            aria-label="Enter country here"
            placeholder="United States"
            className={`${inputStyles} max-w-[320px]`}
            type="text"
          />
          <div className="flex items-center gap-4">
            <label htmlFor="state">State</label>
            <input
              className={`${inputStyles} max-w-[200px]`}
              id="state"
              type="text"
              placeholder="Alabama"
            />
          </div>
          <input
            type="text"
            className={`${inputStyles} max-w-[150px]`}
            placeholder="Zip/Postal Code"
          />
        </fieldset>

        {/* Submit Button */}
        <Button className="min-w-[250px]">Calculate Shipping</Button>
      </form>

      {/* Cart Totals */}
      <div className="flex-1">
        <div className="flex flex-col items-center gap-8 rounded-[5px] bg-[#F7F7F7] p-9 m:p-[3rem]">

          <h3 className="text-[1.5rem]">Cart Totals</h3>

          {/* Subtotal + Total */}
          <table className="w-full table-fixed border">
            <tbody>
              <tr className="h-[50px]">
                <td className="w-1/2 border text-left">Subtotal</td>
                <td className="w-1/2 border text-right">$50.00</td>
              </tr>
              <tr className="h-[50px]">
                <td className="w-1/2 border text-left">Total</td>
                <td className="w-1/2 border text-right">$55.00</td>
              </tr>
            </tbody>
          </table>

          {/* Proceed to checkout */}
          <Link href="/checkout">
            <Button variant="red" className="min-w-[270px]">
              Proceed To Checkout
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CartTotalCalculator
