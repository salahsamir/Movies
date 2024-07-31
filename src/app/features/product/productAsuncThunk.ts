
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IProduct } from '../../../Interfaces/IProduct'
import { axiosApi } from '../../../Config/axiosApi'






export interface productState {
    loading:boolean,
   products:IProduct[],
   error:string|undefined
  
}
const initialState: productState = {
    loading:true,
  products: [],
  error:undefined
}

 const fetchProduct=createAsyncThunk('product/fetchData',async(_,{rejectWithValue})=>{
    try {
        let {data}=await axiosApi.get('/products')
        return data
        
    } catch (error) {
        return rejectWithValue(error)
    }

})
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
})




export default productSlice.reducer
export { fetchProduct };
