import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const selectCurrProduct = state => {
  const products = state.product.products
  const index = state.product.view_index
  return index > -1 ? products[index] : {}
}

export const fetchSharkNinja = createAsyncThunk('product/fetchSharkNinja', async ()=>{
  const response = await fetch('/data/Webdev_data2.json').then(data=>data.json())
  return response
})

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    view_index: -1,
  },
  reducers: {},
  extraReducers: {
    [fetchSharkNinja.fulfilled]: (state, action) =>{
      state.products = action.payload
      state.view_index = 0
    }
  }
})

export default productSlice.reducer