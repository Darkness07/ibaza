import { configureStore } from '@reduxjs/toolkit'
import buycarSlice from './buycar/buycar.slice'
export const store = configureStore({
  reducer: {
    buycar:buycarSlice
  },
})