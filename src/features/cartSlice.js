import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cart: [],
  descData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // cartItem: (state, action) => {

    //   console.log("action", action);
    //   state.cart = [...state.cart, action.payload];
    //   // state.cart = action.payload

    // },
    cartItem: (state, action) => {
      let data = { ...action.payload };
      data.uniqueId = Math.random();
      state.cart = [...state.cart, data];
      // dispatch(cartItem(data));

      // let itemInCart = action.payload;
      // console.log("itemInCart", itemInCart);
      // itemInCart.uniqueId = Math.random();
      // state.cart = state.cart.find((val) => {
      //   return val.uniqueId === itemInCart.uniqueId;
      // });
    },
    deleteItem: (state, action) => {
      let itemToDelete = action.payload;
      console.log("d", itemToDelete);
      state.cart = state.cart.filter((val) => {
        console.log("v", val);
        return val.uniqueId !== itemToDelete.uniqueId;
      });
    },

    itemList: (state, action) => {
      console.log("action2", action);
      state.items = [action.payload];
    },

    descriptData: (state, action) => {
      let data = action.payload;

      state.descData = data;
      console.log("data", state.descData);
    },
  },
});

export const { cartItem, deleteItem, itemList, descriptData } =
  cartSlice.actions;

export default cartSlice.reducer;
