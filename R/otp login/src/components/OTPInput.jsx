import React, { useEffect, useRef, useState } from 'react'

const OTPInput = ({length=4}) => {

    const [otp,setOTP]=useState(new Array(length).fill(''));
    console.log(otp);
    const refObj=useRef([]);

    useEffect(()=>{
        if(refObj.current.length>0){
            refObj.current[0].focus();
        }
    },[]);

    function handleInputChange(index,e){
       // console.log(typeof e.target.value) //string
        //It's important to note that isNaN tries to convert the argument to a number before checking if it's NaN. If the argument can be converted to a number, the function returns false; otherwise, it returns true.
        if(isNaN(e.target.value)) return;
        const number=e.target.value;
        const lastchar=number[number.length-1];
       
        if(number){
            const newOTP=[...otp];
            newOTP[index]=lastchar;
            setOTP(newOTP);

            //setOTP is an asynchronous function so it wont return the updated otp immediately
            const combinedstring=newOTP.join('');
          //  console.log(combinedstring);

            if( index<length-1 && refObj.current[index+1]){
                console.log('inside onchange')
                refObj.current[index+1].focus();
            }
        }
        
        
       
      
       
    }

    function handleKeyDown(index,e){
       // console.log(e.key);
        if(e.key==='Backspace' ){
            console.log(index);
            while(index>0 && refObj.current[index-1] && otp[index-1]!==''){
                console.log(otp[index-1],'otp');
                index--;
                
            }
            console.log('index',index);
           // console.log('inside keydown');
           if(index>=0 && otp[index-1]===''){
                refObj.current[index-1].focus();
           }
           
        }
    }

    function handleClick(index,e){
        let endpos=otp[index].length;
        console.log(endpos);
        refObj.current[index].setSelectionRange(endpos,endpos);
    }

  return (
    <div>
        {
            otp.map((item,index)=>{
                return <input
                        ref={(input)=>refObj.current[index]=input}
                        key={index} 
                        type="text"
                        value={item}
                        name={index}
                        onChange={(e)=>{handleInputChange(index,e)}}
                        onKeyDown={(e)=>{handleKeyDown(index,e)}}
                        onClick={(e)=>{handleClick(index,e)}}
                        className='otpInput'
                        />
            })
        }
    </div>
  )
}

export default OTPInput
