"use client"

import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

import Button from "../button"
import TableItem from "./table-item"
import { addToCart, clearCart, deleteFromCart } from "@/redux/slices/userSlice" 
import { AppDispatch, RootState } from "@/redux/store" 

/**
 * Displays the shopping cart in a table format, allowing users to update
 * quantities, remove items, clear the cart, or continue shopping.
 */

function InventoryTableDisplay() {

  const dispatch = useDispatch<AppDispatch>();
  // Extracting cart from redux user slice
  const cart = useSelector((state: RootState) => state.user.user?.cart); 

  // Handle quantity change
  const handleQuantityChange = (productId: string, quantity: number) => {
    console.log(
      "Before dispatch: Product ID:",
      productId,
      "Quantity:",
      quantity
    ); 

    if (quantity > 0) {
      // Log the dispatch call
      console.log("Dispatching addToCart with quantity:", quantity); 
      // Update cart item quantity
      dispatch(
        addToCart({
          productId: productId,
          quantity,
          actionType: "UPDATE"
        })
      ); 
    }
  };

  // Handle item removal
  const handleRemoveItem = (productId: string) => {
    dispatch(deleteFromCart(productId)); 
  };

  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
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
              key={item.productId}
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
