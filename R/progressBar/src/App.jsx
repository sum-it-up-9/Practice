import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import Other from './Other';


function App() {
  const [count, setCount] = useState(0);
  const [loading,setLoading]=useState(true);
  function completed(){
    setLoading(false);
    alert('sucess');
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home onComplete={completed} />} />
          <Route path="/other"  element={<Other/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
