import { Filters } from "../interfaces/filters"
import { Product } from "../interfaces/product"

// Helper function to build query string based on filters from the redux filters state
export function buildQueryString(filters: Filters) {
  const queryParams = new URLSearchParams()

  // Add filters to query string if they exist
  if (filters.name) queryParams.append("name", filters.name)
  // Convert tags to lowercase before appending them to the query string
  if (filters.tags.length) {
    queryParams.append(
      "tags",
      filters.tags.map(tag => tag.toLowerCase()).join(",")
    )
  }
  if (filters.inStock !== undefined)
    queryParams.append("inStock", String(filters.inStock))

  // Handle priceRange, ensuring max is not null
  if (filters.priceRange) {
    queryParams.append("minPrice", String(filters.priceRange.min))
    // Only append maxPrice if it's not null
    if (filters.priceRange.max !== null) {
      queryParams.append("maxPrice", String(filters.priceRange.max))
    }
  }

  if (filters.color.length) queryParams.append("color", filters.color.join(","))
  if (filters.size.length) queryParams.append("size", filters.size.join(","))
  if (filters.brand.length) queryParams.append("brand", filters.brand.join(","))
  if (filters.sortBy) queryParams.append("sortBy", filters.sortBy)
  if (filters.productsDisplayed)
    queryParams.append("limit", String(filters.productsDisplayed))
  if (filters.currentPage)
    queryParams.append("page", String(filters.currentPage)) // Added currentPage to the query

  return `?${queryParams.toString()}`
}

// Fetch filtered products helper function
export async function fetchFilteredProducts(
  filters: Filters,
  setProducts: (products: Product[]) => void,
  setTotalPages: (totalPages: number) => void
) {
  try {
    // Build the query string based on the filters state
    const queryString = buildQueryString(filters)

    // Make the API request
    const response = await fetch(
      `http://localhost:4000/api/products${queryString}`
    )

    // Check for a successful response
    if (!response.ok) throw new Error("Failed to fetch products")

    // Parse the response
    const data = await response.json()

    // Update the state with the products and total pages
    setProducts(data.products)
    setTotalPages(data.totalPages)
  } catch (error) {
    console.error("Error fetching filtered products:", error)
  }
}

// Fetch a single product by ID
export async function fetchProductById(
  productId: string,
  setProduct: (product: Product) => void
) {
  try {
    // Make the API request to fetch the product by its ID
    const response = await fetch(`http://localhost:4000/api/products/${productId}`);

    // Check for a successful response
    if (!response.ok) throw new Error("Failed to fetch product");

    // Parse the response
    const productData = await response.json();

    // Update the state with the product data
    setProduct(productData);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}
