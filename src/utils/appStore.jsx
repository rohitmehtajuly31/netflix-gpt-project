import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer directly

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the imported reducer
  },
});

export default appStore;
