"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store" // Import RootState to access the state
import { logout } from "@/redux/slices/userSlice" // Assuming you have a logout action

import LoginForm from "./login-form"
import SignUpForm from "./sign-up-form"
import Button from "../button"
import { useState } from "react"
import Link from "next/link"

function AccountForms() {
  const dispatch = useDispatch()

  // Accessing the user from the state with correct typing using UserState
  const user = useSelector((state: RootState) => state.user.user) // Using `user` from `user` slice, typed correctly
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  )

  const [formDisplayed, setFormDisplayed] = useState<"login" | "signup">(
    "login"
  )

  // Toggle between login and sign-up form
  function handleFormChange() {
    setFormDisplayed(prev => (prev === "login" ? "signup" : "login"))
  }

  // Handle user logout
  const handleLogout = () => {
    dispatch(logout())
  }

  console.log("Here is what the user object has:", user)

  return (
    <div className="container mx-auto my-[6rem] p-[2rem]">
      {isAuthenticated ? (
        // If the user is logged in, display the user profile with a logout button and shop link
        <div className="flex flex-col items-center">
          <h2 className="text-[2rem] font-semibold mb-4">
            Welcome back, {user?.firstName} {user?.lastName}!
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We&apos;re glad to see you again! Feel free to browse our latest
            products.
          </p>
          <div className="flex gap-4">
            <Link href="/shop">
              <Button>Go to Shop</Button>
            </Link>
            <Button onClick={handleLogout} variant="red">
              Logout
            </Button>
          </div>
        </div>
      ) : (
        // If the user is not logged in, toggle between login and sign-up forms
        <>
          {formDisplayed === "login" ? (
            <LoginForm handleFormChange={handleFormChange} />
          ) : (
            <SignUpForm handleFormChange={handleFormChange} />
          )}
        </>
      )}
    </div>
  )
}

export default AccountForms
