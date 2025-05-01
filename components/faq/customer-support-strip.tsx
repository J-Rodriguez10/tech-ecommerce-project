import Headphones from "../svgs/headphones"
import Smile from "../svgs/smile"

/**
 * Renders a customer support section with badges displaying various support features. 
 * Each badge includes an icon, the feature name, and a brief explanation of how the 
 * feature benefits the customer. This section includes live chat and help desk support.
 */

interface CustomerSupportBadgeProps {
  Icon: React.ElementType // Represents the react SVG icon component that will be displayed
  feature: string // Represents the customer support feature
  explanation: string // Represents a more detailed explanation on what the website's customer support feature
}

function CustomerSupportBadge({
  Icon,
  feature,
  explanation
}: CustomerSupportBadgeProps) {
  return (
    <div className="flex h-[420px] flex-1 flex-col items-center justify-center gap-4 text-lightTextGray">
      {/* Icon */}
      <div
        className="rounded-[50%] border-[1px] border-gray-300 p-[2rem]"
        style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
      >
        <Icon width={60} height={60} />
      </div>

      {/* Customer support feature */}
      <h6 className="text-[1.1rem] font-[500] capitalize text-darkGray">
        {feature}
      </h6>

      {/* Feature explanation */}
      <p className="max-w-[430px] text-center">{explanation}</p>
    </div>
  )
}

/***
 * A strip of customer support badges
 */

function CustomerSupportStrip() {
  return (
    // Background
    <div className="bg-bgGray">
      {/* Centering container */}
      <div className="stick-cont flex gap-3 s:flex-col s:gap-[5rem] s:py-[5rem]">
        <CustomerSupportBadge
          Icon={Headphones}
          feature="Live chat support"
          explanation="Our live chat support is available 24/7 to assist you with any inquiries or issues in real time."
        />
        <CustomerSupportBadge
          Icon={Smile}
          feature="Help desk support"
          explanation="Get help through multiple channels, including email, phone, and ticket-based systems for efficient resolution."
        />
      </div>
    </div>
  )
}

export default CustomerSupportStrip
