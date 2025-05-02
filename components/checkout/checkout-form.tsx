"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Information from "../svgs/information";
import CheckoutItemsDisplay from "./checkout-items-display";
import axios from "axios";
import { RootState } from "@/redux/store";  
import { emptyCart } from "@/redux/slices/userSlice"; 


/**
 * A comprehensive checkout form that collects contact, shipping, and payment
 * details, submits an order to the backend, and clears the cart on success.
 */

function CheckoutForm() {
  // Initialize form state with default values:
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newsletterSubscribed: false,
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    shippingMethod: "international", 
    paymentMethod: "creditCard", // Default payment method
    useShippingAsBilling: false,
  });

  const dispatch = useDispatch();
  const router = useRouter();

  // Get the token from the Redux state
  const token = useSelector((state: RootState) => state.user.token);
  // Get the user's cart for the user Redux state
  const cart = useSelector((state: RootState) => state.user.user?.cart);

  // Input styles
  const inputStyles =
    "w-full my-2 rounded-md border px-4 py-3 placeholder-lightTextGray font-[500] text-[1rem] border-[#DEDEDE]";
  const checkboxStyles = "mr-3 !rounded-[5px] !border-lightTextGray p-2";
  const labelStyles = "text-[1rem] font-[400] text-black";

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form select change 
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formState);

    // Warn user that they are not logged in
    if (!token) {
      alert("You need to be logged in to place an order.");
      return;
    }
    // Warn user that they don't have anything in their cart
    if (!cart || cart?.length === 0) {
      alert("You don't have anything in the Cart! Try adding things to it.")
      return;
    }
    
    try {
      // Preparing shipping address to send in POST request
      const shippingAddress = {
        streetAddress: formState.streetAddress,
        apartment: formState.apartment || "",  // If apartment is not provided, set it to an empty string
        city: formState.city,
        state: formState.state,
        postalCode: formState.postalCode,
        country: formState.country,
      };

      // Send the form data to the backend
      // POST a new order to the backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/orders`,
        {
          email: formState.email,
          firstName: formState.firstName,
          lastName: formState.lastName,
          shippingAddress,
          paymentMethod: formState.paymentMethod,
          shippingMethod: formState.shippingMethod,
          useShippingAsBilling: formState.useShippingAsBilling,
          newsletterSubscribed: formState.newsletterSubscribed,
        },
        {
          headers: {
            // Token authentication
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Order was successfully created - tell the user
      console.log("Order created successfully:", response.data);
      alert("Your order has been placed successfully!");

      // Empty out the cart and send the user to their account page
      // so they can see their updated orders
      dispatch(emptyCart());
      router.push("/account");

    } catch (error) {
      // Handle error if something goes wrong
      console.error("Error creating order:", error);
      alert("There was an error placing your order. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[50%] space-y-6 rounded-lg bg-white pr-[2.5rem] text-darkGray m:min-w-full m:pr-0 l:w-[65%]">
      {/* Notice */}
      <div className="mt-8 flex items-center gap-3 rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#F6F6F6] px-3 py-5 text-black">
        <Information />
        <p>Your cart has been updated based on your shipping country.</p>
      </div>

      {/* Contact Info */}
      <fieldset>
        <legend className="block text-[1.6rem] font-[600]">Contact</legend>
        <input
          type="email"
          placeholder="Email"
          className={`${inputStyles}`}
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <div className="mt-2 flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletterSubscribed"
            className={checkboxStyles}
            checked={formState.newsletterSubscribed}
            onChange={handleInputChange}
          />
          <label htmlFor="newsletter" className={labelStyles}>
            Email me with news and offers
          </label>
        </div>
      </fieldset>

      {/* Delivery Info */}
      <fieldset>
        <legend className="block text-[1.6rem] font-[600]">Delivery</legend>
        <select
          className={inputStyles}
          name="country"
          value={formState.country}
          onChange={handleSelectChange}
        >
          <option>Choose a country</option>
          <option>United States</option>
        </select>

        {/* First + Last Name */}
        <div className="mt-2 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className={inputStyles}
            name="firstName"
            value={formState.firstName || ""}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className={inputStyles}
            name="lastName"
            value={formState.lastName || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Street Address */}
        <input
          type="text"
          placeholder="Street Address"
          className={inputStyles}
          name="streetAddress"
          value={formState.streetAddress}
          onChange={handleInputChange}
          required
        />

        {/* Apartment */}
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className={inputStyles}
          name="apartment"
          value={formState.apartment}
          onChange={handleInputChange}
        />

        {/* City, State, Zipcode */}
        <div className="mt-2 grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            className={inputStyles}
            name="city"
            value={formState.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="State"
            className={inputStyles}
            name="state"
            value={formState.state}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Zipcode"
            className={inputStyles}
            name="postalCode"
            value={formState.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Save Info Checkbox */}
        <div className="mt-2 flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            className={checkboxStyles}
            onChange={handleInputChange}
          />
          <label htmlFor="saveInfo" className={labelStyles}>
            Save this information for next time
          </label>
        </div>
      </fieldset>

      {/* Shipping Method */}
      <fieldset>
        <legend className="text-[1.2rem] font-[600]">Shipping Method</legend>
        <div className="mt-4 flex items-center rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#F6F6F6] px-3 py-5">
          <input
            type="radio"
            id="internationalShipping"
            name="shippingMethod"
            value="international"
            checked={formState.shippingMethod === "international"}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label htmlFor="internationalShipping" className="text-sm">
            International Shipping
          </label>
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
  );
}

export default CheckoutForm;
