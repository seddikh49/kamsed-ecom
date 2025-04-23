import React from 'react'
import { assets } from '../‏‏assets/frontend_assets/assets'
import { FaShippingFast } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='flex xl:flex-row lg:flex-col xm:flex-col sm:flex-col w-full justify-center items-center  border border-gray-400 '>
       <div className='w-1/2 lg:w-full sm:w-full xm:w-full  '>
             <img src={assets.cashOnDelivery} className='xl:w-full lg:w-full h-full object-cover' alt="" />
        </div> 
        <div className='w-1/2 gap-10 sm:w-full py-10 flex flex-col  items-center'>
          <div className=' flex flex-col xl:flex-col lg:flex-col  sm:flex-col gap-5 '>
          <div className='flex gap-5'>
          <FaShippingFast className='text-5xl text-gray-600' />
          <h1 className='xl:text-4xl lg:text-5xl md:text-5xl sm:text-4xl mb-10 text-gray-600 font-bold'> توصيل سريع خلال 3 أيام </h1>

          </div>
            <div className='flex  gap-2 items-center'>
                <p className='h-[2px] w-11 bg-gray-400'></p>
                <p className=' text-2xl text-gray-600 font-bold'>المنتجات الأكثر مبيعا</p>
            </div>
             <h1 className='xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl mb-10 text-gray-600 font-bold'>الدفع عند الاستلام</h1>
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
