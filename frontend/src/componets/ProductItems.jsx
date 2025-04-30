import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, name, image, price }) => {

  const { currency } = useContext(ShopContext)

  return (
    <div className='border-1  border-black/10 hover:scale-105 hover:border-orange-400 transition-all duration-300 p-2 rounded-md'>
      <Link to={`/product/${id}`} className=''>
        <img className='sm:w-full xm:w-full ' src={image} alt="" />
        <p className=' font-md pt-4 text-md font-poppins'>{name} </p>
        <div className='flex gap-2'>
          <h1>{currency}</h1>
          <p className='text-lg font-bold font-poppins text-gray-700'>{price} </p>
        </div>
        <div className='w-full flex justify-center items-center '>
          <button className='w-full bg-orange-400  text-white py-2 font-bold text-xl cursor-pointer rounded-b-md '>شراء المنتج</button>
        </div>
      </Link>
    </div>
  )
}

export default ProductItems
