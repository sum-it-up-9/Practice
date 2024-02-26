import { useState,useReducer } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const initiaState={
    count:0,
    num:0,
    loading:true,
  }

  function reducer(state,action){
    switch(action.type){
      case "increment":
        return {...state,count:state.count+1,payload:action.payload};
      
      case "decrement":
        return {...state,count: state.count>0 ? state.count-1 : 0};

      default:
        return state;
    }
  }

  //dipatch and action which calls the reducer
  const [state,dispatch]=useReducer(reducer,initiaState);


  return (
    <>
      <span style={{color:state.count>1 ? 'orange' : 'red'}}>hello</span>
      <button onClick={()=>{dispatch({type:'increment',payload:2})}}>increment</button>
      {state.count}
      <button onClick={()=>{dispatch({type:'decrement',payload:2})}}>decrement</button>
    </>
  )
}

export default App
