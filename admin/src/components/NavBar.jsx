import React from 'react'
import {assets} from '../assets/assets'
import { FaAngleDoubleLeft } from "react-icons/fa";


const NavBar = ({setToken}) => {
  return (
    <div>
      <div className='flex justify-between items-center px-[4%] p-2'>
        <img className='max-w-44' src={assets.logo} alt="" />
        <button onClick={()=> setToken('')} className='bg-gray-600 px-7 py-2 rounded-full text-amber-50 font-poppins'>Logout</button>
        {/* <div className=' md:block  xm:right-0 sm:right-0 md:right-0 top-20 xl:hidden sm:block bg-gray-300 rounded-md'>
                <FaAngleDoubleLeft className='text-4xl' />
              </div> */}
      </div>
     
    </div>
  )
}

export default NavBar
