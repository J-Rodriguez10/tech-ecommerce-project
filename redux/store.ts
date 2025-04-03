import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import userReducer from "./slices/userSlice";  // Import user reducer

// Setting up the store with multiple reducers
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    user: userReducer,  // Add the user reducer to the store
  },
});

// TypeScript setup for Redux
export type RootState = ReturnType<typeof store.getState>;  // RootState type for state access
export type AppDispatch = typeof store.dispatch;  // AppDispatch type for dispatching actions