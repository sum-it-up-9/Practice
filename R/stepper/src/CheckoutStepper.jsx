import React, { useEffect, useReducer, useRef, useState } from 'react'

const CheckoutStepper = ({stepsConfig=[]}) => {

  const refobj=useRef([]);


    const [currentStep,setCurrentStep]=useState(1);
    const [margins,setMargins]=useState({
      marginLeft:0,
      marginRight:0
    });

    const handleClick= ()=>{
      currentStep <= stepsConfig.length ? setCurrentStep(prev=>prev+1): null;    
      
    }
    function handlePer(){
      return ((currentStep-1)/(4-1))*100;
    }

    useEffect(()=>{
      //console.log(`${(refobj.current[3].offsetWidth/2)}`);
      
      setMargins({
        marginLeft:(refobj.current[0].offsetWidth)/2 ,
        marginRight:(refobj.current[3].offsetWidth)/2
      })
    },[refobj.current]);

    console.log(margins.marginLeft+margins.marginRight);

  return (
    <div>
      <div className="stepper" >
        {
            stepsConfig.map((step,index)=>{
                return (
                    <div key={step.name} ref={(el)=> refobj.current[index]=el} className='step'>
                        <div className={`step-number ${currentStep > index+1? 'complete' : ''} ${currentStep===index+1 ? 'active':''}  `}>{ currentStep>index+1 ? <span>&#x2713;</span> : index+1}</div>
                        <div className='step-name'>{step.name}</div>
                    </div>
                )
            })
        }

        <div className='range-box' style={{width:`calc(100% - ${margins.marginLeft+margins.marginRight}px)`,marginLeft:margins.marginLeft,marginRight:margins.marginRight}}>
          <div className='range-curr' style={{width:`${handlePer()}%`}}></div>
        </div>
      </div>

 
   


       

      <div className='text-info'>{currentStep<stepsConfig.length ? stepsConfig[currentStep-1].text : null} </div>

      <button className='btn' onClick={handleClick}>{currentStep === stepsConfig.length ? 'Finish' : 'Next'}</button>
    </div>
  )
}

export default CheckoutStepper
