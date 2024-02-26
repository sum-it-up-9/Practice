import { useCallback, useMemo, useReducer, useState } from 'react'
import React from 'react';
import './App.css'

const compare = (prevProps,nextProps)=>{
  if (
    typeof prevProps !== 'object' ||
    prevProps === null ||
    typeof nextProps !== 'object' ||
    nextProps === null
  ) {
    console.log('in');
    return false;
  }
  console.log( typeof prevProps.handleClick);
  console.log(Object.is(prevProps,nextProps));
    return prevProps===nextProps;
}

const ChildComponent = React.memo(({ data,handledata }) => {
  // Child component logic
  console.log('ChildComponent rendered');
  return (
    <div>
      <div>Data Length: {data.length}</div>
      <button onClick={handledata}>update data</button>
    </div>
  )
});



export const  App=()=> {
  const [data, setData] = useState([1,2,3]);
  const [count, setCount] = useState(0);
  const [expensiveCalcount,setExpensiveCalCount]=useState(0);

  function reducer(state,action){
    if(action.type==='Increment'){
      console.log('called');
      return {...state,count:state.count+action.amount}
    } 
    if(action.type==='Decrement'){
      console.log('called');
      return {...state,count:state.count-action.amount}
    } 
    return state;
  }

  const [state,dispatch]=useReducer(reducer,{count:0});
 
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo (()=>{return expensiveCalculation(expensiveCalcount)},[expensiveCalcount]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handledata = useCallback(() =>{
    setData([]);
  },[data])

  function Increment(){
    setExpensiveCalCount(prev=>prev+1)
  }

  return (
    <>
      <div>
        <div>{count}</div>
     <h1>calculation: {calculation}</h1>
      <button onClick={handleClick}>Increment Count</button>

      <button onClick={Increment}>Increment Expensive cal Count</button>
      <div>{state.count}</div>
    <button onClick={()=>{dispatch({type:'Increment',amount:5})}}>Increment usereducer count</button>
    <button onClick={()=>{dispatch({type:'Decrement',amount:5})}}>Decrement usereducer count</button>
      <ChildComponent data={data} handledata={handledata}/>
    </div>
    </>
  )
}



export default App


