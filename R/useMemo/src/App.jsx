import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from  "react-router-dom";
import Home from './Home';
import Other from './Other';

function App() {
  


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/other" element={<Other/>} />
        </Routes>
     </BrowserRouter> 
       
    </>
  )
}

export default App
