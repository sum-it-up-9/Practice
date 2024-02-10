import React, { useState } from 'react'

const Home = () => {
  const [data,setData]=useState(
    {fname:'',lname:'',select:'',checked:false,radio:''}
  )

  function handlechange(e){
    const {name,type,value,checked}=e.target;
    //console.log(e.target.name,e.target.type,e.target.value,checked);
    setData((prevData)=>{
      return {...prevData,[name]: type==='checkbox'? checked :value};
    });
    console.log(data);
  }

  function handleSubmit(e){
    e.preventDefault();
  }


  return (
    <div>
      {JSON.stringify(data)}
      this is home page
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input onChange={handlechange} type="text" id='fname' name='fname' value={data.fname} />

        </div>
       
       <div>
        <label htmlFor="lname">Lname</label>
        <input onChange={handlechange} type="text" id='lname' name='lname' value={data.lname} />
       </div>
       

       <div>
        <select name="select" id="" onChange={handlechange}> 
          <option value="car">car</option>
          <option value="ball">ball</option>
          <option value="zareen">zareen</option>
        </select>
        
        <div>
          <input type="checkbox" name='checked' checked={data.checked} onChange={handlechange}/> box

        </div>

        <div>
          html<input  onChange={handlechange}  type="radio" name='radio' value="html" />
          js<input onChange={handlechange}  type="radio" name='radio' value="js" />
        </div>
        
         </div>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home