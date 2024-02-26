import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import { actions } from './store/index.js';

function App() {
  const counter=useSelector(state=>state.counter.counter);
  const dispatch=useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{dispatch(actions.increment({amount:10}))}}>Increment</button>
    </>
  )
}

export default App
