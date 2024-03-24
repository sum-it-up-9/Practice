import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [serachText, setSerachText] = useState('');
  const [res, setRes] = useState('');

  const handleChange=(e)=>{
    setSerachText(e.target.value);
    const {value}=e.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
    .then(res=>res.json())
    .then(json=>setRes(json.data.items));
    //console.log(e.target.value);
  }

  function debounce(cb){
    let timer;

    return function(...args){
      if(timer){
        clearTimeout(timer);
      }
      timer=setTimeout(()=>{
        cb.call(this,...args);
      },500);
    }
  }
  const optimizedDebounce=debounce(handleChange);

  return (
    <>
      <input type="text"  onChange={optimizedDebounce}/>
      
    </>
  )
}

export default App
