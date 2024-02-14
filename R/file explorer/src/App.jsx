import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


function App(props) {
  //console.log(data);
  const [data,setData]=useState(props.data);
  const [isOpen,setIsOpen]=useState(false);
  const [isInputOpen, SetIsInputOpen]=useState(false);
  const [input,SetInput]=useState('');
  const [isfolder,Setisfolder]=useState(true);

  function handleClick(e){
    console.log('in ');
    e.stopPropagation();
    setIsOpen(prev=>!prev);
  }

  function AddInput(e,isfolder){
    SetIsInputOpen(prev=>!prev);
    Setisfolder(isfolder);
  }

  function AddToData(currData){
   
    currData.items.push({
      folderName:input,
      id:Math.random()*100,
      isFolder:isfolder,
      items:[]
    })
   
    //setData(data);
    //console.log(data,'da');
    SetIsInputOpen(prev=>!prev);
  }

  function handleKeyDown(e,data,isfolder){
    e.stopPropagation();
   // console.log(data,'dd');
    //console.log(e.key);
   console.log(e.target.value);
    SetInput(e.target.value);
    if(e.key==='Enter' && e.target.value){
      AddToData(data);
    }
  }



  return (
    <>
      <div className='container'>
        {
          data.isFolder ? (
            <div className='singleContainer'>
              <span  onClick={(e)=>{handleClick(e)}}>📁</span>
              
              <span className='single-folder'>{data.folderName}
                <span>
                  <button onClick={(e)=>{AddInput(e,true)}}>Folder +</button>
                  <button onClick={(e)=>{AddInput(e,false)}}>File +</button>
                </span>
              </span>

              {
                isInputOpen && <input type="text" onKeyDown={(e)=>{handleKeyDown(e,data)}}  autoFocus onBlur={()=>{SetIsInputOpen(false)}} />
              }


              {isOpen && (<div className='nested'>
                {data.items && data.items.map((item,index)=>{
                  return <App data={item}/>
                })}
              </div>)}
            </div>
          ) : 
          
          (<div>
            <span>📄</span>
            <span>{data.folderName}</span>
            <div className='nested'>
                {data.items && data.items.map((item,index)=>{
                  return <App data={item}/>
                })}
              </div>
          </div>)
        }
       
      </div>
    </>
  )
}

export default App
