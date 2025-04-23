import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[18%] border border-gray-300 border-t-0 min-h-screen'>
        <div className=' text-[15px] flex flex-col items-end py-6 gap-4'>
             <NavLink to={'/add'} className='flex rounded-l px-3 py-2 lg:w-[80%] font-poppins xl:w-[70%] sm:w-[50%]  border items-center gap-3 border-gray-300 border-r-0'>
                 <img className='w-5 h-5' src={assets.add_icon} alt="" />
                 <p className='sm:hidden xl:block lg:block md:hidden xm:hidden'>Add Items</p>
             </NavLink>
             <NavLink to={'/list'} className='flex lg:w-[80%] xl:w-[70%] sm:w-[50%] font-poppins   rounded-l px-3 py-2 border   items-center justify-start gap-3 border-gray-300 border-r-0'>
                 <img className='w-5 h-5' src={assets.order_icon} alt="" />
                 <p className='sm:hidden xl:block lg:block md:hidden xm:hidden '>List Items</p>
             </NavLink>
             <NavLink to={'/orders'} className='flex rounded-l px-3 py-2 lg:w-[80%] font-poppins xl:w-[70%] sm:w-[50%]   border   items-center gap-3 border-gray-300 border-r-0'>
                 <img className='w-5 h-5' src={assets.order_icon} alt="" />
                 <p className='sm:hidden xl:block lg:block md:hidden xm:hidden '>Orders</p>
             </NavLink>
        </div>
        
      
    </div>
  )
}

export default SideBar
