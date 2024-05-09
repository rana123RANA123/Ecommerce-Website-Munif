import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsState, productState } from "../../types/types";
import AxiosInstance from "../../utilities/AxiosInstance/AxiosInstance";

const initialState: ProductsState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await AxiosInstance.get(`/products`);
      const result: productState[] = response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default productSlice.reducer;
