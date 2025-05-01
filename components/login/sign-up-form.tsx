import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../button";
import { registerUser } from "@/redux/slices/userSlice"; 
import { AppDispatch } from "@/redux/store";

interface SignUpFormProps {
  handleFormChange: () => void; // Function triggered when the "Already have an account?" button is clicked, switching from LoginForm to SignUpForm
}

/**
 * A registration form component that handles user sign-up, form validation,
 * success/error feedback, and switching to the login form.
 */

function SignUpForm({ handleFormChange }: SignUpFormProps) {
  const inputStyles = "w-full p-[9px] rounded-[5px] placeholder-darkGray";

  // Local state for form data (firstName, lastName, email, password)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  // To notify user of an unsuccessful registration
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // To notify user of a successful registration
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  // To handle loading state in the UI
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Dynamically update the correct field in the formData object
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  // Handle form submission (sign up)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); 

    try {
      // Dispatch registerUser thunk to register the user
      await dispatch(registerUser(formData)).unwrap();
      setIsLoading(false);
      setSuccessMessage("Registration successful! You can now log in.");
      setErrorMessage(null); // Clear any previous error messages

      // Clear the form after successful registration
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setErrorMessage(`Registration failed. Please try again: ${error.message}`);
       // Clear any previous success messages
      setSuccessMessage(null);
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-[6rem] h-auto w-[600px] bg-[#F3F3F3] p-[2.75rem] xs:p-[1.5rem] s:w-auto"
    >
      <fieldset className="flex flex-col items-start gap-[1.5rem]">
        <legend className="text-center text-[2rem]">Create Account</legend>
        <p className="w-full text-center text-lightTextGray">
          Please enter your details below to register.
        </p>

        {/* First Name */}
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputStyles}
            placeholder="First Name"
            id="firstName"
          />
        </div>

        {/* Last Name */}
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputStyles}
            placeholder="Last Name"
            id="lastName"
          />
        </div>

        {/* Email */}
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
            placeholder="Email"
            id="email"
          />
        </div>

        {/* Password */}
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={inputStyles}
            placeholder="Password"
            id="password"
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-sm text-center">{successMessage}</p>
        )}

        {/* Form Buttons */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-between">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>

          <button type="button" className="w-auto xs:ml-auto" onClick={handleFormChange}>
            Already have an account?
          </button>
        </div>

        {/* Return to Home Page */}
        <Link href="/">Return to Home Page</Link>
      </fieldset>
    </form>
  );
}

export default SignUpForm;
