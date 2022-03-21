import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemDetails: {},
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    updateItem(state, action) {
      console.log("our item details in reducer", action.payload);
      state.itemDetails = action.payload;
    },
  },
});

export const { updateItem } = itemSlice.actions;
export const selectItem = (state) => state.item.itemDetails;

export default itemSlice.reducer;