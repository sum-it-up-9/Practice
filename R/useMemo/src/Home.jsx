import { useMemo, useState,useRef } from "react";
import { CustuseMemo } from "./custUseMemo";
import {Link} from "react-router-dom";
const Home = () => {
    const [count, setCount] = useState(0)
    const [count1,setCount1]=useState(0);
    const expensiveCalculation=()=>{
        console.log('expensiveCalculation called')
        return count1*count1;
    }
   // const cachedAns=CustuseMemo(()=>{return expensiveCalculation()},[count1]);
  //  console.log(refObj.current);


   const cachedAns=useMemo(()=>{return expensiveCalculation()},[count1]);
    return (
        <div>
            <Link to="/other">Other</Link>
            <button>expensiveCalculation value depends on count 1 : {cachedAns}</button>
            <div></div>
            <button onClick={()=>{ setCount1(prev=>prev+1)}}>Increment count - 1</button>
            <button onClick={(e)=>{setCount1(prev=>prev-1)}}>Decrement count - 1 </button>
            <button onClick={(e)=>{setCount(prev=>prev+1)}}>Increment count - 0 </button>
          
            <div>count -{count}</div>
        </div>
    )
}

export default Home;
