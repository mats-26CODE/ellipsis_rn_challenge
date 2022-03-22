import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //-> check if item is already added to cart and loop through by checking the item id -> index of item in array
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        //-> if item is already added, add quantity by 1
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        //-> increment the single item thats added to cart
        const tempItem = { ...action.payload, cartQuantity: 1 };

        state.cartItems.push(tempItem);
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cartItems;

export default cartSlice.reducer;
