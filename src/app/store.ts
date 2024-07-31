import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from './features/counter/counterSlice'
import cartSlice from './features/cart/cartSlice'
import  { productApiSlice } from './features/product/productSlice'
import { MovieApiSlice } from './features/Movie/Movies'


export const store = configureStore({
    ///root reducer
  reducer: {
    counter:counterSlice,
    cart:cartSlice,
    [productApiSlice.reducerPath]:productApiSlice.reducer,
    [MovieApiSlice.reducerPath]:MovieApiSlice.reducer
  },
  middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productApiSlice.middleware,MovieApiSlice.middleware)
})




export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()