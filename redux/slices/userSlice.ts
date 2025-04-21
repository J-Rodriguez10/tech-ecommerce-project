/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from "@/util/interfaces/user"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

export interface UserState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

// Initial state
const initialState: UserState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
}

// Thunk for registering a user
export const registerUser = createAsyncThunk(
  "user/register", // Action type
  async (
    userData: {
      firstName: string
      lastName: string
      email: string
      password: string
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        userData
      )
      // Log the response from the backend
      console.log("Backend response after registration:", response.data)

      return response.data // This will now return the full user object and token
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Registration failed")
    }
  }
)

// Thunk for logging in a user
// Thunk for logging in a user
export const loginUser = createAsyncThunk(
  "user/login",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        userData
      )
      return response.data // This will now include the full user object
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Login failed")
    }
  }
)

// Thunk for adding a product to the cart
export const addToCart = createAsyncThunk(
  "user/addToCart",
  async (
    {
      productId,
      quantity,
      actionType
    }: {
      productId: string
      quantity?: number
      actionType: "UPDATE" | "INCREMENT" // actionType added
    },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as { user: UserState }
    const token = state.user.token

    console.log("In the Add to cart THUNK - ", {
      productId,
      quantity,
      actionType
    })

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/cart",
        { productId, quantity, actionType }, // Send actionType along with productId and quantity
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Backend response after adding to cart:", response.data.cart) // Log the updated cart
      return response.data.cart // Return the updated cart from the backend
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to add product to cart"
      )
    }
  }
)

// Thunk for removing a product from the cart
export const deleteFromCart = createAsyncThunk(
  "user/deleteFromCart",
  async (
    productId: string, // Ensure that productId is passed as a string for deletion
    { getState, rejectWithValue }
  ) => {
    const state = getState() as { user: UserState }
    const token = state.user.token

    // Debug: Log the current state and the productId that we are going to delete
    console.log("State before deletion:", state)
    console.log("Deleting productId:", productId) // Ensure it's a string

    try {
      // Make the API call to remove the product from the cart
      const response = await axios.delete(
        `http://localhost:4000/api/users/cart/${productId}`, // ProductId will be used as string in the URL
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      // Debug: Log the response from the backend
      console.log("Backend response after product removal:", response.data.cart)

      return response.data.cart // Assuming the backend returns the updated cart
    } catch (error: any) {
      // Log the error if the request fails
      console.error("Error during cart deletion:", error)
      return rejectWithValue(
        error.response?.data || "Failed to remove product from cart"
      )
    }
  }
)

// Thunk for clearing the cart
export const clearCart = createAsyncThunk(
  "user/clearCart",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as { user: UserState }
    const token = state.user.token

    try {
      const response = await axios.delete(
        "http://localhost:4000/api/users/cart", // Endpoint to clear the cart
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log("Backend response after clearing cart:", response.data.cart) // Log the updated cart
      return response.data.cart // Return the empty cart
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to clear cart")
    }
  }
)

// Thunk for adding a product to the wishlist
export const addToWishlist = createAsyncThunk(
  "user/addToWishlist",
  async (productId: string, { getState, rejectWithValue }) => {
    const state = getState() as { user: UserState }
    const token = state.user.token // Extract the user's token from the state

    console.log("In the Add to Wishlist THUNK - Product ID:", productId)

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/wishlist", // POST request to your wishlist API
        { productId }, // Sending productId to the server
        {
          headers: {
            Authorization: `Bearer ${token}` // Adding authorization header with the token
          }
        }
      )

      console.log(
        "Backend response after adding to wishlist:",
        response.data.wishlist
      ) // Log the updated wishlist
      return response.data.wishlist // Return the updated wishlist from the backend
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to add product to wishlist"
      )
    }
  }
)



// Thunk for removing a product from the wishlist
export const deleteFromWishlist = createAsyncThunk(
  "user/deleteFromWishlist",
  async (productId: string, { getState, rejectWithValue }) => {
    const state = getState() as { user: UserState }
    const token = state.user.token // Extract the user's token from the state

    console.log("In the Delete from Wishlist THUNK - Product ID:", productId)

    try {
      const response = await axios.delete(
        `http://localhost:4000/api/users/wishlist/${productId}`, // DELETE request to your wishlist API
        {
          headers: {
            Authorization: `Bearer ${token}` // Adding authorization header with the token
          }
        }
      )

      console.log(
        "Backend response after deleting from wishlist:",
        response.data.wishlist
      ) // Log the updated wishlist
      return response.data.wishlist // Return the updated wishlist from the backend
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to remove product from wishlist"
      )
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    emptyCart: (state) => {
      if (state.user) {
        state.user.cart = [];  // Clear the cart in the user object
      }
    },
  },
  extraReducers: builder => {
    builder
      // Handle pending state for deleting from the wishlist
      .addCase(deleteFromWishlist.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when deleting from the wishlist is successful
      .addCase(
        deleteFromWishlist.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("Wishlist updated after deletion:", action.payload)
          // Update the wishlist in the user state with the updated wishlist returned from the backend
          if (state.isAuthenticated && state.user) {
            state.user.wishlist = action.payload
          }
          state.isLoading = false
        }
      )
      // Handle rejected state when deleting from the wishlist fails
      .addCase(deleteFromWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle pending state for adding to the wishlist
      .addCase(addToWishlist.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when adding to the wishlist is successful
      .addCase(addToWishlist.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("Wishlist updated successfully:", action.payload)
        // Update the wishlist in the user state with the updated wishlist returned from the backend
        if (state.isAuthenticated && state.user) {
          state.user.wishlist = action.payload
        }
        state.isLoading = false
      })
      // Handle rejected state when adding to the wishlist fails
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle pending state for clearing the cart
      .addCase(clearCart.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when clearing the cart is successful
      .addCase(clearCart.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("Entered the clearCart.fulfilled case")

        // Clear the cart in the Redux state
        if (state.isAuthenticated && state.user) {
          console.log("Clearing the cart in Redux state:", action.payload)
          state.user.cart = [] // Empty the cart
        } else {
          console.log("User is not authenticated or user state is null.")
        }

        state.isLoading = false
      })
      // Handle rejected state when clearing the cart fails
      .addCase(clearCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle pending state for deleting from the cart
      .addCase(deleteFromCart.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when deleting from the cart is successful
      .addCase(
        deleteFromCart.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false

          // Log the updated cart that comes from the action payload
          console.log(
            "POSSIBLE ISSUE - Updating cart in Redux state:",
            action.payload
          )

          if (state.user) {
            // Log the user state before updating the cart
            console.log(
              "Current user state before cart update:",
              state.user.cart
            )

            // Here we're making sure to update the cart with just the array from action.payload
            state.user.cart = action.payload // action.payload is expected to be the updated cart array

            // Log the user state after updating the cart
            console.log("Updated user state with new cart:", state.user.cart)
          }
        }
      )
      // Handle rejected state when deleting from the cart fails
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
    builder
      // Handle pending state for adding to the cart
      .addCase(addToCart.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when adding to the cart is successful
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("Entered the addToCart.fulfilled case")

        // Check if user is authenticated before updating the cart
        if (state.isAuthenticated && state.user) {
          console.log("Updating cart in Redux state:", action.payload) // Log the updated cart
          state.user.cart = action.payload // Update the cart in the state
        } else {
          console.log("User is not authenticated or user state is null.")
        }

        state.isLoading = false
      })
      // Handle rejected state when adding to the cart fails
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle pending state for registration
      .addCase(registerUser.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when registration is successful
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.isLoading = false
          state.user = action.payload.user // Store the full user object
          state.token = action.payload.token // Store the token
          state.isAuthenticated = true

          console.log("REGISTER - user:", action.payload.user) // Log the updated state
          console.log("Updated state after registration:", state) // Log the updated state
        }
      )
      // Handle rejected state when registration fails
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })

      // Handle pending state for login
      .addCase(loginUser.pending, state => {
        state.isLoading = true
        state.error = null
      })
      // Handle fulfilled state when login is successful
      // Handling in `extraReducers`
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.isLoading = false

          // Store the user object and token
          state.user = action.payload.user
          state.token = action.payload.token
          state.isAuthenticated = true

          console.log("LOG IN authentication:", state.isAuthenticated)

          console.log("LOG IN token", state.token)
          // Log the updated state after login
          console.log("Updated state after login:", state) // <-- This log will show the updated state
        }
      )
      // Handle rejected state when login fails
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

// Export actions and reducer
export const { logout , emptyCart} = userSlice.actions
export default userSlice.reducer
