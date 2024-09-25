import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')):null,
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ProductSlice.actions

export default ProductSlice.reducer