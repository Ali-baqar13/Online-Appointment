import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {


  const [FormData,setFormData]=useState({
    email:'',

    password:''

  })
  const HandleInputChange=e=>{
    setFormData({...FormData, [e.target.name]:e.target.value})
  }


 

  return (
    <section className='px-5 lg:px-0'>



       <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10'>

          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'> Hello <span className='text-primaryColor'> WELCOME </span>Back ! </h3>

          <form action='' className='py-4 md:py-0'>

             <div className='mb-5'>


             <input type='email' placeholder='Email Address' name='email' value={FormData.email} onChange={HandleInputChange} className='w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md '></input>
              
              
              
        </div>  




        

             <div className='mb-5'>


             <input type='password' placeholder='password' name='password' value={FormData.password} onChange={HandleInputChange} className='w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md '></input>
              
              
              
        </div> 
        <div className='mt-7'>
          
          <button type='submit' className='btn w-full bg-primaryColor text-white text-[18px] rounded-lg'>Login</button>

        </div>
        <p className='mt-5 text-center text-textColor'> Donnot have Acount? <Link to="/register" className='text-primaryColor font-medium ml-1'>SignUp</Link></p>
            
            
          </form>


       </div>










    </section>
  )
}
