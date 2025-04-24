import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../‏‏assets/frontend_assets/assets'
import RelatedProducts from '../componets/RelatedProducts'
import { ShopContext } from '../context/shopContext'
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";





const Product = () => {
  const {
    products,
    currency

  } = useContext(ShopContext)




  const [imageIndex, setimageIndex] = useState(0);
  const { productId } = useParams();
  const [product, setproduct] = useState(null);
  const [quantity, setQuantity] = useState(0);


  const getSingleProduct = async () => {
    const singleProduct = products.find((product) => product._id === productId);
    setproduct(singleProduct);


  }

  useEffect(() => {
    getSingleProduct();
  }, [products, product]);





  return product && (
    <div className='w-full max-h-max  flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xm:flex-col '>


      <div className='xl:w-1/2 lg:w-1/2 md:w-full  h-max  flex flex-col gap-10 items-end pr-10  '>
        <div className='flex flex-col items-end gap-2' >
          <p className='text-2xl font-bold'>{product.name}</p>
          <div className='flex text-2xl font-bold'>
            <h1>{currency} </h1>
            <h1>{product.price}  </h1>
          </div>
          <p>description</p>
        </div>
        <form className='flex flex-col xl:w-[550px] md:w-[500px] lg:w-[400px] gap-5 items-end' action="">
          <div className='xl:w-[550px] md:w-[500px] lg:w-[400px] flex gap-5 '>
            <input className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 border-blue-500 rounded-[5px]' type="number" id="age" min="1" max="100" placeholder=" رقم الهاتف" />
            <input className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 border-blue-500 rounded-[5px]' placeholder='الاسم الكامل' type="text" />
          </div>
          <div className='xl:w-[550px] md:w-[500px] lg:w-[400px] flex gap-5'>
            <select className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 border-blue-500 rounded-[5px]' name="" id="">
              <option value="">البلدية</option>
            </select>
            <select className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 border-blue-500 rounded-[5px]' name="" id="">
              <option value="">الولاية</option>
            </select>

          </div>
          <div className=' flex gap-5 justify-end '>
            <div className='flex  border-1'>
              <div onClick={()=> setQuantity(prev => prev + 1)} className='w-13 h-13 cursor-pointer bg-black text-white flex justify-center  items-center text-xl font-bold'>+</div>
              <div className='w-13 h-13 flex justify-center  items-center text-xl font-bold'>{quantity}</div>
              <div onClick={()=> setQuantity(prev => prev - 1)} className='w-13 h-13 cursor-pointer bg-black text-white flex justify-center  items-center text-xl font-bold'>- </div>
            </div>
            <h1 className=' py-3 font-bold text-end text-xl ' >:كمية المنتج </h1>
          </div>
          <div className='xl:w-[550px] flex gap-5'>
            <NavLink className={"w-full bg-green-500 py-3 text-white text-center font-bold text-xl rounded-sm flex items-center justify-center"}><FaWhatsapp className=' text-3xl pr-2' /> اضغط هنا للطلب عبر الواتساب </NavLink>
          </div>
          <div className='xl:w-[550px] flex gap-5'>
            <NavLink className={"w-full bg-blue-500 py-3 text-white text-center font-bold text-xl rounded-sm"}>اضغط هنا لتأكيد الطلب</NavLink>
          </div>

        </form>
      </div>


      <div className='xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-2 justify-center  items-start'>
        <img src={product.image[imageIndex]} alt="" className='w-3/5' />
        <div className='grid grid-cols-4 w-3/5 gap-2 '>
          {product.image.map((img, index) => {
            return (
              <img key={index} onClick={() => setimageIndex(index)} className='cursor-pointer' src={img} alt="" />
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Product


