import React from 'react'
import { assets } from '../‏‏assets/frontend_assets/assets'

const Policy = () => {
  return (
    <div>
      <div className='flex xl:flex-row flex-col lg:flex-row md:flex-row sm:flex-col justify-around items-center text-center py-25 gap-15 text-gray-400'>
        <div  className=''>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-bold font-cairo text-gray-600'>سياسة الإرجاع</p>
            <p className='font-cairo'>نوفر سياسة استبدال سهلة</p>
        </div>
        <div className=''>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-bold font-cairo text-gray-600'>سياسة الإرجاع</p>
            <p className='font-cairo'>نوفر سياسة استبدال سهلة</p>
        </div>

        <div className=' '>
            <img className='w-12 m-auto  mb-5' src={assets.support_img} alt="" />
            <p className='font-bold font-cairo text-gray-600'>سياسة الإرجاع</p>
            <p className='font-cairo'>نوفر سياسة استبدال سهلة</p>
        </div>


      </div>
    </div>
  )
}

export default Policy
