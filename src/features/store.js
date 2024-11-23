// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";

// Import your slices (reducers) here
// For example:
// import userReducer from "@/features/userSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    // user: userReducer, // Example
  },
});

export default store;
