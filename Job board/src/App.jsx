import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currpage,setCurrpage]=useState(0);
  const [itemIds,setItemIds]=useState([]);
  const [jobs,setJobs]=useState([]);
  const [isFinish, setIsFinish]=useState(false);

  async function fetchIds(currpage){
    let ids=itemIds;
    let data=itemIds;
    if(itemIds.length===0){
      const res=await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
      data=await res.json();
      console.log(data);
      setItemIds(()=>{
        return data;
      });
    
      //fetchJobs(currpage);
    }
    return data.slice(currpage*6,(currpage*6)+6);
 
  }

  async function fetchJobs(currpage){
    
    const idsTofetch= await fetchIds(currpage);;
    console.log(idsTofetch);
    if(idsTofetch.length===0){
      setIsFinish(true);
      return;
    } 
    const data=await Promise.all(
      idsTofetch.map((itemId,index)=>{
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`);
      })
    );
    setJobs(prev=>[...prev,...data]);
    setCurrpage(prev=>prev+1);
  }

  useEffect(()=>{
    console.log('in');
    fetchJobs(currpage);
  },[]);

  return (
    <>
    {
      jobs.length>0 && jobs.map((job,index)=>{
        return <div key={index}>
          <div>{job.url} </div>
         
          <div>{new Date(job.time*1000).toLocaleString()}</div>
        </div>
      })
    }
      {!isFinish ? <button onClick={()=>{fetchJobs(currpage)}}>Load More jobs</button> : <></> }
    </>
  )
}

export default App
