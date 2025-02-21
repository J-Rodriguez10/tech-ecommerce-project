import RatingFormInput from "./rating-form-input"

function ProductReviewForm() {
  return (
    <form className="mx-auto flex max-w-[600px] flex-col gap-7 py-[2rem] text-center text-darkGray">
      <h4 className="text-[1.5rem] font-[500]">Write a review</h4>

      <div className="flex flex-col gap-2">
        <p>Rating</p>
        <RatingFormInput />
      </div>

      <div className="flex flex-col gap-2">
        <p>
          Review Title{" "}
          <span className="text-[.8rem] text-lightTextGray">(100)</span>
        </p>
        <input
          required
          className="rounded-[5px] border-[1px] border-lightTextGray bg-transparent px-4 py-2 text-darkGray outline-none placeholder:text-lightTextGray focus:border-darkOrange"
          maxLength={100}
          placeholder="Give your review a title"
          aria-label="Review Title"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>Review</p>
        <textarea
          className="h-[150px] rounded-[5px] border-[1px] border-lightTextGray bg-transparent px-4 py-2 text-darkGray outline-none placeholder:text-lightTextGray focus:border-darkOrange"
          maxLength={500}
          placeholder="Write your comments here"
          aria-label="Review"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>Name (displayed publicly like John Smith)</p>
        <input
          required
          className="rounded-[5px] border-[1px] border-lightTextGray bg-transparent px-4 py-2 text-darkGray outline-none placeholder:text-lightTextGray focus:border-darkOrange"
          maxLength={30}
          placeholder="Enter your name (public)"
          aria-label="Name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>Email</p>
        <input
          required
          type="email"
          className="rounded-[5px] border-[1px] border-lightTextGray bg-transparent px-4 py-2 text-darkGray outline-none placeholder:text-lightTextGray focus:border-darkOrange"
          maxLength={100}
          placeholder="Enter your email (private)"
          aria-label="Email"
        />
      </div>

      <p className="mx-auto max-w-[550px] text-center text-[0.9rem] font-[500]">
        How we use your data: We’ll only contact you about the review you left,
        and only if necessary. By submitting your review, you agree to
        Judge.me’s terms and conditions and privacy policy.
      </p>

      <div className="flex justify-center gap-4">
        <button className="rounded-[5px] border-[2px] border-darkOrange bg-white px-[1.5rem] py-[8px] font-[600] text-darkOrange hover:opacity-75">
          Cancel Reviews
        </button>

        <button className="rounded-[5px] bg-darkOrange px-[1.5rem] py-[8px] font-[600] text-white hover:opacity-75">
          Submit Reviews
        </button>
      </div>
    </form>
  )
}

export default ProductReviewForm
