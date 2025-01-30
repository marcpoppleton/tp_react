import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './characters-slice'


export default configureStore({
  reducer: {
    character:characterReducer
  }
})