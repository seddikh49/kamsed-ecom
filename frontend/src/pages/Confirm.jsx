import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Lottie from 'lottie-react';
import axios from 'axios';

// import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Confirm = () => {
    const [animationData, setAnimationData] = useState(null);
    const [animationData2, setAnimationData2] = useState(null);

    const { nameConfirmation } = useContext(ShopContext)

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
            <div className='flex justify-evenly xm:space-y-5 items-center md:flex-col sm:flex-col xm:flex-col xl:flex-row lg:flex-row'>
                <div>
                    <Lottie animationData={animationData} loop={true} className='xl:w-[500px] lg:w-100 xm:w-full sm:w-full md:w-[500px]' />
                </div>
                <div className='lg:w-[450px] xl:w-[600px] md:w-full sm:w-full xm:w-full  text-end'>
                    <div className='absolute right-0 top-20'>
                        <Lottie animationData={animationData2} loop={true} className='w-100' />
                    </div>
                    <h1 className='font-bold text-4xl pb-4'> {nameConfirmation} شكر جزيلا لك  </h1>
                    <h2 className='xl:text-4xl lg:text-3xl md:text-xl font-bold pb-4'>على ثقتك بنا وعلى طلبك الكريم</h2>
                    <p className='xl:text-2xl lg:text-xl md:text-xl font-bold'>يسعدنا خدمتك، وسنتصل بك خلال مدة قصيرة لتأكيد تفاصيل الطلب والتأكد من تلبية جميع احتياجاتك.
                        .نحن دائمًا هنا لخدمتك ونتطلع إلى تقديم أفضل تجربة ممكنة</p>
                </div>

            </div>
        </div>
    )
}

export default Confirm
