import React, { useRef,useEffect } from 'react'
import { NavLink ,Link} from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'


import {BiMenu} from 'react-icons/bi'

import logo from '../../assets/images/logo.png'

const navLinks=[
  {
    path:"/home",
    display:"Home"
  },

  {
    path:"/service",
    display:"Service"
  }
  ,
  {
    path:"/contact",
    display:"Contact"
  },
  {
    path:"/doctor",
    display:"find a Doctor"
  }
]

const Header = () => {

  const headRef=useRef(null)
  const menuRef=useRef(null)



const toggleMenu=()=>
  menuRef.current.classList.toggle('show__menu')














  const handelStickyHeader=()=>{

    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
        headRef.current.classList.add('sticky_header')
      }else{headRef.current.classList.remove('sticky_header')}
    })
  }

  useEffect(()=>{
    handelStickyHeader();
    return()=>{window.removeEventListener('scroll', handelStickyHeader)}







  })

  return (
    
  
     <header className="header flex items-center " ref={headRef} >
      <div className='container'>
        <div className='flex justify-between items-center'>
        <div>
        <img src={logo} alt="company's logo"/>

        </div>
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
          <ul className='flex items-center gap-[2.7rem]'>
            {
              navLinks.map((link,index)=>
              <li key={index}> 
              <NavLink to={link.path} className={({ isActive }) =>
    isActive
      ? 'text-primaryColor text-[16px] leading-7 font-[600]'
      : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
  }>{link.display}



              </NavLink>
              
              
              </li>
              
              )
            }



          </ul>
            

        </div>
        <div className='flex items-center gap-4'>
          <div className='hidden' onClick={toggleMenu}>
            <Link to='/'>
            <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>

              <img src={userImg} className='w-full rounded ' alt=''></img>

            </figure>

            
            </Link>
          </div >

          
            <Link to='/login' >
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]  flex items-center justift-center rounded-[50px]'>Login</button>
            </Link>
            <span className="md:hidden">
              <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
            </span>
         


        </div>
        
        </div>
          
        
       
          
      
             
      </div>


    </header>
  )
}

export default Header
