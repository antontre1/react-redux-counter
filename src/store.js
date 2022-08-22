// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '.counterSlice'

// const configureStore = () => ({
//   reducer: {
//     counter: counterReducer
//   }
// })

// export default configureStore


import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice' //import our reducer

export default configureStore({
  reducer: {
     counter: counterReducer
  } //add reducers here
})
