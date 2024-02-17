import React from 'react'
import fetchApi from './CustomHook';
const CustomFetchHook = () => {

    const {data,error}=fetchApi('https://dummyjson.com/products/1');

    console.log(data);
  return (
    <div>
      {
        data && (<div>{data.title}</div>)
      }
    </div>
  )
}

export default CustomFetchHook
