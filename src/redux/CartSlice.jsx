import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] // { id, name, price, image, category, quantity }
};

const findItem = (state, id) => state.items.find((i) => i.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // REQUIRED NAME
    addItem: (state, action) => {
      const product = action.payload;
      const existing = findItem(state, product.id);
      if (!existing) {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // REQUIRED NAME
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },

    // REQUIRED NAME
    // payload: { id, quantity }
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = findItem(state, id);
      if (!existing) return;

      existing.quantity = quantity;

      // optional cleanup if quantity goes to 0
      if (existing.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalAmount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
