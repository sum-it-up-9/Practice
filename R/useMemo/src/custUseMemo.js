import { useEffect, useRef } from "react";
export const CustuseMemo=(cb,depnds)=>{

    const refObj=useRef({});
    const ranOnce=useRef(false);
   // console.log(refObj.current);

    useEffect(()=>{
        return ()=>{
            console.log('cleanup called');
        }
    },[]);
   
    if(!ranOnce){
        refObj.current.prevdep=depnds;
        refObj.current.prevans=cb();
        ranOnce.current=true;
        return refObj.current.prevans;
    }

    if(JSON.stringify(depnds)!==JSON.stringify(refObj.current.prevdep)){
        refObj.current.prevans=cb();
        refObj.current.prevdep=depnds;
        return refObj.current.prevans;
    }

    
}