import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Lottie from 'lottie-react';
import axios from 'axios';
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


// import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Confirm = () => {
    const [animationData, setAnimationData] = useState(null);
    const [animationData2, setAnimationData2] = useState(null);

    const { nameConfirmation,
        currency,
        setfullName,
        fullName,
        setPhone,
        phone,
        setWilaya,
        wilaya,
        setCommune,
        commune,
        quantity,
        setQuantity,
        deliveryPrice,
        setdeliveryPrice,
        totalPrice,
        productName,
        settotalPrice } = useContext(ShopContext)

    useEffect(() => {
        axios.get('https://assets9.lottiefiles.com/packages/lf20_puciaact.json')
            .then(response => setAnimationData(response.data))
            .catch(error => console.error('خطأ في جلب الأنيميشن', error));

        axios.get('https://assets2.lottiefiles.com/packages/lf20_obhph3sh.json')
            .then(response => setAnimationData2(response.data))
            .catch(error => console.error('خطأ في جلب الأنيميشن', error));
    }, []);




    return (
        <div className=''>
            {fullName !== '' ? (
                <div>
                    <div className='flex justify-evenly xm:space-y-5 items-center md:flex-col sm:flex-col xm:flex-col xl:flex-row lg:flex-row'>
                        <div>
                            <Lottie animationData={animationData} loop={true} className='xl:w-[500px] lg:w-100 xm:w-full sm:w-full md:w-[500px]' />
                        </div>
                        <div className='lg:w-[450px] xl:w-[600px] md:w-full sm:w-full xm:w-full  text-end'>
                            <div className='absolute right-0 top-20'>
                                <Lottie animationData={animationData2} loop={true} className='w-100' />
                            </div>
                            <div className='flex justify-end gap-3'>
                                <h1 className='font-bold text-4xl pb-4 bg-amber-300'>{nameConfirmation} </h1>
                                <h1 className='font-bold text-4xl pb-4'> شكر جزيلا لك </h1>
                            </div>
                            <h2 className='xl:text-4xl lg:text-3xl md:text-xl font-bold pb-4'>على ثقتك بنا وعلى طلبك الكريم</h2>
                            <p className='xl:text-2xl lg:text-xl md:text-xl font-bold'>يسعدنا خدمتك، وسنتصل بك خلال مدة قصيرة لتأكيد تفاصيل الطلب والتأكد من تلبية جميع احتياجاتك.
                                .نحن دائمًا هنا لخدمتك ونتطلع إلى تقديم أفضل تجربة ممكنة</p>
                        </div>
                    </div>
                    <div className='bg-gray-100/50 rounded-t-md border-1  border-black/20 xl:w-1/2 lg:w-1/2 ml-auto mt-10 '>
                        <div className='flex justify-between items-center p-3 bg-amber-300'>
                            <FaCartShopping className='text-2xl' />
                            <h1 className='text-end  font-bold text-xl pb-2'>: تفاصيل الطلب </h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex  justify-between p-2'>
                                <p className=' text-end  whitespace-nowrap font-bold text-lg'>{productName}</p>
                                <h1 className='text-end font-bold text-lg'> : المنتج</h1>
                            </div>
                            <div>
                                <div className='flex gap-2 justify-between p-2 '>
                                    <div className='flex gap-2 font-bold'>
                                        <h1>ق</h1>
                                        <h1>{quantity} </h1>
                                    </div>
                                    <h1 className=' text-end  font-bold text-lg  '> : الكمية  </h1>
                                </div>
                            </div>

                            <div className='flex justify-between gap-2 font-bold text-lg p-2'>
                                <div className='flex gap-2'>
                                    <h1>{currency}</h1>
                                    <h1>{deliveryPrice}</h1>
                                </div>
                                <h1> : سعر التوصيل </h1>
                            </div>
                            <div className='flex justify-between gap-2 font-bold text-lg border-t-1 border-black/20 p-3'>
                                <div className='flex gap-2 '>
                                    <h1>{currency}</h1>
                                    <h1> {totalPrice} </h1>
                                </div>
                                <h1 className='text-xl'> : السعر الاجمالي </h1>
                            </div>
                        </div>
                    </div>
                </div>
            ) :
               
                <div className='flex justify-between items-center flex-col gap-8'>
                     <h1 className='xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl xm:text-4xl  '>أدخل معلومات الشراء</h1>
                     <NavLink className={'bg-amber-300 rounded-lg font-bold px-4 flex items-center justify-center h-13 text-xl'} to={"/collection"} >الذهاب الى صفحة المنتجات</NavLink>

                
                </div>
                 
                 }
             
        </div>
    )
}

export default Confirm




{/* <div className='flex justify-evenly xm:space-y-5 items-center md:flex-col sm:flex-col xm:flex-col xl:flex-row lg:flex-row'>
<div>
    <Lottie animationData={animationData} loop={true} className='xl:w-[500px] lg:w-100 xm:w-full sm:w-full md:w-[500px]' />
</div>
<div className='lg:w-[450px] xl:w-[600px] md:w-full sm:w-full xm:w-full  text-end'>
    <div className='absolute right-0 top-20'>
        <Lottie animationData={animationData2} loop={true} className='w-100' />
    </div>
    <div className='flex justify-end gap-3'>
        <h1 className='font-bold text-4xl pb-4 bg-amber-300'>{nameConfirmation} </h1>
        <h1 className='font-bold text-4xl pb-4'> شكر جزيلا لك </h1>
    </div>
    <h2 className='xl:text-4xl lg:text-3xl md:text-xl font-bold pb-4'>على ثقتك بنا وعلى طلبك الكريم</h2>
    <p className='xl:text-2xl lg:text-xl md:text-xl font-bold'>يسعدنا خدمتك، وسنتصل بك خلال مدة قصيرة لتأكيد تفاصيل الطلب والتأكد من تلبية جميع احتياجاتك.
        .نحن دائمًا هنا لخدمتك ونتطلع إلى تقديم أفضل تجربة ممكنة</p>
</div>
</div>
<div className='bg-gray-100/50 rounded-t-md border-1  border-black/20 xl:w-1/2 lg:w-1/2 ml-auto mt-10 '>
<div className='flex justify-between items-center p-3 bg-amber-300'>
    <FaCartShopping className='text-2xl' />
    <h1 className='text-end  font-bold text-xl pb-2'>: تفاصيل الطلب </h1>
</div>
<div className='flex flex-col gap-2'>
    <div className='flex  justify-between p-2'>
        <p className=' text-end  whitespace-nowrap font-bold text-lg'>{productName}</p>
        <h1 className='text-end font-bold text-lg'> : المنتج</h1>
    </div>
    <div>
        <div className='flex gap-2 justify-between p-2 '>
            <div className='flex gap-2 font-bold'>
                <h1>ق</h1>
                <h1>{quantity} </h1>
            </div>
            <h1 className=' text-end  font-bold text-lg  '> : الكمية  </h1>
        </div>
    </div>

    <div className='flex justify-between gap-2 font-bold text-lg p-2'>
        <div className='flex gap-2'>
            <h1>{currency}</h1>
            <h1>{deliveryPrice}</h1>
        </div>
        <h1> : سعر التوصيل </h1>
    </div>
    <div className='flex justify-between gap-2 font-bold text-lg border-t-1 border-black/20 p-3'>
        <div className='flex gap-2 '>
            <h1>{currency}</h1>
            <h1> {totalPrice} </h1>
        </div>
        <h1 className='text-xl'> : السعر الاجمالي </h1>
    </div>
</div>
</div> */}