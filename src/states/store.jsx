import { configureStore } from '@reduxjs/toolkit'
import arcadiaReducer from './arcadiaSlice'

export const store = configureStore({
  reducer: {
    arcadia: arcadiaReducer
  },
})