import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backEndUrl } from '../App'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';




const Orders = () => {
  const [orders, setorders] = useState([]);





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


  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: 'تحذير',
      text: 'هل تريد حقا حذف هذا الطلب ؟',
      icon: 'warning',
      confirmButtonText: 'نعم',
      showCancelButton: true,
      cancelButtonText: 'إلغاء', // ← هنا تغيّر النص

    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${backEndUrl}/api/order/delete/${id}`)
          if(response){
            toast.success(response.data.msg)
            fetchOrders()
          }
        } catch (error) {
          console.log(error)
        }
      }
    }).catch((error) => {
      console.log(error)
    })

  }



  return (
    <div className='w-full'>
      <div className='flex gap-4  justify-center items-center  w-full  '>
        <table className="w-full  text-center border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 border w-[200px] "></th>
              <th className="py-2 border w-[200px] ">رقم الهاتف</th>
              <th className=" py-2 border w-[200px]">الاسم الكامل</th>
              <th className=" py-2 border  w-[200px]"> العدد</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index} className="border border-gray-300">
                  <td className='py-2 border flex gap-10 justify-center'>
                    <button onClick={()=>handleDelete(order._id)} className='cursor-pointer bg-red-500 text-white py-2 px-3 font-bold rounded-md'>حذف الطلب </button>
                    <NavLink to={`/orderdetail/${order.fullName}`} className='cursor-pointer bg-green-500 text-white py-2 px-3 font-bold rounded-md'>تفاصيل الطلب</NavLink>
                  </td>
                  <td className="py-1 border">{order.phone} </td>
                  <td className="py-1 border"> {order.fullName}</td>
                  <td className="py-1 border">{index}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
