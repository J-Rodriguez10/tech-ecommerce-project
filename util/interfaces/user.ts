export interface CartItem {
  productId: string;   // Product ID
  productImage: string; // Product image URL
  productName: string;  // Product name
  price: number;        // Product price
  quantity: number;     // Quantity of the product
}
export interface WishlistItem {
  product: string;  // The product ID (ObjectId type in MongoDB, which is a string in the frontend)
}

export interface Order {
  product: string;  // The product ID (ObjectId type in MongoDB, which is a string in the frontend)
  quantity: number;
  price: number;
  orderStatus: string; // Default value: 'pending'
  createdAt: string; // Date in ISO string format
}

export interface User {
  _id: string;  // The user ID (ObjectId in MongoDB, string in frontend)
  firstName: string;
  lastName: string;
  email: string;
  password: string;  // This is hashed, so you won't need to store plain text password on the frontend
  cart: CartItem[];  // Array of items in the user's cart
  wishlist: WishlistItem[];  // Array of wishlist items
  orders: Order[];  // Array of orders
  createdAt: string;  // Date when the user was created (ISO string format)
}