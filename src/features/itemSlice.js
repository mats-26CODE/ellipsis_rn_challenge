import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemDetails: {},
  itemLoading: "idle",
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    itemLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.itemLoading === "idle") {
        state.itemLoading = "pending";
      }
    },
    updateItem(state, action) {
      // if (state.itemLoading === "pending") {
      //   state.itemLoading = "idle";
      // }
      console.log("our item details in reducer", action.payload);
      state.itemDetails = action.payload;
    },
  },
});

export const { updateItem, itemLoading } = itemSlice.actions;
export const selectItem = (state) => state.item.itemDetails;

export default itemSlice.reducer;
