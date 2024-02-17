import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Accordion from './Accordion';


const items = [
  { title: 'Step 1', content: 'Content for step 1' },
  { title: 'Step 2', content: 'Content for step 2' },
  { title: 'Step 3', content: 'Content for step 3' }
];

function App() {
  const [isChecked,setIsChecked]=useState(true);

  function handleCheckbox(e){
    setIsChecked(prev=>!prev);
  }

  function CloseAll(){
    setIsChecked(false);
  }

  return (
    <> 
    Is multiple allowed?
    <input type="checkbox" checked={isChecked} onChange={(e)=>{handleCheckbox(e)}} />
      {
        items.map((item,index)=>{
          return <Accordion key={index} CloseAll={CloseAll}  item={item} isChecked={isChecked} />
        })
      }
    </>
  )
}

export default App
