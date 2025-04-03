import Facebook from "../../svgs/social-media-svgs/facebook"
import X from "../../svgs/social-media-svgs/x"
import Pinterest from "../../svgs/social-media-svgs/pinterest"

import Link from "next/link"

function SocialMediaStrip() {
  return (
    <div className="flex items-center">
      <p className="mr-6">Share:</p>
      <div className="flex gap-3">
        <Link
          href="https://www.facebook.com/"
          className="rounded-md bg-[#3b5998] p-[0.6rem] text-white hover:opacity-75"
        >
          <Facebook width="18" height="18" />
        </Link>
        <Link
          href="https://x.com/?lang=en"
          className="rounded-md bg-darkGray p-[0.6rem] text-white hover:opacity-75"
        >
          <X width="18" height="18" />
        </Link>
        <Link
          href="https://www.pinterest.com/"
          className="rounded-md bg-[#bd081b] p-[0.6rem] text-white hover:opacity-80"
        >
          <Pinterest width="18" height="18" />
        </Link>
      </div>
    </div>
  )
}

export default SocialMediaStrip
