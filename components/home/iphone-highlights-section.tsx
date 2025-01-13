import Image from "next/image"

// Props interface for Highlight component
interface HighlightProps {
  highlight: string // Description of the iPhone highlight
  iconUrl: string // URL for the icon image related to the highlight
  reversed?: boolean // If true, reverses the layout direction of the component
}

// Highlight component: Displays a single highlight with icon and description
function Highlight({ highlight, iconUrl, reversed = false }: HighlightProps) {
  // CSS classes for layout direction based on the reversed prop
  const directionStyles = reversed ? "flex-row-reverse text-left" : "text-right"

  return (
    <li
      className={`flex max-w-[300px] items-center gap-6 ${directionStyles} m:m-auto m:max-w-[200px] m:flex-col-reverse`}
    >
      {/* Highlight text */}
      <h6 className="upper max-w-[190px] text-[1.1rem] m:max-w-full m:!text-center">
        {highlight}
      </h6>

      {/* Icon container */}
      <div className="flex min-h-[6rem] min-w-[6rem] items-center justify-center rounded-[50%] bg-darkGray">
        <Image src={iconUrl} alt={highlight} width={48} height={48} />
      </div>
    </li>
  )
}

// Main section component for displaying iPhone highlights
function IPhoneHighlightsSection() {
  return (
    <section className="pb-[5.5rem] text-darkGray">
      {/* Section header */}
      <div className="pb-8 text-center">
        <h3 className="text-[2.5rem]">iPhone Highlights</h3>
        <p className="text-[1.2rem]">Check iPhone Forged in Titanium</p>
      </div>

      {/* Highlights and image container */}
      <div className="flex min-h-[450px] w-full overflow-hidden font-[500] m:flex-col">
        {/* Left highlights list */}
        <ul className="flex flex-1 flex-col items-end justify-evenly m:gap-[3.5rem]">
          <Highlight
            highlight="GAME CHANGING PROCESSOR"
            iconUrl="https://quickstep007.myshopify.com/cdn/shop/files/1_40666c47-8163-42ba-9cd2-b31cacf741a7_50x50.png?v=1701777751"
          />
          <Highlight
            highlight="MUSIC MADE MAGIC FOR HD AUDIO"
            iconUrl="https://quickstep007.myshopify.com/cdn/shop/files/2_ed904fbe-ffa2-42dd-a354-20b00a217265_50x50.png?v=1701778150"
          />
        </ul>

        {/* Center image */}
        <div className="relative flex-1 m:my-[3rem] m:min-h-[550px]">
          <Image
            src="https://quickstep007.myshopify.com/cdn/shop/files/Untitled-1_grande.png?v=1701776593"
            alt="Picture of an iPhone"
            fill
            className="object-contain"
          />
        </div>

        {/* Right highlights list */}
        <ul className="flex flex-1 flex-col justify-evenly m:gap-[3.5rem]">
          <Highlight
            highlight="POWERFUL 5.0 WIFI MORE SPEED"
            iconUrl="https://quickstep007.myshopify.com/cdn/shop/files/3_50x50.png?v=1701778427"
            reversed
          />
          <Highlight
            highlight="NEW ULTRA EDGES DESIGN FOR"
            iconUrl="https://quickstep007.myshopify.com/cdn/shop/files/edge_9743675f-4a7f-41dc-80b6-16f8c1c9cfc3_50x50.png?v=1701778449"
            reversed
          />
        </ul>
      </div>
    </section>
  )
}

export default IPhoneHighlightsSection
