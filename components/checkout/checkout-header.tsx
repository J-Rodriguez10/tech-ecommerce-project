import Image from "next/image"
import Link from "next/link"
import ShoppingBag from "../svgs/navbar-svgs/shopping-bag"

function CheckoutHeader() {
  return (
    <header className="h-auto border-b-[1px] border-[#DEDEDE] bg-white">
      <div className="tightest-cont flex h-[78px] items-center justify-between">
        <Link href="/">
          <Image
            alt="Phoone Logo"
            src="https://cdn.shopify.com/s/files/1/0035/5762/1829/files/logo_74cea665-41e6-4e29-a95a-56ceb67bb81e_x320.png?v=1702468281"
            width={300}
            height={40}
          />
        </Link>

        <Link href="/">
          <ShoppingBag />
        </Link>
      </div>
    </header>
  )
}

export default CheckoutHeader
