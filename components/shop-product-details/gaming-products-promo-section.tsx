import Link from "next/link"
import Button from "../button"

function GamingProductsPromoSection() {
  return (
    <section className="my-[6.5rem] flex items-center gap-[1.5rem] s:flex-col">
      {/* Gaming Products Details Promotion */}
      <aside className="flex flex-1 flex-col gap-[1.5rem]">
        <h2 className="text-[1.8rem] font-[500]">Exclusive Gaming Products</h2>
        <p>
          Upgrade your gaming experience with cutting-edge gear designed for
          performance, precision, and style. Our exclusive lineup features to
          keep you ahead of the competition.
        </p>

        <ol className="flex list-decimal flex-col gap-2 pl-[3rem]">
          <li>High-Performance Hardware</li>
          <li>Customizable RGB Lighting</li>
          <li>Premium Build Quality</li>
          <li>Advanced Cooling Systems</li>
        </ol>

        <Link href="/shop">
          <Button className="mt-2">Shop Now</Button>
        </Link>
      </aside>

      {/* Console Video Promotion */}
      <figure className="relative h-[350px] w-full flex-1 s:!h-auto m:!h-[230px] l:h-[310px]">
        <iframe
          className="h-full w-full xs:!h-[70vw] s:h-[350px]"
          src="https://www.youtube.com/embed/g2cZgF7fcNI?si=ZFCX8Mks54-tBw19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </figure>
    </section>
  )
}

export default GamingProductsPromoSection
