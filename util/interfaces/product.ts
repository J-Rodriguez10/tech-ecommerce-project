
// Represents the product structure that the backend will return
export type Product = {
  _id: string;
  name: string;
  description: string;
  productImages: string[]; // Array of image URLs
  rating: number;
  reviews: string[]; // Adjust according to your actual review data structure
  createdAt: string; // ISO string date
  category: string;
  subCategory: string;
  productType: string;
  price: number;
  stock: number;
  storageSize: number[]; // Array of storage sizes (e.g., [64, 128, 256])
  color: string[]; // Array of colors
  tags: string[]; // Array of tags
  brand: string;
  __v: number;
};
