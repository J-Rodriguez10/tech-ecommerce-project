import Image from "next/image"
import React from "react"

function OurStorySection() {
  return (
    <section className="my-[5rem]">
      <div className="flex items-center gap-[2rem] s:flex-col l:items-start">
        {/* Left content */}
        <main className="flex flex-[1] flex-col gap-[1.2rem]">
          <h5 className="text-[2.6rem]">Our Story</h5>
          <p>
            Founded in 1993, Phoone was born out of a passion for innovation and
            a desire to provide tech enthusiasts and everyday users alike with a
            one-stop destination for all their mobile needs. Our journey began
            with a simple goal to bridge the gap between high-quality mobile
            products and an accessible user-friendly shopping experience.
          </p>
          <p>At phoone, we are committed to delivering:</p>
          <ol className="ml-[3rem] flex list-decimal flex-col gap-3">
            <li>Quality Assurance</li>
            <li>Customer Satisfaction</li>
            <li>Premium Build Quality</li>
            <li>Innovation and Trends</li>
          </ol>
        </main>

        {/* Right image */}
        <div className="relative h-[400px] flex-[1] bg-red-400 s:block s:max-h-[55vw] s:min-h-[55vw] s:min-w-full m:max-h-[30vw] l:h-[320px]">
          <Image
            src="https://quickstep007.myshopify.com/cdn/shop/files/Untitled-1_1b0ff390-b097-487a-a185-3f708777979a.jpg?v=1704972050"
            alt="Picture of phone products"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default OurStorySection
