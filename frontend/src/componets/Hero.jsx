import React from 'react'
import { assets } from '../‏‏assets/frontend_assets/assets'
import { FaShippingFast } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='flex xl:flex-row lg:flex-col xm:flex-col sm:flex-col w-full justify-center items-center  border border-gray-400 '>
       <div className='xl:w-1/2 lg:w-full sm:w-full xm:w-full  '>
             <img src={assets.cashOnDelivery} className='xl:w-full lg:w-full h-full object-cover' alt="" />
        </div> 
        <div className='xl:w-1/2  py-10 flex  xm:w-full sm:w-full  lg:1/2 justify-center  items-center'>
          <div className=' flex xm:flex-col  lg:flex-col gap-8   sm:flex-col '>
          <div className='flex justify-center items-center gap-2    '>
          <FaShippingFast className='xl:text-5xl xm:text-2xl  text-gray-600' />
          <h1 className='xl:text-4xl lg:text-5xl md:text-5xl inline sm:text-4xl xm:text-2xl  text-gray-600 font-bold whitespace-nowrap '> توصيل سريع خلال 3 أيام </h1>

          </div>

            <div className='flex  gap-2 items-center'>
                <p className='h-[2px] w-11 bg-gray-400'></p>
                <p className=' text-2xl text-gray-600 font-bold whitespace-nowrap '>المنتجات الأكثر مبيعا</p>
            </div>
             <h1 className='xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl  text-gray-600 font-bold'>الدفع عند الاستلام</h1>
             <div className='flex items-center gap-2'>
                <p className='text-2xl text-gray-600 font-bold'> تسوق الآن</p>
                <p className='h-[2px] w-11 bg-gray-400'></p>
             </div>
        </div>
        </div>
          
    </div>
  )
}

export default Hero
