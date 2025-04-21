"use client"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store" // Import RootState for type checking
import Button from "../button"
import TableItem from "./table-item"
import { addToCart, clearCart, deleteFromCart } from "@/redux/slices/userSlice" // Assuming deleteFromCart handles item removal
import Link from "next/link"

function InventoryTableDisplay() {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.user.user?.cart); // Get cart items from Redux state

  // Handle quantity change (this could also be in redux action for cart update)
  const handleQuantityChange = (productId: string, quantity: number) => {
    console.log(
      "Before dispatch: Product ID:",
      productId,
      "Quantity:",
      quantity
    ); // Log the incoming values

    if (quantity > 0) {
      console.log("Dispatching addToCart with quantity:", quantity); // Log the dispatch call
      dispatch(
        addToCart({
          productId: productId,
          quantity,
          actionType: "UPDATE"
        })
      ); // Update cart item quantity
    }
  };

  // Handle item removal
  const handleRemoveItem = (productId: string) => {
    dispatch(deleteFromCart(productId)); // Call the action to remove item from the cart
  };

  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the action to clear the cart
  };

  return (
    <section className="mb-[8rem] mt-[6rem] overflow-x-auto border-b-[1px] border-[#dfdfdf] pb-8">
      <table className="min-w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead className="m:hidden">
          <tr>
            <th className="border py-4 font-[400] uppercase">Product</th>
            <th className="border py-4 font-[400] uppercase">Price</th>
            <th className="border py-4 font-[400] uppercase">Quantity</th>
            <th className="border py-4 font-[400] uppercase">Total</th>
            <th className="border py-4 font-[400] uppercase">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* Check if the cart has items */}
          {cart?.map(item => (
            <TableItem
              key={item.productId} // Unique key for each item
              productId={item.productId}
              productImage={item.productImage}
              productName={item.productName}
              price={item.price}
              quantity={item.quantity}
              onRemove={handleRemoveItem}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-8 flex w-full flex-wrap items-center justify-end gap-2 m:justify-center">
        <Link href="/shop">
          <Button className="min-w-[250px]">Continue Shopping</Button>
        </Link>
        
        <Button onClick={handleClearCart}>Clear Cart</Button> {/* Clear Cart button */}
      </div>
    </section>
  );
}

export default InventoryTableDisplay;
