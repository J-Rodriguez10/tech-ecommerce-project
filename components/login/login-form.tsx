import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../button";
import { loginUser } from "@/redux/slices/userSlice";
import { AppDispatch } from "@/redux/store";

interface LoginFormProps {
  handleFormChange: () => void; // Function triggered when the "Create Account" button is clicked, switching from the LoginForm to the SignUpForm.
}

/**
 * A login form component that handles user authentication, input validation,
 * error display, and switching to the signup form.
 */

function LoginForm({ handleFormChange }: LoginFormProps) {
  const inputStyles = "w-full p-[9px] rounded-[5px] placeholder-darkGray";

  // Local state for form data: (email, password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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

  // Handle form submission (login)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Update UI to a loading state
    setIsLoading(true); 

    try {
      // Dispatch loginUser thunk to log in the user
      await dispatch(loginUser(formData)).unwrap();
      setIsLoading(false); // End loading state
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsLoading(false); // End loading state
      setErrorMessage("Login failed. Please check your credentials.");
      console.error(error); // Log the full error
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-[6rem] h-auto w-[600px] bg-[#F3F3F3] p-[2.75rem] xs:p-[1.5rem] s:w-auto"
    >
      <fieldset className="flex flex-col items-start gap-[1.5rem]">
        <legend className="text-center text-[2rem]">Login</legend>
        <p className="w-full text-center text-lightTextGray">
          Please enter your account details below.
        </p>

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

        {/* Form Buttons */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-between">
          <Button type="submit">{isLoading ? "Loading..." : "Sign In"}</Button>

          <Link className="w-auto xs:ml-auto" href="#">
            Forgot Your Password?
          </Link>
        </div>

        {/* Create Account Button */}
        <button type="button" onClick={handleFormChange}>
          Don&apos;t have an account? Create one
        </button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
