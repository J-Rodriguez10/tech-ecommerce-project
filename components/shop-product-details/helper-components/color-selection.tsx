import { useState } from "react"

function ColorSelection({ color }: { color: string[] }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const handleColorClick = (colorOption: string) => {
    setSelectedColor(colorOption) // Update the selected color when a user clicks
  }

  return (
    <div className="flex items-center gap-2">
      <p className="mr-4">Color: </p>
      {color.map(colorOption => (
        <div
          key={colorOption}
          className={`rounded-md border-[1px] p-[1px] ${
            colorOption === selectedColor
              ? "border-darkGray"
              : "border-gray-300"
          }`}
        >
          <button
            onClick={() => handleColorClick(colorOption)} // Trigger the handleColorClick when clicked
            className="rounded-md p-[1.15rem]"
            style={{ backgroundColor: colorOption }}
          ></button>
        </div>
      ))}
    </div>
  )
}

export default ColorSelection
