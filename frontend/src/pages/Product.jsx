import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../‏‏assets/frontend_assets/assets'
import RelatedProducts from '../componets/RelatedProducts'
import { ShopContext } from '../context/shopContext'



const Product = () => {
  const {
    products,
    addCart
  } = useContext(ShopContext)

  const [product, setProduct] = useState()
  const [changeBorder, setChangeBorder] = useState();

  const [image, setImage] = useState();
  const { productId } = useParams();

  const productData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProduct(item)
        setImage(item.image[0])
      }
    })
  }

  const setIdAndIndex = () => {
    if (changeBorder !== '') {
      addCart(product._id,product.sizes[changeBorder])
    }
  }


  useEffect(() => {
    productData()
  }, [product, productId,products]);





  return product && (
    <div>
      <div className='h-max flex gap-15 xl:flex-row xm:flex-col sm:flex-col'>
        <div className='xl:w-auto md:w-full sm:h-[50vh] xm:h-[50vh] md:h-[60vh]  xl:h-[70vh]  xl:gap-7 xm:gap-1 sm:gap-2 flex'>
          <div className=' h-full justify-between flex flex-col   items-center'>
            {product.image.map((img, index) => {
              return (
                <img onClick={() => setImage(img)} key={index} className='h-[24%] object-cover' src={img} alt="" />
              )
            })}
          </div>
          <div className='h-full '>
            <img className=' sm:w-full md:w-full h-full  object-cover' src={image} alt="" />
          </div>
        </div>
        <div className='xm:gap-5 flex flex-col sm:gap-5 xl:justify-between  '>
          <div>
            <h1 className='xl:text-4xl sm:text-2xl lg:text-3xl md:3xl xm:text-2xl  font-[400] font-poppins'>{product.name} </h1>
          </div>
          <div className='flex'>
            <img className='text-amber-200' src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img className='pr-2' src={assets.star_dull_icon} alt="" />
            <span className='font-[500]'>(122)</span>
          </div>
          <p className='text-3xl font-[600] font-poppins'>${product.price} </p>
          <p className='w-96 font-[500] font-poppin text-gray-800'>{product.description} </p>
          <h1 className='text-xl'>Select Size</h1>
          <div className='flex gap-2  '>
            {product.sizes.map((size, index) => {
              return <button
                onClick={() => setChangeBorder(index)}
                key={index}
                value={size}
                className={`bg-gray-200  font-poppins font-[400] text-xl cursor-pointer rounded-md px-4 py-2 ${changeBorder === index ? 'border-2 border-orange-200' : 'border-2 border-orange-200/0 '} `}>{size}</button>
            })}
          </div>
          <div>
            <button onClick={setIdAndIndex} className=' px-5 py-3 text-xl bg-black font-poppins font-[400] active:bg-black/80 text-amber-50'>ADD TO CART</button>
            <hr className='mt-10  text-gray-400 w-3/4' />
            <div className='mt-4 text-gray-700 flex-col flex font-light'>
              <p>100% Original product.</p>
              <p>Cash on delivery is a available on this product</p>
              <p>Easy return and exchnage policy within 7 days </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border font-bold border-gray-300 px-10 py-4 text-gray-700'>Description</b>
          <b className='border font-[500] border-gray-300 px-10 py-4 text-gray-700'>Review(122)</b>
        </div>
        <div className='p-10 border border-gray-300 text-gray-500 '>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum hic inventore aliquid dicta
            id odio doloremque tempora consequuntur ipsum obcaecati, id odio doloremque tempora consequuntur ipsum obcaecati,
            eveniet possimus nemo voluptates? Numquam itaque officiis vero dignissimos? possimus nemo voluptates? Numquam itaque officiis vero .</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum hic inventore aliquid dicta
            id odio doloremque tempora consequuntur ipsum obcaecati,
            eveniet possimus nemo voluptates? Numquam itaque officiis vero dignissimos.</p>
        </div>
      </div>
      <div>
        <RelatedProducts category={product.category} subCategory={product.subCategory} id={product._id} />
      </div>
    </div>

  )
}

export default Product


