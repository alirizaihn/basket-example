
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchProductsFromApi = async (id) => {
  try {
    const response = await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id ?? ''}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const products = await fetchProductsFromApi();
  
  return products;
});
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  const product = await fetchProductsFromApi(id);
  return product;
});

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;