import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'
import { Link } from 'react-router-dom'
import ProductItems from './ProductItems'

const BestSellers = () => {
  const { products } = useContext(ShopContext)
  const [bestSellers, setbestSellers] = useState([])




  useEffect(() => {
    const bestProduct = products.filter(item => (item.bestSeller));
    setbestSellers(bestProduct.slice(0,5));
  }, [products])


  return (
    <div>
      <div className='text-center text-3xl '>
        <div className='mt-20'><Title text1={'BEST'} text2={'SELLERS'} /></div>
        <p className='text-gray-400 font-poppins text-lg text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti, lorem inpoks istam clotes.
        </p>
      </div>
      <div>
        <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-5 xm:grid-cols-1 gap-y-6 gap-4'>
          {bestSellers.map((item) => {
            return <ProductItems key={item._id} id={item._id} name={item.name} image={item.image[0]} price={item.price} />
          })}
        </div>

      </div>
    </div>
  )
}

export default BestSellers
