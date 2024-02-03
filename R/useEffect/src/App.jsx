import { useState,useEffect } from 'react'

import './App.css';
import { customUseEffect } from './customUseEffect';

function App() {
  
  const [count,setCount]=useState(0);


  customUseEffect(()=>{
    console.log('inside useeffet');

    return ()=>{
      console.log('cleanup function')
    }
  },)

  /*
  this will run only once after initial render
  useEffect(()=>{
    console.log('inside useEffect');
  },[]);
  */

  /*
  this will run at every render
  useEffect(()=>{
    console.log('inside useEffect');
  });
  */

    /*
  this will run at first and after everytime count values changes it will excute
  useEffect(()=>{
    console.log('inside useEffect');
  },[count]);
  */

  return (
    <>
      <button onClick={()=>{setCount(prev=>prev+1)}}>increse</button>
    </>
  )
}

export default App
