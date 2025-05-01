import Instagram from "@/components/svgs/social-media-svgs/instagram"
import Image from "next/image"

export interface IgPictureSliderItemProps {
  post: string
  pictureUrl: string
}

/**
 *  Displays an Instagram-style image with a hover overlay and icon
 *  for use in sliders.
 */

function IgPictureSliderItem({ post, pictureUrl }: IgPictureSliderItemProps) {
  return (
    <div className="group px-3 py-4">
      <div className="relative h-[220px] xs:!max-h-[60vw] xs:!min-h-[60vw] s:!max-h-[100px] m:min-h-[250px] l:h-[160px]">
        {/* Hover overlay */}
        <div className="absolute top-0 z-[10] flex h-full w-full items-center justify-center bg-[#333333af] text-white opacity-0 duration-500 ease-in-out group-hover:opacity-100">
          <Instagram />
        </div>

        <Image src={pictureUrl} alt={post} fill className="object-cover" />
      </div>
    </div>
  )
}

export default IgPictureSliderItem
