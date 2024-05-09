import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartState } from "../../types/types";

const initialState: cartState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.amounts += action.payload.amounts;
      } else {
        state.cart.push(action.payload);
      }
    },

    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    resetCart: (state) => {
      state.cart = [];
    },

    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.amounts = (item.amounts || 0) + 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.amounts && item.amounts > 1) {
        item.amounts -= 1;
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
