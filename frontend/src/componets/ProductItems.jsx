import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id, name, image,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <div>
        <div className=''>
              <Link  to={`/product/${id}`} className=''>
                <img className='sm:w-full xm:w-full hover:scale-105 transition-all duration-300' src={image} alt="" />
                <p className=' font-md pt-4 text-md font-poppins'>{name} </p>
                <p className='text-lg font-bold font-poppins text-gray-700'>{currency}{price} </p>
              </Link>
      </div>
      
    </div>
  )
}

export default ProductItems
