import Image from "next/image"
import XSvg from "../svgs/x"

// Define the type for the props that will be passed into the TableItem component
interface TableItemProps {
  productId: string
  productImage: string
  productName: string
  price: number
  quantity: number
  onRemove: (productId: string) => void // Function to handle removing item from cart
  onQuantityChange: (productId: string, quantity: number) => void // Function to handle quantity changes
}

function TableItem({
  productId,
  productImage,
  productName,
  price,
  quantity,
  onRemove,
  onQuantityChange
}: TableItemProps) {
  const tdStyles =
    "border border-gray-300 text-center min-h-full m:block m:border-none m:my-2"

  // Handle manual input change for quantity
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, parseInt(e.target.value)); // Ensure quantity is at least 1
    if (!isNaN(newQuantity)) {
      onQuantityChange(productId, newQuantity); // Update the global state via parent
    }
  }

  // Handle increment/decrement
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(productId, newQuantity); // Update global state
  }

  const handleDecrement = () => {
    const newQuantity = Math.max(1, quantity - 1); // Ensure quantity is at least 1
    onQuantityChange(productId, newQuantity); // Update global state
  }

  return (
    <tr className="relative m:border m:border-gray-300 m:!py-[5rem]">
      {/* Product */}
      <td className={`${tdStyles} max-w-[150px] m:max-w-full m:pt-[3rem]`}>
        <div className="flex h-full items-center m:flex-col">
          {/* Product Image */}
          <div className="flex h-full min-w-[120px] items-center justify-center border-r-[1px] border-gray-300 py-[1.5rem] m:border-none">
            <span className="relative block h-[100px] w-[75px] m:h-[160px] m:w-[150px]">
              <Image
                src={productImage} // Use dynamic image URL
                fill
                alt={productName} // Use dynamic product name
                className="object-contain"
              />
            </span>
          </div>

          {/* Product Details */}
          <div className="w-[70%]">
            <p>{productName}</p> {/* Use dynamic product name */}
          </div>
        </div>
      </td>

      {/* Price */}
      <td className={`${tdStyles}`}>${price}</td> {/* Dynamic price */}

      {/* Quantity */}
      <td className={`${tdStyles}`}>
        <div className="flex items-center justify-center">
          <div className="flex max-w-[100px] border-b-[2px] border-[#ccc] pb-1">
            <button
              className="w-[30%] text-left text-[1.5rem]"
              onClick={handleDecrement}
            >
              -
            </button>

            <input
              type="number"
              className="w-[40%] text-center placeholder-darkGray"
              value={quantity}
              onChange={handleQuantityChange} // Call handleQuantityChange on input change
              min="1"
            />

            <button
              className="w-[30%] text-right text-[1.5rem]"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </td>

      {/* Total */}
      <td className={`${tdStyles} m:pb-[6rem]`}>
        ${(price * quantity).toFixed(2)}
      </td>{" "}
      {/* Dynamic total */}

      {/* Remove From Cart Button */}
      <td className={`${tdStyles} m:absolute m:right-0 m:top-0`}>
        <div className="flex w-full items-center justify-center">
          <button
            className="flex items-center justify-center rounded-full border-[2px] border-[#DEDEDE] p-2 text-lightTextGray"
            onClick={() => onRemove(productId)} // Call the onRemove function when clicked
          >
            <XSvg />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableItem;
