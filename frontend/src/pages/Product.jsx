import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../‏‏assets/frontend_assets/assets'
import RelatedProducts from '../componets/RelatedProducts'
import { ShopContext } from '../context/shopContext'



const Product = () => {
  const {
    products,
    
  } = useContext(ShopContext)

  
  

  const [image, setImage] = useState();
  const { productId } = useParams();
  const [product, setproduct] = useState(null);
  

  
  const getSingleProduct = async() => {
    const singleProduct = products.find((product) => product._id === productId);
    setproduct(singleProduct);
    console.log(product)
  
  }
  
  useEffect(() => {
      getSingleProduct();
  }, [products,product]);
  




  return  (
    <div className='w-full max-h-max  flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xm:flex-col items-center '>
      {/* <div className='xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-2 justify-center  items-center'>
           <img src={product.image[0]} alt="" className='w-2/3' />  
           <div className='grid grid-cols-4 w-2/3 gap-2 '>
            {product.image.map((img,index)=>{
              return(
                <img key={index}  src={img} alt="" />
              )
            })}
            </div> 
      </div> */}
      {product && (
        <h1> {product.name}</h1>
      )}
     
      <div className='xl:w-1/2 lg:w-1/2 md:w-full border-1 h-max '></div>
  
    </div>

  )
}

export default Product


