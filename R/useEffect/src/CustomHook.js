import { useEffect,useState } from "react";
const fetchApi=(url='',options=null)=>{

    //console.log(url);
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);

    async function fetchData(url,options){
        try{
            console.log('inside',url);
            const res=await fetch(url);
            const data=await res.json();
            setData(data);
        }catch(e){
            setError(e);
        }
       
    }

    useEffect(()=>{
        fetchData(url,options);
    },[]);

    return {data,error};
}

export default fetchApi;