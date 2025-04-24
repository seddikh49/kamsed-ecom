import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../‏‏assets/frontend_assets/assets'
import RelatedProducts from '../componets/RelatedProducts'
import { ShopContext } from '../context/shopContext'



const Product = () => {
  const {
    products,
    
  } = useContext(ShopContext)

  
  

  const [imageIndex, setimageIndex] = useState(0);
  const { productId } = useParams();
  const [product, setproduct] = useState(null);
  

  const getSingleProduct = async() => {
    const singleProduct = products.find((product) => product._id === productId);
    setproduct(singleProduct);

  
  }
  
  useEffect(() => {
      getSingleProduct();
  }, [products,product]);
  




  return product &&  (
    <div className='w-full max-h-max  flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xm:flex-col '>
 
      
      <div className='xl:w-1/2 lg:w-1/2 md:w-full  h-max  flex flex-col gap-10 items-end pr-10  '>
         <div className='flex flex-col items-end'> 
          <p>{product.name}</p>
          <h1>{product.price}</h1>
         </div>
         <form className='flex flex-col w-[600px] gap-5 items-end' action="">
          <div className='w-[600px] flex gap-5 '>
            <input className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 border-blue-500 rounded-[5px]' placeholder='الاسم الكامل' type="text" />
            <input className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 rounded-[5px]' type="number" id="age" name="age" min="1" max="100" placeholder=" رقم الهاتف" />
          </div>
          <div className='w-[600px] flex gap-5'>
            <select className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 rounded-[5px]' name="" id="">
               <option value="">الولاية</option>
            </select>
            <select className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 rounded-[5px]' name="" id="">
               <option value="">البلدية</option>
            </select>  
          </div>
         </form>
      </div>


      <div className='xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-2 justify-center  items-start'>
           <img src={product.image[imageIndex]} alt="" className='w-3/5' />  
           <div className='grid grid-cols-4 w-3/5 gap-2 '>
            {product.image.map((img,index)=>{
              return(
                <img key={index} onClick={()=> setimageIndex(index)} className='cursor-pointer'  src={img} alt="" />
              )
            })}
            </div> 
      </div>
    </div>

  )
}

export default Product


