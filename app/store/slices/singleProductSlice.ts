import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItem, singleState } from "../../types/types";
import AxiosInstance from "../../utilities/AxiosInstance/AxiosInstance";

const initialState: singleState = {
  data: null,
  loading: true,
  error: null,
};

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id: string) => {
    try {
      const response = await AxiosInstance.get(`/products/${id}`);
      const result: cartItem = response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default singleProductSlice.reducer;
