import { createSlice } from "@reduxjs/toolkit";

//creating slises and reducers for cart which we will use for different perposes like addItems in <RestaurentMenu/> component and cleareCart from <Cart/> component
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    cleareCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, cleareCart } = cartSlice.actions;
export default cartSlice.reducer;
