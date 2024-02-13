import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setproducts] = useState([]);
  const [pageNumber,setPageNumber]=useState(1);

  async function fetchProducts(){
    try{
      const res=await fetch('https://dummyjson.com/products?limit=100');
      const data=await res.json();
      if(data && data.products){
        setproducts(data.products);
      }
    
    }
    catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  function handleClick(index){
    console.log( index);
    setPageNumber(index);
  }
  function handlePrev(){
    pageNumber>1 ? setPageNumber((prev=>prev-1)) : null;
  }

  function handleNext(){
    pageNumber<products.length/3 ? setPageNumber((prev=>prev+1)) : null
  }

  return (
    <>
      <div className='product-container'>
        {
          products.length>0 && products.slice((pageNumber*3 -3),(pageNumber*3 -3)+3).map((product,index)=>{
            return (
            
            <div key={index} className='product'>
              <div><img src={product.thumbnail} alt={product.title} /></div>
              <div>{product.title}</div>
            </div>
            )
          })
        }
      </div>

      <div>
        <span className='ptr' onClick={handlePrev}>◀️</span>
        <div className='numbers'>
          {
           new Array(products.length/3).fill(0).map((_,index)=>{
              return <span  onClick={()=>{handleClick(index+1)}} className={`number ${index+1===pageNumber? 'active' : ''} `} key={index}>{index+1}</span>
            })
          }
        </div>
          
          <span className='ptr' onClick={handleNext}>▶️</span>
      </div>
    </>
  )
}

export default App
