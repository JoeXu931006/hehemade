import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cakes: [],
};

const cakeSlice = createSlice({
  name: "cakeCart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cakes.push(action.payload);
    },
    removeCart: (state) => {
      state.cakes = [];
    },
  },
});

export const setCart = (state) => state.cakeCart;
export const { addCart, removeCart } = cakeSlice.actions;

export default cakeSlice.reducer;
