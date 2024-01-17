import { createSlice } from "@reduxjs/toolkit";

const loadBasketFromLocalStorage = () => {
  const localStorageBasket = localStorage.getItem("basket");
  return localStorageBasket ? JSON.parse(localStorageBasket) : {
    items:[],
    totalPrice:0
  };
};

const saveBasketToLocalStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const calculateTotalPrice = (items) => {
    return items?.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  };
export const basketSlice = createSlice({
  name: "basket",
  initialState: loadBasketFromLocalStorage(),
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.items?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        console.log("şalsda",state);
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.items);
      saveBasketToLocalStorage(state);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items?.filter((item) => item.id !== action.payload.id); 
      state.totalPrice = calculateTotalPrice(state.items);
      saveBasketToLocalStorage(state);
    },
    clearBasket: (state) => {
      state.items = [];
      state.totalPrice = 0;
      saveBasketToLocalStorage(state);
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice = calculateTotalPrice(state.items);
        saveBasketToLocalStorage(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items?.filter(
            (item) => item.id !== existingItem.id
          );
        }
        state.totalPrice = calculateTotalPrice(state.items);
        saveBasketToLocalStorage(state);
      }
    },
  },
});
export const { addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
