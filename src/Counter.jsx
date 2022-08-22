import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './counterSlice'


const Counter = () => {
  const count = useSelector(state => state.counter.value)
  // in the slice, the name property as 'counter' is given
  // and the initialState with a 'value' property
  // thus to read the data we need useSelector to return the state.counter.value

  const dispatch = useDispatch()
  // get the dispatch function to dispatch our actions

  return (
    <div>
      <button onClick={() => dispatch(increase()) }>
        Increase
      </button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrease())}>
        Decrease
      </button>
    </div>
  )
}


export default Counter
