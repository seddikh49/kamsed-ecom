import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backEndUrl } from '../App'
import { OrderContext } from '../context/orderContext';



const Orderdetail = () => {

    const { orderStatus, setStatusOrder } = useContext(OrderContext)
    const pathname = useParams()



    const [orders, setorders] = useState([]);
    const [singleOrder, setsingleOrder] = useState([]);
    const [status, setStatus] = useState();

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${backEndUrl}/api/order/list`)
            if (response) {
                const formattedOrders = response.data.order.map(order => ({
                    ...order,
                    date: new Date(order.date).toLocaleDateString('en-GB')  // تحويل بسيط
                }));
                setorders(formattedOrders)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOrders()

    }, []);

    useEffect(() => {
        getOrder()
    }, [orders]);

    const getOrder = async () => {
        const oneOrder = orders.filter((or) => {
            return or.fullName === pathname.name
        })
        setsingleOrder(oneOrder)
    }

    const [listStatus, setListStatus] = useState([
        'جديد', 'قيد المراجعة', 'تم التوصيل', 'ملغى'
    ]);


    const updateStatus = async (newStatus, id) => {
        console.log(newStatus, id)
        try {
            const response = await axios.put(`${backEndUrl}/api/order/update/${id}`, {
                status: newStatus
            });
            setStatus(response.data.status); // تحديث الحالة في الواجهة بعد التحديث في قاعدة البيانات
          
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
            <select dir='rtl' value={status} onChange={(e) => updateStatus(e.target.value, singleOrder[0]._id)} className='flex gap-4 p-5'>
                {listStatus.map((sta, index) => {
                    return (
                        <option key={index} >{sta} </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Orderdetail
