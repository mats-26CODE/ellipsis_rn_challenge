import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import itemReducer from "../features/itemSlice";

export const store = configureStore({
  reducer: {
    item: itemReducer,
    cart: cartReducer,
  },
});
