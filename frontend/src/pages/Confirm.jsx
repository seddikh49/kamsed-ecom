import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Lottie from 'lottie-react';
import axios from 'axios';

// import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Confirm = () => {
    const [animationData, setAnimationData] = useState(null);
    const { nameConfirmation } = useContext(ShopContext)

    // https://assets4.lottiefiles.com/packages/lf20_9cyyl8i4.json
    // https://assets2.lottiefiles.com/packages/lf20_obhph3sh.json
    useEffect(() => {
        axios.get('https://assets3.lottiefiles.com/private_files/lf30_3cikblvw.json')
        .then(response => setAnimationData(response.data))
        .catch(error => console.error('خطأ في جلب الأنيميشن', error));
    }, []);
    if (!animationData) return <div>تحميل الأنيميشن...</div>;

    

    return (
        <div>
            <div>
                <div>
                <Lottie animationData={animationData} loop={false} className='w-100' />
                    <h1>مرحبا بك!</h1>
                </div>
                <h1>{nameConfirmation} </h1>
            </div>
        </div>
    )
}

export default Confirm
