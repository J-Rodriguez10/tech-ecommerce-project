import Image from "next/image"
import Link from "next/link"

import Instagram from "./svgs/social-media-svgs/instagram"
import Facebook from "./svgs/social-media-svgs/facebook"
import Tiktok from "./svgs/social-media-svgs/tiktok"
import X from "./svgs/social-media-svgs/x"
import Youtube from "./svgs/social-media-svgs/youtube"
import { PAYMENT_METHODS_SVGS } from "@/util/data/payments-data"

/* 
  Website footer with company info, social media links, 
  quick navigation, and payment method icons.
*/

function Footer() {
  return (
    <footer className="h-auto w-screen bg-bgGray">
      <div className="cont flex min-h-[400px] flex-col justify-between !pb-[3rem] !pt-[4.5rem] text-darkGray">
        {/* Top section - flex container */}

        <div className="footer-grid flex gap-2">
          {/* Logo details */}
          <div className="logo flex flex-col gap-5 pt-2">
            {/* Phoone Image */}
            <div className="relative h-[25px] w-[210px]">
              <Image
                alt="Phoone Logo"
                src="https://quickstep007.myshopify.com/cdn/shop/files/logo_74cea665-41e6-4e29-a95a-56ceb67bb81e_344x48.png?v=1702468281"
                fill
                className="object-contain"
              />
            </div>
            <p> Phoone incorporate in January 2012 from Kuala-Lumpur.</p>

            {/* Social media links */}
            <ul className="flex gap-3 text-darkGray">
              <li>
                <Link href="/">
                  <Instagram className="orange-hover" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Facebook className="orange-hover" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Tiktok className="orange-hover" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <X className="orange-hover" />
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  <Youtube className="orange-hover" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="info">
            <h5 className="mb-5 font-[500] uppercase">Information</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="orange-hover" href="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  Need Help?
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="links">
            <h5 className="mb-5 font-[500] uppercase">Quick Links</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="orange-hover" href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="orange-hover" href="/">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="contact">
            <h5 className="mb-5 font-[500] uppercase">Contact Info</h5>
            <ul className="flex flex-col gap-3">
              <li> Address: 007th St, Demo, NY 69 </li>
              <li> Phone: +1-203-456-7890 </li>
              <li> Email: loremipsum@gmail.com </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - Copyright and Credit Cards */}
        <div className="mt-[7rem] flex justify-between s:flex-col s:items-center s:justify-center s:gap-[1.5rem] font-[500]">
          <p>Copyright © Phoone All Right Reserved.</p>

          <ul className="flex gap-1">
            {PAYMENT_METHODS_SVGS.map(svg => (
              <li key={svg.name}>{svg.component}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
