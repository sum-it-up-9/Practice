import { useState } from 'react'
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

const ChildComponent = React.memo(({ data }) => {
  // Child component logic
  console.log('ChildComponent rendered');
  return (
    <div>
      <div>Data Length: {data.length}</div>
    </div>
  )
},compare);



export const  App=()=> {
  const [data, setData] = useState([1,2,3]);
  const [count, setCount] = useState(0);

 
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <div>
        <div>{count}</div>
      
      <button onClick={handleClick}>Increment Count</button>
      <ChildComponent data={data} handleClick={handleClick}/>
    </div>
    </>
  )
}



export default App


