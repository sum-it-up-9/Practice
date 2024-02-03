import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Home=()=>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    const fetchData = async ()=>{
        try{
            const res=await fetch('https://dummyjson.com/products');
            const result=await res.json();
           // console.log(typeof result);
            const sliceResult=result?.products?.slice(0,6);
            setData(sliceResult);
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
            {
                loading ? (<div>Loading....</div>) : (
                    <div className="product-container">
                        {   data.map((product,index)=>{
                                return  <Link to={`/products`} key={product.id}>
                                            <div style={{textAlign:'center'}}  >
                                                <div> 
                                                    <img height="300px" width="300px" src={product.images[0]} alt="img" />
                                                </div>
                                                <h1> {product.title} </h1>
                                                <h3>${product.price}</h3>
                                            </div>
                                        </Link>
                            })
                        }
                    </div>
                )
            }
        </>
    )
}
export default Home;