import { configureStore } from '@reduxjs/toolkit';
import  basketReducer from './basketSlice';
import productReducer from './productSlice';
import filterReducer from './filterSlice';
const store = configureStore({
  reducer: {
    product:productReducer,
    basket:basketReducer,
    filter:filterReducer
  },
});

export default store;