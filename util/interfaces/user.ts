export interface CartItem {
  productId: string;  // MongoDB _id of the Product
  productImage: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface WishlistItem {
  productId: string;  // MongoDB _id of the Product
}

export interface User {
  _id: string; // MongoDB _id as string
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Assuming password is stored, though it should be hashed on the backend
  createdAt: string; // ISO string format date
  cart: CartItem[];
  wishlist: WishlistItem[];
}