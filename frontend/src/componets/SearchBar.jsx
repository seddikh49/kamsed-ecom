import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { assets } from '../‏‏assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

 


  const { search, setSearch, searchBar, setSearchBar } = useContext(ShopContext)
  return searchBar && (
    <>

      <div className='border-y-1  border-gray-200 w-full xl:px-10 sm:px-2 h-20 flex justify-center items-center  bg-gray-100'>
        <div className=' border border-gray-300 rounded-full lg:w-1/2 md:w-full   xl:w-1/2 sm:w-full mx-auto flex items-center px-5 h-2/3  '>
          <input placeholder='Search' onChange={(e)=> setSearch(e.target.value)} className='text-xl font-poppins flex-1 outline-0 h-full' type="text" name="" id="" />
          <img className='w-6 cursor-pointer' src={assets.search_icon} alt="" />
        </div>
        <img onClick={() => setSearchBar(false)} className='cursor-pointer xl:p-0 sm:p-5' src={assets.cross_icon} alt="" />
      </div>

    </>
  )
}

export default SearchBar
