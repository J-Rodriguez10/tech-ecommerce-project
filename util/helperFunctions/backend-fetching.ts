import { Filters } from "../interfaces/filters"
import { Product } from "../interfaces/product"

/***
 * Converts a Filters object into a URL query string for API requests, handling all
 * active filter fields.
 */
export function buildQueryString(filters: Filters) {
  const queryParams = new URLSearchParams()

  // Add filters to query string if they exist
  if (filters.name) queryParams.append("name", filters.name)
  // Convert tags to lowercase before appending them to the query string
  if (filters.tags.length) {
    queryParams.append(
      "tags",
      filters.tags.join(",")
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



/**
 * Fetch filtered products helper function.
 *
 * Makes a GET request to the backend `/api/products` endpoint, applying
 * all of the provided filters (search term, tags, stock status, price range,
 * pagination, etc.) as query parameters.
 *
 * @param filters - Complete filter state object containing:
 *   - name: search term
 *   - tags: array of tag strings
 *   - inStock: boolean for stock availability
 *   - priceRange: { min: number; max: number }
 *   - color, size, brand: arrays of strings
 *   - sortBy: sort order string
 *   - productsDisplayed: number of items per page
 *   - currentPage: page number to fetch
 *   - totalPages: (ignored on request, used for response handling)
 * @param setProducts - Callback to update the component's product list state
 * @param setTotalPages - Callback to update the component's pagination total pages
 */
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
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/products${queryString}`
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


/***
 * Retrieves a product by its ID from the backend and updates local state via a
 * provided setter.
 */
export async function fetchProductById(
  productId: string,
  setProduct: (product: Product) => void
) {
  try {
    // Make the API request to fetch the product by its ID
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/products/${productId}`);

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
