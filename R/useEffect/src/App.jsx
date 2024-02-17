import { useState,useEffect } from 'react'
import CustomFetchHook from './CustomFetchHook';
import './App.css';
import { customUseEffect } from './customUseEffect';

function App() {
  
  const [count,setCount]=useState(0);
  let [is,setIs]=useState(0);


  // customUseEffect(()=>{
  //   console.log('inside useeffet');

  //   return ()=>{
  //     console.log('cleanup function')
  //   }
  // },)

  // function handleClick(){
  //   is=is+1;
  //   console.log(is);
  // }

  console.log('render');

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


  // useEffect(()=>{
  //   console.log('in');
  //   return ()=>{
  //     console.log('inside return');
  //   }
  // },[count]);

  return (
    <>
      <button onClick={()=>{setCount(prev=>prev+1)}}>increse</button>
      {/* <button onClick={()=>{ handleClick()}}>click here</button> */}
      {/* <CustomFetchHook/> */}
    </>
  )
}

export default App
