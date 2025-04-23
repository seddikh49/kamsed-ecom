import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext';
import Title from '../componets/Title'
import { assets } from '../‏‏assets/frontend_assets/assets';
import CartTotal from '../componets/CartTotal'

const Card = () => {


  const { products, takeItem,updateCart,navigate } = useContext(ShopContext)
  const [cartsData, setCartsData] = useState([]);
  useEffect(() => {
    let array = []
    for (const items in takeItem) {
      for (const item in takeItem[items]) {
        if (takeItem[items][item] > 0) {
          array.push({
            _id: items,
            size: item,
            quantity: takeItem[items][item]
          })

        }
      }
    }
    setCartsData(array)
  }, [takeItem]);


  const Carts = () => {
    return (
      <div className='mt-5'>{cartsData.map((cart, index) => {
        let filterCarts = products.filter((product) => cart._id === product._id)
           return filterCarts.map((item)=> {
            return (
              <div className='' key={index}>
                    <div  className='flex  sm:flex-col xm:flex-col  md:flex-row xl:flex-row sm:items-start  xl:items-center justify-between gap-5 border-b border-t-1 border-gray-200 p-4'>
                     <div className='flex gap-5 '>
                     <img src={item.image[0]} className='w-32' alt="" />
                      <div className='flex flex-col gap-3'>
                        <h1>{item.name} </h1>
                        <div className='flex gap-5  items-center'>
                          <h1 className='font-bold text-gray-700'>${item.price}</h1>
                          <h1 className='border text-gray-700 font-[600] border-gray-300 bg-gray-100 px-3 py-1'>{cart.size} </h1>
                        </div>
                      </div>
                     </div>
                      <input onChange={(e)=> e.target.value === 0 || e.target.value === '' ? null : updateCart(cart._id,cart.size,Number(e.target.value))} min={1} defaultValue={cart.quantity} type="number"  className='bg-gray-200 w-20 p-2 h-10 border-1 border-gray-300'/>
                      <img src={assets.bin_icon} className='w-7 cursor-pointer ' onClick={()=> updateCart(cart._id,cart.size,0)} alt="" />
                    </div>
              </div>    
            ) 
           })
      })  
      }
      
      </div>
    )
  }

  return (

    <div className='border-t-1 border-gray-200 p-5'>
      <Title text1={'YOUR'} text2={'CART'} />
      {cartsData.length ? (
        <Carts />
      ) :
        <h1 className='text-5xl mt-20 font-bold text-gray-600 border border-gray-300 p-20'>Empty cart</h1>
      }
      <div className='w-1/2'>
      <CartTotal/>
      </div>
      <div className='mt-10'>
        <button onClick={()=> navigate('/place-order')} className='bg-black py-3 font-[400] font-poppins text-xl text-amber-50 px-6 xm:text-[14px]'>PROCEED TO CHECKOUT</button>       
      </div>
    </div>
  )
}

export default Card
