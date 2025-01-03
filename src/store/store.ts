import { configureStore } from "@reduxjs/toolkit";
import webReducer from "../pages/webSlice"; // Import the slice reducer

// Configure store with the reducer
const store = configureStore({
  reducer: {
    counter: webReducer, // Name the state slice
  },
});

export default store;
