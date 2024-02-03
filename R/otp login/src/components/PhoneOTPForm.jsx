import { useState } from "react";
import OTPInput from "./OTPInput";

const PhoneOTPForm = () => {

    const [phoneNo,setPhoneNo]=useState("");
    const [shwoOTPField,setshwoOTPField]=useState(false);

    function handlechange(e){
        setPhoneNo(e.target.value);
       // console.log(phoneNo);
    }
    function handleSubmit(e){
        e.preventDefault();

        //phone validations
        const regex=/[^0-9]/g;
        if(phoneNo.length!==10 || regex.test(phoneNo)){
            alert('Number not valid')
        }
        setshwoOTPField(true);
    }
  return (
    <>
    { !shwoOTPField ?
        
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={phoneNo} name="" onChange={handlechange}  placeholder="enter phone no"/>
            <button>Submit</button>
        </form>
        </div> 
        
        : 
        
        <div>
            <p>Enter OTP</p>
            <OTPInput length={4} />
        </div>
    }
    </>
  )
}

export default PhoneOTPForm;
