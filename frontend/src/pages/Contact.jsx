import React from 'react'
import Title from '../componets/Title'
import { assets } from '../‏‏assets/frontend_assets/assets'
import NewsLetter from '../componets/NewsLetter'

const Contact = () => {
  return (
    <div className='flex flex-col gap-10 items-center'>
      <div className='mt-20 text-center'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='flex lg:flex-row xl:flex-row md:flex-col sm:flex-col xm:flex-col justify-center lg:items-center xl:items-center gap-10 text-gray-500'>
        <img src={assets.contact_img} className=' xl:w-[480px] lg:w-[480px] md:w-full  sm:w-full  xm:w-full  ' alt="" />
        <div className='font-poppins flex flex-col gap-3  justify-center items-start'>
          <h1 className='text-2xl font-bold font-poppins text-gray-800'>Our Store</h1>
          <p>New City</p>
          <p>Djelfa - Algeria</p>
          <p>Tel :  +213 664 75 32 37 </p>
          <p>Email :  seddikh49@gmail.com</p>
          <p className='text-2xl font-bold font-poppins text-gray-800'>Careers at Sedever</p>
          <p>Learn more about us </p>
          <button className='border hover:bg-black/50 hover:text-amber-50 transition-all py-3 px-8 duration-500'>Explore Jobs</button>
        </div>   
      </div>
      <div className='mt-10'>
      <NewsLetter/>
      </div>
    </div>
  )
}

export default Contact
