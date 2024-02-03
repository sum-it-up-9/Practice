import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from './Home';
import Product from './Product';
import ProductList from './ProductList';
import BreadCrumbs from './BreadCrumbs';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <BreadCrumbs/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/products/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
