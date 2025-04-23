import React, { useContext } from 'react'
import Title from '../componets/Title'
import CartTotal from '../componets/CartTotal'
import { assets } from '../‏‏assets/frontend_assets/assets'
import { useState } from 'react'
import { ShopContext } from '../context/shopContext'
const PlaceOrder = () => {

  const [method, setMethod] = useState('');
  const {navigate} = useContext(ShopContext)
  return (
    <div className='mt-20 min-w-max   flex xl:flex-row lg:flex-row sm:flex-col xm:flex-col lg:justify-center xl:justify-between w-full gap-10 '>
      <div className='xl:w-[40%] lg:w-1/2 sm:w-full md:w-full xm:w-full   '>
        <div className='w-full '>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='mt-10  w-full flex flex-col gap-5 '>
          <div className='flex max-w-full   gap-2 xm:text-[10px] xl:text-xl  '>
            <input type="text" placeholder='First name' className='border w-1/2  px-2     rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
            <input type="text" placeholder='Last name' className='border w-1/2  px-2     rounded-sm border-gray-300 py-2 font-bold font-poppins text-black/70' />
          </div>
          <div className='max-w-full xm:text-[10px] xl:text-xl'>
            <input type="email" placeholder='Email address' className='w-full px-2    border rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
          </div>
          <div className='max-w-full xm:text-[10px] xl:text-xl'>
            <input type="text" placeholder='Street' className='w-full px-2     border rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
          </div>
          <div className='flex max-w-full gap-2 xm:text-[10px] xl:text-xl'>
            <input type="text" placeholder='City' className='border w-1/2  px-2    rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
            <input type="text" placeholder='State' className='border w-1/2   px-2     rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
          </div>
          <div className='flex max-w-full gap-2 xm:text-[10px] xl:text-xl'>
            <input type="number" placeholder='Zipcode' className='border w-1/2  px-2    rounded-sm border-gray-300 py-2 font-bold font-poppins text-black/70' />
            <input type="text" placeholder='Country' className='border w-1/2  px-2     rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
          </div>
          <div className='max-w-full xl:text-xl xm:text-[10px]'>
            <input type="number" placeholder='Phone' className='border px-2 w-full      rounded-sm border-gray-300 py-2  font-bold font-poppins text-black/70' />
          </div>
        </div>

      </div>

      <div className='xl:w-[40%] '>
        <div>
          <CartTotal />
        </div>
        <div className='mt-10 sm:w-1/3  min-w-max  '>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div  className='w-full xm:flex-col xl:flex-row lg:flex-row sm:flex-row  md:flex-row   flex gap-3 mt-10  '>
            <div onClick={()=> setMethod('stripe')} className='border border-gray-300 gap-3 cursor-pointer   min-w-max   flex  items-center justify-between p-2 px-3 ' >
              <p className={`min-w-3.5 h-3.5  rounded-full transition-all duration-200   border-gray-700 ${method === 'stripe' ? 'bg-green-600': ''}`}></p>
              <img className='h-5 ' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className='border border-gray-300 min-w-max cursor-pointer   flex gap-3 justify-between  items-center p-2 px-3' >
              <p className={`min-w-3.5 h-3.5  rounded-full transition-all duration-200   border-gray-700 ${method === 'razorpay' ? 'bg-green-600': ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=> setMethod('cod')} className='border    border-gray-300 gap-3 cursor-pointer    flex justify-between  items-center p-2 px-5 whitespace-nowrap'>
              <p className={`min-w-3.5 h-3.5 transition-all duration-200  rounded-full  border-gray-700 ${method === 'cod' ? 'bg-green-600': ''}`}></p>
              <p className='font-bold text-gray-500 font-poppins sm:text-[12px] md:text-[14px] xl:text-[15px] lg:text-[12px] '>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        <div className='mt-7 text-start '>
          <button onClick={()=> navigate('/orders')} className='bg-black px-10  py-3 font-[400] font-poppins text-amber-50'>PLACE ORDER</button>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
