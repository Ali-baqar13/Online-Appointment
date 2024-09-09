import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
const FeedbackForm = () => {
    const [Rating , setRating]=useState(0)
    const [hover , sethover]=useState(0)
    const [Review , setReview]=useState('')
    const handleSubmitReview =async e=>{
        e.preventDefault()
        //........API..................
    }
  return (
    <>
    <form action='' >
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'> How would you like to rank our serviced mention below

        </h3>
        <div>
            {
                [...Array(5).keys()].map((_,index)=>{

                    index+=1;
                    
                    return <button key={index} type='button' 
                    onClick={()=>setRating(index) } onMouseEnter={()=>sethover(index+=1)} onDoubleClick={()=>{ setRating(0); sethover(0) }} onMouseLeave={()=>sethover(Rating+1)} className={`${index < (Rating && hover) ? 'text-yellowColor':'text-gray-400' } bg-transparent border-none outline-none text-[22px] cursor-pointer `
                    
                }><span><AiFillStar/></span></button>
                } )
            }
        </div>
        <div className='mt-[30px]'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold '>Show Your FeedBack Here</h3>

            <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md' placeholder='write you feedback' onChange={(e)=>setReview(e.target.value)} rows='5'></textarea>
            <button type='submit' onClick={handleSubmitReview} className='btn'>Add</button>
        </div>
    </form>
    
    </>
  )
}

export default FeedbackForm
