import React from 'react'
import { ShopContext } from '../context/shopContext';
import { useContext,useEffect,useState } from 'react';
import Title from './Title.jsx';
import ProductItems from './ProductItems.jsx';

const LatestCollection = () => {
    const {products}= useContext(ShopContext);
    const [latestProducts, setlatestProducts] = useState([])
    useEffect(() => {
      setlatestProducts(products.slice(0,10))
    }, [products])
    
  
  return (
    <div className=''>
      <div className=' text-center xl:py-10 text-3xl mt-5'>
        <Title text1={"المنتجات"} text2={"أحدث"}/>
      </div>
      <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-5 xm:grid-cols-1 gap-y-6 gap-10'>
            {latestProducts.map((item)=>{
               return <ProductItems key={item._id} id={item._id}  name={item.name} image={item.image[0]} price={item.price} />
            })}
          </div>
    </div>
  )
}

export default LatestCollection

