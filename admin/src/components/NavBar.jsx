import React from 'react'
import {assets} from '../assets/assets'

const NavBar = ({setToken}) => {
  return (
    <div>
      <div className='flex justify-between items-center px-[4%] p-2'>
        <img className='max-w-44' src={assets.logo} alt="" />
        <button onClick={()=> setToken('')} className='bg-gray-600 px-7 py-2 rounded-full text-amber-50 font-poppins'>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
