import { useEffect, useState } from "react";

const Home=({onComplete=()=>{}})=>{
    const [percentage,setPercentage]=useState(0);

    useEffect(()=>{
            //console.log('hello');
            const intervalID=setInterval(()=>{
                console.log(percentage);
                if(percentage<100){
                    setPercentage(prev=>prev+1);
                }
                else{
                    onComplete();
                    clearInterval(intervalID);
                }  
            },40);
            return () => clearInterval(intervalID);
    },[percentage]);

    return(
        <>
        <div className="container">
            <div style={{height:'30px' ,overflow:'hidden',width:'500px',border:'1px solid black', borderRadius:'20px'}}>
                <div style={{width:`${percentage}%`}} className="progress-bar">   
            </div>
            </div>
           
            <span style={{color:percentage>=50 ? "white":"black"}}>{percentage}%</span>
        </div>
        </>
    )
}
export default Home;

