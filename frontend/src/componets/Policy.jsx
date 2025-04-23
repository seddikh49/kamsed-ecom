import React from 'react'
import { assets } from '../‏‏assets/frontend_assets/assets'

const Policy = () => {
  return (
    <div>
      <div className='flex xl:flex-row flex-col lg:flex-row md:flex-row sm:flex-col justify-around items-center text-center py-25 gap-15 text-gray-400'>
        <div  className=''>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-bold font-poppins text-gray-600'>7 Days Return Policy</p>
            <p className='font-poppins'>We offer hassle free exchange policy</p>
        </div>
        <div className=''>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-bold font-poppins text-gray-600'>7 Days Return Policy</p>
            <p className='font-poppins'>We offer hassle free exchange policy</p>
        </div>

        <div className=' '>
            <img className='w-12 m-auto  mb-5' src={assets.support_img} alt="" />
            <p className='font-bold font-poppins text-gray-600'>7 Days Return Policy</p>
            <p className='font-poppins'>We offer hassle free exchange policy</p>
        </div>


      </div>
    </div>
  )
}

export default Policy
