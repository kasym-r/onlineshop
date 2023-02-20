import { configureStore } from '@reduxjs/toolkit'

//Reducers
import productSlice from './productSlice'
import productsSlice from './productsSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    user: userSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
