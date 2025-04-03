import { useState } from "react"

function StorageOptions({ storageSize }: { storageSize: number[] }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)

  const handleSizeClick = (size: number) => {
    setSelectedSize(size) // Update the selected size when a user clicks on a size
  }

  return (
    <div className="flex items-center gap-4">
      <p>Storage:</p>
      {storageSize && storageSize.length > 0 ? (
        storageSize.map(size => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)} // Trigger the handleSizeClick when the user clicks
            className={`rounded-lg border-[1px] px-2 py-1 text-[1.1rem] font-[500] ${
              size === selectedSize ? "border-darkGray" : "border-[#ababab]"
            }`}
          >
            {size}GB
          </button>
        ))
      ) : (
        <p className="text-gray-500">N/A</p>
      )}
    </div>
  )
}

export default StorageOptions
