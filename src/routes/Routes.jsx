import React from 'react'

import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Service from '../pages/Service'
import {Login} from '../pages/Login'
import Doctor from '../pages/Doctor/Doctor'
import DoctorDetails from '../pages/Doctor/DoctorDetails'
import Signup from '../pages/Signup'
import { Router,Route, RouterProvider,createBrowserRouter } from 'react-router-dom'

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // children: [
      //   {
      //     path: "home",
      //     element: <Home />,
      //   },
        
        
      // ],
    },
        {
          path: "/doctor",
          element: <Doctor/>,
        
      },
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path:"/doctor/:id",
        element:<DoctorDetails />
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    
  ]);
  return (<>
    
     <RouterProvider router={router}/>
       
    
    </>
  )
}

export default Routes