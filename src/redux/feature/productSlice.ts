import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the state type
export type ProductState = {
  data: any;
  pending: boolean;
  error: boolean;
};

const initialState: ProductState = {
  data: [],
  pending: false,
  error: false,
};

// Define the async thunk for data fetching
export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  }
);

// Define the async thunk for data fetching
export const getProductPage = createAsyncThunk(
  "products/getProductPage",
  async (limit: number) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}`
    );
    const data = await response.json();
    return data;
  }
);

// Define the slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});

export const productReducer = productsSlice.reducer;
