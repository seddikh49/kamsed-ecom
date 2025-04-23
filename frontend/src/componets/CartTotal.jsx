import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { assets } from '../‏‏assets/frontend_assets/assets'

const CartTotal = () => {

    const { getCartAmount, currency, delivery_fee } = useContext(ShopContext)
    return (
        <div className='mt-20 w-full'>
            <div className='flex flex-col gap-5 w-full'>
                <div>
                    <Title text1={"CART"} text2={"TOTALS"} />
                </div>
                <div className='flex p-2 justify-between xl:w-full  xm:flex-col sm:w-full  sm:flex-col xl:flex-row md:flex-row  border-b border-gray-200 font-poppins text-xl'>
                    <p>Subtotal</p>
                    <p className='flex'><span>{currency} </span> &nbsp;<span>{getCartAmount()}.00</span> </p>
                </div>
                <div className='flex p-2 justify-between xl:w-full  sm:w-full border-b border-gray-200 font-poppins md:flex-row  text-xl xm:flex-col sm:flex-col xl:flex-row'>
                    <p>Shipping Fee</p>
                    <p className='flex '> <span>{currency}</span>&nbsp;<span>{delivery_fee}</span> </p>
                </div>
                <div className='flex p-2 justify-between xl:w-full border-b sm:w-full border-gray-200 font-bold md:flex-row font-poppins text-xl xm:flex-col sm:flex-col xl:flex-row '>
                    <p>Total</p>
                    <div className='flex'>
                        <span>{currency}</span>
                        <h1>{getCartAmount() > 0 ? getCartAmount() + delivery_fee : getCartAmount()}.00</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartTotal
