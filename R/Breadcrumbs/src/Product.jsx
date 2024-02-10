import { useState,useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Product=()=>{
    const {pathname}=useLocation();
    const {id}=useParams();
   
    const [product,setProduct]=useState(null);

    const fetchProduct = async ()=>{
        try{
            const res=await fetch(`https://dummyjson.com/products/${id}`);
            const result=await res.json();
            setProduct(result);
           //console.log(result)
        }
        catch(error){
            console.log(error);
        }     
    }

    useEffect(()=>{
        fetchProduct();
    },[]);

    return (
        <>
            {
                product ? (
                        <div style={{textAlign:'center',marginTop:'40PX'}}>
                            <img height="500px" width="600px"  src={product.images[0]} alt="img" />
                            <div><h2>{product.title}</h2></div>
                            <div><h2>{product.price}</h2></div> 
                        </div>
                      
                   
                ) :(<div>Loading...</div>)
            }

           
        </>
    )
}
export default Product;