import { AppDispatch } from "../store";
import { addToCart } from "../slices/userSlice"; // Action from the userSlice

// Function to handle adding items to the cart
export const addItemToCart = (dispatch: AppDispatch, productId: string, quantity: number, price: number) => {
  const cartItem = {
    productId,
    quantity,
    price,
  };
  
  // Dispatch action to add item to cart
  dispatch(addToCart(cartItem));
};