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
      return response.data // Return user data and token to the reducer
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



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: state => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.error = null
    }
  },
  extraReducers: builder => {
    builder

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
          state.user = action.payload.user
          state.token = action.payload.token
          state.isAuthenticated = true
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
          state.user = action.payload.user // Store the full user object
          state.token = action.payload.token
          state.isAuthenticated = true
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
export const { logout } = userSlice.actions
export default userSlice.reducer
