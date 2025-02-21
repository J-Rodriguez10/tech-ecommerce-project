"use client"

import { useState } from "react"

import LoginForm from "./login-form"
import SignUpForm from "./sign-up-form"

/**
 * Component for toggling between login and sign-up forms.
 */

function AccountForms() {
  const [formDisplayed, setFormDisplayed] = useState<"login" | "signup">("signup")

  function handleFormChange() {
    setFormDisplayed(prev => (prev === "login" ? "signup" : "login"))
  }

  return (
    <>
      {formDisplayed === "login" ? (
        <LoginForm handleFormChange={handleFormChange} />
      ) : (
        <SignUpForm handleFormChange={handleFormChange} />
      )}
    </>
  )
}

export default AccountForms
