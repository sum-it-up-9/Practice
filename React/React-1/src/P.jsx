import React, { useState } from 'react'

const P = () => {

  function pr(str){
    let ans='';
    for(let value of str){
      if(!isNaN(parseInt(value))){
        ans+=value;
      }
    }
    return ans;
  }

  //console.log(pr('hey-1223'));

  const [count,setCount]=useState('');

  function handleChnage(e){
    let ans=pr(e.target.value);
    setCount(ans);  
  }

  return (
    <>
      <input type="text" onChange={handleChnage} value={count} />

    </>
  )
}

export default P;
