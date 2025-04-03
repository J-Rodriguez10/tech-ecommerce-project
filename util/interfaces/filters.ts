export interface Filters {
  name: string; // Represents when the individual search result
  tags: string[];  // Corrected from [string] to string[]
  inStock: boolean;
  priceRange: { min: number; max: number}; // `{min:0, max:1000}` was invalid syntax
  color: string[];
  size: string[];
  brand: string[];
  sortBy: string;
  productsDisplayed: number;
  currentPage: number;
  totalPages: number;
}