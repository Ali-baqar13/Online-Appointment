// import { StrictMode } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import Signup from './pages/Signup.jsx'
import Doctor from './pages/Doctor/Doctor.jsx'
import DoctorDetails from './pages/Doctor/DoctorDetails.jsx'
import {Login }from './pages/Login.jsx'

import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"home",
        element:<Home />
      },
      {
        path:"contact",
        element:<Contact />
      },
      ,
      {
        path:"doctor",
        element:<Doctor />
      },
      {
        path:"doctor/:doctorId",
        element:<DoctorDetails />
      },
      {
        path:'service',
        element:<Service />
      },
      {
        path:'register',
        element:<Signup />
      },
      {
        path:'login',
        element:<Login />
      }
    ]
  }
])


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <RouterProvider  router={router}/>
   
   
    
  </React.StrictMode>,
)
