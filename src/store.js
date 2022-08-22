import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice' //import our reducer

export default configureStore({
  reducer: {
    //add reducers here
    counter: counterReducer
  }
})
