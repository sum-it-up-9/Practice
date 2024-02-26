import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import './App.css';


function App() {
 
  const dispatch=useDispatch();
  const counter = useSelector(state=>state.count.counter);
  return (
    <>
      <h1>Counter- {counter}</h1>
      <button onClick={()=>{dispatch({type:'increment',amount:5})}}>Increment</button>
      <button>Decrement</button>
    </>
  )
}

export default App
