import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {RouterProvider,createBrowserRouter, createRoutesFromElements,Route, BrowserRouter, Routes} from "react-router-dom"
import Home from './Home.jsx';
import Layout from './Layout.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Ke from './Ke.jsx';
import Abc from './Abc.jsx';
import User from './User.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:id',
        element:<User/>
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'contact',
        element:<Contact/>
      },
    ]
  },
  {
    path:'/ke',
    element:<Ke/>,
    children:[
      {
        path:'abc',
        element:<Abc/>
      }
    ]
  }
])

const router2=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


