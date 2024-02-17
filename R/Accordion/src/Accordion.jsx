import { useEffect, useState } from 'react';

const Accordion = ({item,isChecked,CloseAll}) => {
    const [show, setShow] = useState(false);
    const [isOpen,setIsOpen]=useState(isChecked);
    function handleCheck(){
        CloseAll();
       setIsOpen(prev=>!prev);
        setShow(prev=>!prev);
        console.log(isChecked);
        isChecked=true;
        console.log(isChecked);
        //console.log(isChecked && show);
    }
    

    useEffect(()=>{
        setIsOpen(isChecked);
        console.log('inside',isChecked)
    },[isChecked]);

    //console.log(isOpen,isChecked );
  // console.log(show);
  return (
    <div>
      <div>
        <h2>{item.title}
        <button onClick={handleCheck}>{show ? '-' : '+'}</button></h2>
        {
           show && isOpen ? (<div>{item.content}</div>) :<></>
        }
      {
        
      }
      </div>
    </div>
  )
}

export default Accordion
