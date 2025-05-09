import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backEndUrl } from '../App'
import { OrderContext } from '../context/orderContext';



const Orderdetail = () => {

    const { orderStatus, orders,status,setStatus} = useContext(OrderContext)
    const pathname = useParams()



    const [singleOrder, setsingleOrder] = useState([]);
    
    const [statusIndex, setStatusIndex] = useState();



    const getOrder = async () => {
        const oneOrder = orders.filter((or) => {
            return or.fullName === pathname.name
        })
        setsingleOrder(oneOrder)
        if (oneOrder.length > 0) {
            setStatus(oneOrder[0].status);
        }
        
    }

     
    useEffect(() => {
        getOrder()
    }, [orders]);

    const [listStatus, setListStatus] = useState([
        'جديد', 'قيد المراجعة', 'تم التوصيل', 'ملغى'
    ]);


    const updateStatus = async (newStatus, id) => {
        
        try {
            const response = await axios.put(`${backEndUrl}/api/order/update/${id}`, {
                status: newStatus
            });
            // console.log(response.data.status)
        setStatus(response.data.status)
        } catch (err) {
            console.error('حدث خطأ أثناء التحديث', err);

        }
    };


    return singleOrder.length && (
        <div>
            <div className='p-5'>
                <h1 className='text-end xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold'>: تفاصيل الطلب</h1>
            </div>
            <div className='p-5 flex flex-col gap-10'>
                <div className='flex justify-end gap-4 xl:text-3xl lg:text-4xl md:text-2xl sm:text-mdl'>
                    <h1>{singleOrder[0].fullName} </h1>
                    <h1 className='font-bold'> : الاسم الكامل</h1>
                </div>
                <div className='flex justify-end gap-4 xl:text-3xl lg:text-4xl md:text-2xl sm:text-mdl'>
                    <h1>{singleOrder[0].phone} </h1>
                    <h1 className='font-bold'>: رقم الهاتف</h1>
                </div>
                <div className='flex justify-end gap-4 xl:text-3xl lg:text-4xl md:text-2xl sm:text-md'>
                    <h1>{singleOrder[0].productName} </h1>
                    <h1 className='font-bold'>: المنتج </h1>
                </div>
                <div className='flex justify-end gap-4 xl:text-3xl lg:text-4xl md:text-2xl sm:text-md'>
                    <h1>{singleOrder[0].wilaya} </h1>
                    <h1 className='font-bold'>: الولاية </h1>
                </div>
                <div className='flex justify-end gap-4 xl:text-3xl lg:text-4xl md:text-2xl sm:text-md'>
                    <h1>{singleOrder[0].commune} </h1>
                    <h1 className='font-bold'>: البلدية </h1>
                </div>
                <div className='flex justify-end gap-4 xl:text-3xl lg:text-4xl md:text-2xl sm:text-md'>
                    <h1>{singleOrder[0].date} </h1>
                    <h1 className='font-bold'>: تاريخ الطلب </h1>
                </div>
            </div>
            <div dir='rtl' className='text-center flex items-center gap-5 p-5'>
                <h1 className='font-bold text-2xl'>الحالة</h1>
                <h1 className={`${status === 'جديد' ? 'bg-blue-400' : status === "قيد المراجعة" ? 'bg-orange-400' : status === 'ملغى' ? 'bg-red-400' : 'bg-green-500'} text-white py-2 w-30 rounded-sm  font-bold  cursor-pointer `}>{status} </h1>

            </div>
            <div dir='rtl' className='flex  items-center gap-5 p-5'>
                <div>
                    <h1 className='font-bold text-2xl'>تغيير الحالة  :</h1>
                </div>
                <select value={status} onChange={(e) => updateStatus(e.target.value, singleOrder[0]._id)} className='flex gap-4 px-5 py-3  font-bold'>
                 
                    {listStatus.map((sta, index) => {
                        return (
                            <option className=' font-bold' key={index} >{sta} </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Orderdetail
