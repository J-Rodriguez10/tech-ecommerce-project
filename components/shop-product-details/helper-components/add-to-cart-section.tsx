import Button from "@/components/button";
import Heart from "@/components/svgs/heart";


interface AddToCartSectionProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart: () => void;
  showCartNotification: boolean;
}

const AddToCartSection: React.FC<AddToCartSectionProps> = ({
  quantity,
  setQuantity,
  handleAddToCart,
  showCartNotification,
}) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Quantity selection */}
      <div className="flex items-center gap-5">
        <p>Quantity:</p>
        <div className="rounded-md border-[1px] border-darkGray">
          <button
            className="h-[43px] px-4 font-[500]"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            className="h-[43px] w-12 !text-center"
            readOnly
          />
          <button
            className="h-[43px] px-4 font-[500]"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart and wishlist buttons */}
      <div className="flex gap-5">
        <Button
          onClick={handleAddToCart}
          className="max-w-[400px] !px-[4.2rem] !py-[0.8rem]"
        >
          Add To Cart
        </Button>
        <button className="default-transition rounded-[50%] border-[1px] border-[#d8d8d8] bg-white p-[1rem] hover:bg-darkGray hover:text-white">
          <Heart />
        </button>
      </div>

      {/* Cart notification (success message) */}
      {showCartNotification && (
        <div className="mt-4 p-4 bg-green-500 text-white rounded-md text-center">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default AddToCartSection;
