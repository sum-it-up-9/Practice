import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Home = () => {

    const refObj=useRef();
    //console.log(refObj);
    const [serachText,setSerachText]=useState('');
    const [suggestions,setSuggestions]=useState([]);
    const [selectedUsers,setSelectedUsers]=useState([]);
    const [selectedUserSet,setSelectedUserSet]=useState(new Set());
    const [currentUser,setCurrentUser]=useState(0);

    //async function returns promise object & if we dont return anything from async fn it will return promise object but with undefined in PromiseResult
    async function fetchUsers(){
        try{
            if(serachText.trim()===''){
                setSuggestions([]);
                return;
            } 
            const res=await fetch(`https://dummyjson.com/users/search?q=${serachText}`);
            const result=await res.json();
            setSuggestions(result?.users);
        }
        catch(e){
            console.log(e);
        }
       
    }

    useEffect(()=>{
       fetchUsers();
    },[serachText]);

    function handleClick(user){
      // //console.dir(e);
      // console.log(user);
      // if(e.target.nodeName ==='LI'){
      // }
      setSelectedUsers([...selectedUsers, user]);
      setSelectedUserSet(new Set([...selectedUserSet, user.email]));
      setSerachText('');
      setSuggestions([]);
      refObj.current.focus();
     
    }

    function removeUser(user){
      const newarr=selectedUsers.filter(userItem=> userItem.id!==user.id);
      setSelectedUsers(newarr);
      selectedUserSet.delete(user.email);
      setSelectedUserSet(selectedUserSet);
      console.log(selectedUserSet);
    }

    function handleKeyDown(e){
      console.log(e.key);
      if(e.key==='Backspace'){
        const length=selectedUsers.length;
        if(length>0){
          const lastUser=selectedUsers[length-1];
          
          removeUser(lastUser);
        }
      }
      else if(e.key==='ArrowUp'){
        currentUser>0 ? setCurrentUser(prev=>prev-1) : null;
      }
      else if(e.key==='ArrowDown'){
        currentUser<suggestions.length-1 ? setCurrentUser(prev=>prev+1) : null;
      }
      else if(e.key=='Enter'){
        handleClick(suggestions[currentUser]);
        setCurrentUser(0);
      }
    }

  return (
    <>
      <div>
        <div style={{display:'flex',border:'2px solid red',padding:'8px'}}>
          <div className=''>
            {
              selectedUsers.map((user,index)=>{
                return <span onClick={()=>{removeUser(user)}} style={{marginRight:'20px'}}>{user.email} ✖️</span>
              })
            }
          </div>
          <label htmlFor="srch"></label>
          <input ref={refObj} value={serachText} style={{border:'none'}}
            onChange={(e)=>{setSerachText(e.target.value)}}
            onKeyDown={(e)=>{handleKeyDown(e)}}
            type="text" id='srch'/>

        
        </div>
       
        <ul>
            {
                suggestions && suggestions.map((user,index)=>{
                    return  !selectedUserSet.has(user?.email) ?  <li className={index===currentUser? `active` : ``} onClick={(e)=>{handleClick(e,user)}} key={user?.id}>{user?.firstName}</li> : <></>
                })
            }
        </ul>
      </div>
    </>
  )
}

export default Home
