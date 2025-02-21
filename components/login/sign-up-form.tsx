import Link from "next/link"
import Button from "../button"

interface SignUpFormProps {
  handleFormChange: () => void // Function triggered when the "Create Account" button is clicked, switching from the LoginForm to the SignUpForm.
}

function SignUpForm({ handleFormChange }: SignUpFormProps) {
  const inputStyles = "w-full p-[9px] rounded-[5px] placeholder-darkGray"

  return (
    <form className="mx-auto my-[6rem] h-auto w-[600px] bg-[#F3F3F3] p-[2.75rem] xs:p-[1.5rem] s:w-auto">
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
            className={inputStyles}
            placeholder="Password"
            id="password"
          />
        </div>

        {/* Form Buttons */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-between">
          <Button>Create</Button>

          <button className="w-auto xs:ml-auto" onClick={handleFormChange}>
            Already have an account?
          </button>
        </div>

        {/* Create Account Button */}
        <Link href="/">Return to Home Page</Link>
      </fieldset>
    </form>
  )
}

export default SignUpForm
