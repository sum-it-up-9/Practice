import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:3,
      inProgress:false,
      text:'third',
    },
    { 
      id:4,
      inProgress:false,
      text:'fourth',
    },
    {
      id:1,
      inProgress:false,
      text:'first',
    }
  ]);


  const [searchText,setSearchText]=useState('');

  const handleSubmit=()=>{
    if(!searchText) return;
    const task={
      id:Date.now(),
      inProgress:false,
      text:searchText,
    }
  //  console.log('in');
    setTasks([...tasks,task]);
    setSearchText('');
  }

  function AddToProgressList(e,task){
    const newtasks=tasks.map((item,index)=>{
      if(item.id===task.id){
        item.inProgress=true;
      }
      return item;
    })
    setTasks(newtasks);
  }

  function AddToList(e,task){
    const newtasks=tasks.map((item,index)=>{
      if(item.id===task.id){
        item.inProgress=false;
      }
      return item;
    })
    setTasks(newtasks);
  }

  return (
    <>
     <div>
      <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
      <button onClick={handleSubmit}>+</button>
     </div>

    <h1>Current List</h1>
     {
      tasks.map((task,index)=>{
        return   !task.inProgress &&
          <div key={task.id}>
            <div style={{marginTop:'20px',display:'flex',gap:'10px'}}>
              <div >{task.text}</div>
              <div><button onClick={(e)=>{AddToProgressList(e,task)}}>AddToProgressList</button></div>
            </div>
          
          </div>
        
      })
     }

    <h1>In progress List</h1>
     {
       tasks.map((task,index)=>{
          return task.inProgress &&   <div style={{marginTop:'20px',display:'flex',gap:'10px'}}>
          <div >{task.text}</div>
          <div><button onClick={(e)=>{AddToList(e,task)}}>AddToList</button></div>
        </div>
        
       })
     }
    
    </>
  )
}

export default App
