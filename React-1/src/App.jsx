import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text,setText]=useState('');
  const renderCount=useRef(0);
  const  refToInput=useRef();

  console.log('render');

  useEffect(()=>{
    console.log('every render');
    renderCount.current=renderCount.current+1;
  });

  useEffect(()=>{
    console.log('once after inital render')
  },[]);

  useEffect(()=>{
    console.log('every time count value changes')
  },[count]);

  function focusInput (){
    refToInput.current.focus();
  }

  return (
    <>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
    <div>
      <button onClick={()=>{setCount(prev=>prev+1)}}>Increase Count</button>
      <b>{count}</b>
    </div>

    <div>Total Render Count: {renderCount.current}</div>

    <div style={{marginTop:'20px'}}>
        <input type="text" ref={refToInput} />
        <button onClick={focusInput }>focusInput </button>
    </div>
      
    </>
  )
}

export default App
