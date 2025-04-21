// Interface for the product in the order
interface OrderProduct {
  productId: string; // Product ID (as a string)
  productName: string; // Product name
  quantity: number; // Quantity of the product in the order
  price: number; // Price per unit of the product
  productImage: string; // URL to the product image
}

// Interface for the shipping address
interface ShippingAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

// Main Order Interface
export interface Order {
  _id: string; // Unique identifier for the order
  userId: string; // ID of the user who placed the order
  products: OrderProduct[]; // List of products in the order
  totalPrice: number; // Total price of the order (sum of all products' price * quantity)
  orderStatus: "pending" | "paid" | "shipped" | "completed" | "cancelled"; // Order status
  shippingAddress: ShippingAddress; // Shipping address for the order
  paymentMethod: "creditCard" | "paypal" | "bankTransfer"; // Payment method used for the order
  createdAt: string; // Timestamp when the order was created
}
