import { configureStore } from '@reduxjs/toolkit'
import weatherApi  from './Slices/weatherApiSlice'

export const store = configureStore({
  reducer: {
    weatherApiValue : weatherApi
  },
})