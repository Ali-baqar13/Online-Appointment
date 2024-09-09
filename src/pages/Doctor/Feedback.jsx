import React, { useState } from 'react'
import avator from '../../assets/images/avatar-icon.png'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
const Feedback = () => {

  const [showFeedbackForm, setShowFeedbackForm]=useState('')
  return (
    <div>

        <div className='mb-[50px] '>
            <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All Reviews (272)</h4>
            <div className='flex justify-between gap-10 mb-[30px]'>

                <div className='flex flex-col'>
                  <div className='flex gap-5 '>
                    <figure className='w-10 h-10 rounded-ful'><img src={avator} className='w-full'></img></figure>
                   
                    <h5 className='text-primaryColor font-bold text-[16px] leading-9'>Najaf Ali</h5>
                    <p className='text-[14px] leading-9'>Sep-2024</p>
                    </div>
                    <div>
                    <p className=' text__para text-[15px] font-medium'>Good Service, Satisfied</p>
                    </div>

               
                
                
            </div>
            <div className='flex gap-1'>{[...Array(5).keys().map((_,index)=><AiFillStar key={index} color='#0067FF'/>)]}
                    
                    </div>
            </div>
            

        </div>
        { !showFeedbackForm && <div className='text-center'><button className='btn' onClick={()=>setShowFeedbackForm(true)}>Give FeedBack</button>
          
            
          
          </div>}
          {showFeedbackForm && <FeedbackForm/>}


    </div>
  )
}

export default Feedback