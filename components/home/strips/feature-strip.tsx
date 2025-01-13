import Image from "next/image"

interface FeatureProps {
  icon: string | JSX.Element // icon can be a string (URL) or an SVG component
  featureExplanation: string
  className?: string
}

function Feature({ icon, featureExplanation, className = "" }: FeatureProps) {
  return (
    <li
      className={`flex h-full flex-1 items-center justify-center gap-[1rem] text-center text-darkGray ${className} l:flex-col`}
    >
      {/* rendering icon */}
      <div className="h-[2.5rem] w-[2.5rem]">
        {/* displaying either an Image url or a SVG component */}
        {typeof icon === "string" ? (
          <Image
            width={20}
            height={20}
            src={icon}
            alt={featureExplanation}
            className="h-full w-full object-contain"
          />
        ) : (
          icon
        )}
      </div>

      {/* feature explanation */}
      <p className="text-center text-[1rem] font-[500]">{featureExplanation}</p>
    </li>
  )
}
function FeatureStrip() {
  return (
    <div>
      <ul className="my-[4rem] flex w-full items-center justify-center py-[2rem] s:my-[2rem] s:flex-col s:gap-[1.75rem]">
        <Feature
          icon="https://quickstep007.myshopify.com/cdn/shop/files/worldwide-shipping_medium.png?v=1705503544"
          featureExplanation="Free Worldwide Shipping"
        />
        <Feature
          className="border-l-[1px] border-gray-300 m:border-none"
          icon="https://quickstep007.myshopify.com/cdn/shop/files/wallet_medium.png?v=1701931520"
          featureExplanation="Easy & Free 30 Day Return"
        />
        <Feature
          className="border-x-[1px] border-gray-300 m:border-none"
          icon="https://quickstep007.myshopify.com/cdn/shop/files/money_medium.png?v=1705503657"
          featureExplanation="Money Back Guarantee"
        />
        <Feature
          icon="https://quickstep007.myshopify.com/cdn/shop/files/support_medium.png?v=1705503562"
          featureExplanation="24/7 Excellent Support"
        />
      </ul>
    </div>
  )
}

export default FeatureStrip
