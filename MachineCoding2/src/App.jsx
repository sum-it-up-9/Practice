import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pageNumber,setPageNumber]=useState(1);
  const [data,setData]=useState([]);
  const [loading,SetLoading]=useState(false);

  const url=`https://catfact.ninja/facts?page=${pageNumber}`;
  
  // const cityList=[pune,m];


  const fetchData = async ()=>{
    try{
      const res=await fetch(url);
      const data2=await res.json();
      console.log(data2);
      setData([...data,...data2.data]);
    }
    catch(e){
      console.log('error fetching data',e);
    }
    
  }
  function handleScroll(e){
    //console.log(document.documentElement.offsetHeight);
//     window.innerHeight + document.documentElement.scrollTop
// === document.documentElement.offsetHeight
    if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight){
        if(loading){
          return;
        }
        console.log('in');
        setPageNumber(prev=>prev+1);
        SetLoading(true);
    }
  }

  useEffect(()=>{
    fetchData();
  },[pageNumber]);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);
  
  return (
    <div style={{height:'110vh'}}>
     
      {
        data.map((item,index)=>{
          return (
            <div key={index} style={{marginBottom:'20px'}}>
              <div>{item.fact}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
