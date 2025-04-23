import React, { useContext } from 'react'
import Title from '../componets/Title'
import { ShopContext } from '../context/shopContext'
const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  
  return (
    <div className='border-t pt-10 border-gray-300 '>
      <div className='mt-10'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className='flex flex-col gap-5 py-5  '>
        {products.slice(1, 4).map((item, index) => {
          return (
            <div key={index} className='flex justify-between gap-5 py-4 border-t border-gray-300 w-full  '>
              <div className='flex gap-3 w-1/3 '>
              <div>
                <img src={item.image[0]} className='sm:w-20 xl:w-30' alt="" />
              </div>
              <div className='flex  gap-3 flex-col'>
              <div>
                  <h1 className='text-xl font-poppins font-bold text-gray-700'>{item.name} </h1>
                </div>
                <div className='flex gap-2 font-poppins'>
                  <h1>{currency}{item.price} </h1>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <div className='font-poppins flex gap-1'>
                  <h1>Date:</h1>
                   <h1 className='text-gray-500'>26-feb-2025</h1>
                </div>
              </div>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <p className='min-w-3 bg-green-600 h-3 rounded-full'></p>
                <h1 className='font-poppins  text-gray-700'>Ready to ship </h1>
              </div>
              <div className='flex justify-center items-center  '>
                <h1 className='border border-gray-400 px-8 py-2 font-poppins font-bold text-gray-700'>Track Order </h1>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Orders
