import Link from "next/link"
import Button from "../button"

interface LoginFormProps {
  handleFormChange: () => void // Function triggered when the "Create Account" button is clicked, switching from the LoginForm to the SignUpForm.
}
function LoginForm({ handleFormChange }: LoginFormProps) {
  const inputStyles = "w-full p-[9px] rounded-[5px] placeholder-darkGray"

  return (
    <form className="mx-auto my-[6rem] h-auto w-[600px] bg-[#F3F3F3] p-[2.75rem] xs:p-[1.5rem] s:w-auto">
      <fieldset className="flex flex-col items-start gap-[1.5rem]">
        <legend className="text-center text-[2rem]">Login</legend>
        <p className="w-full text-center text-lightTextGray">
          Please enter your account details below.
        </p>

        {/* Email */}
        <input
          type="email"
          aria-label="Enter email here"
          className={inputStyles}
          placeholder="Email"
        />
        {/* Password  */}
        <input
          type="password"
          aria-label="Enter password here"
          className={inputStyles}
          placeholder="Password"
        />

        {/* Form Buttons */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-between">
          <Button>Sign In</Button>

          <Link className="w-auto xs:ml-auto" href="#">
            Forgot Your Password?
          </Link>
        </div>

        {/* Create Account Button */}
        <button onClick={handleFormChange}>Create Account</button>
      </fieldset>
    </form>
  )
}

export default LoginForm
