import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//thsi store will be provided all over our application 
const appStore = configureStore({
  reducer: { cart: cartReducer },
});

export default appStore;
