import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ProductList = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

  const fetchData = async ()=>{
      try{
          const res=await fetch('https://dummyjson.com/products');
          const result=await res.json();
         // console.log(typeof result);
          const sliceResult=result?.products?.slice(0,20);
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
        <h1>This is Product Listing Page</h1>
          {
              loading ? (<div>Loading....</div>) : (
                  <div className="product-container">
                      {   data.map((product,index)=>{
                              return  <Link to={`/products/${product.id}`} key={product.id}>
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

export default ProductList;
