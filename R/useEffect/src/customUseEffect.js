import { useRef } from "react";

export const customUseEffect=function(cb,dependecies){
    //we have 3 cases to handel

    //lets start with common case which is run once after initial render
    
    //we waNT TO PERSIST THE Values between renders so use useRef hook
    const refObj=useRef(true);
    const refToDependencies=useRef(dependecies);
   // console.log(dependecies.length);
   
    if(refObj.current){
        cb();
        refObj.current=false;
        return;
    }

    if(!dependecies){
        const returnFn=cb();
        if(typeof returnFn==='function') returnFn();
        return;
    }
   
    if(dependecies.length>0 && JSON.stringify(refToDependencies.current)!== JSON.stringify(dependecies)){
        const returnFn=cb();
        if(typeof returnFn==='function') returnFn();
        refToDependencies.current=dependecies;
    }
   
}

 