import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import { FaRectangleList } from "react-icons/fa6";




const SideBar = () => {
  return (
    <div className='w-full border border-gray-300 border-t-0 min-h-screen'>
        <div className=' text-[15px] flex flex-col   py-6 gap-4 '>
             <NavLink to={'/add'} className='flex rounded-l px-3 py-2 bg-  border items-center gap-3 border-gray-300 border-r-0'>
             <IoMdAddCircle className='sm:text-1xl xm:text-1xl xl:text-4xl lg:text-4xl md:text-4xl ' />

                 <p className=' sm:hidden sm:text-[12px] xl:text-xl md:text-md xl:block lg:block md:block  xm:hidden font-sans font-bold'>إضافة منتج
                 </p>
             </NavLink>
             <NavLink to={'/list'} className='flex w-full  font-sans font-bolds   rounded-l px-3 py-2 border   items-center justify-start gap-3 border-gray-300 border-r-0'>
             <FaRectangleList className='sm:text-1xl xm:text-1xl xl:text-4xl lg:text-4xl md:text-4xl' />
             <p className='sm:hidden  sm:text-[12px]  xl:text-xl md:text-md xl:block lg:block md:block xm:hidden font-bold '>قائمة المنتجات</p>
             </NavLink>
             <NavLink to={'/orders'} className='flex rounded-l px-3 py-2 w-full  font-sans font-bold    border   items-center gap-3 border-gray-300 border-r-0'>
                 <PiShoppingBagOpenFill className='sm:text-1xl xm:text-1xl xl:text-4xl lg:text-4xl md:text-4xl' />

                 <p className='sm:hidden  sm:text-[12px] xl:text-xl md:text-md xl:block lg:block md:block  xm:hidden font-bold '>الطلبات</p>
             </NavLink>
        </div>
 
        
      
    </div>
  )
}

export default SideBar
