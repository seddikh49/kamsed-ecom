import React from 'react'

const Footer = () => {
    const date = new Date()

  return (
    <div className=''>
      <div className='xl:flex  xl:justify-around sm:justify-center items-start mt-20 mb-10 '>
        <div className='xl:max-w-1/2 sm:w-full mb-10 flex flex-col sm:flex-col  items-start  gap-5 justify-start '>
        <h1 className="text-4xl   font-extrabold font-poppins text-gray-600 ">
          SEDEVER<span className="text-orange-400 aspect-square">.</span>
        </h1>
      <p className='text-lg font-abold text-gray-600 font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, consequatur
         dignissimos consectetur commodi deleniti at beatae minus,
         sit amet consectetur adipisicing elit. Laudantium, consequatur.
         </p>
      </div>
      <div className='flex flex-col gap-5 mb-10'>
        <h1 className='text-2xl font-extrabold  text-gray-600 font-poppins'>COMPANY</h1>
        <ul>
            <li className='text-lg font-abold text-gray-600 font-poppins'>Home</li>
            <li className='text-lg font-abold text-gray-600 font-poppins'>About us</li>
            <li className='text-lg font-abold text-gray-600 font-poppins'>Delivery</li>
            <li className='text-lg font-abold text-gray-600 font-poppins'>Privacy</li>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-2xl font-extrabold text-gray-600 font-poppins '>GET IN TOUCH</h1>
        <ul>
            <li className='text-lg font-abold text-gray-600 font-poppins'>+213 664 75 32 37</li>
            <li className='text-lg font-abold text-gray-600 font-poppins'>contact@sedever.com</li>
        </ul>
      </div>
      </div>
      <div className='text-center  py-6 text-xl font-light text-gray-600 font-poppins border-gray-400  border-t-1'>Copyright {date.getFullYear()}@forever.com - All Right Reserved </div>
    </div>
  )
}

export default Footer
