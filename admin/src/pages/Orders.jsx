import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backEndUrl } from '../App'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";





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
      cancelButtonText: 'إلغاء',

    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${backEndUrl}/api/order/delete/${id}`)
          if (response) {
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
    <div className='w-full bg-gray-100 p-10'>
      <div className='p-5 bg-white rounded-xl shadow-xl'>
        <div className='flex'>
          <select class="border p-2 rounded">
            <option>Status</option>
            <option>New</option>
            <option>Processing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          <select class="border p-2 rounded">
            <option>Date</option>
            <option>Today</option>
            <option>This week</option>
          </select>
          <div>
            <input type="text" placeholder='البحث في الطلبات' />
          </div>
        </div>
        <div className='flex gap-4 bg-amber-50  justify-center items-center  w-full overflow-hidden rounded-xl border border-gray-300  '>
          <table className="w-full  text-center bg-white  border-gray-300">
            <thead className="bg-gray-100 rounded-md">
              <tr>
                <th className="py-2 border-gray-200 border w-[50px] ">الإجراء</th>
                <th className="py-2 border-gray-200 border w-[50px] ">الحالة</th>
                <th className="py-2 border border-gray-200 w-[100px] ">تاريخ الطلب</th>
                <th className="py-2 border border-gray-200 w-[100px] ">رقم الهاتف</th>
                <th className=" py-2 border border-gray-200 w-[100px]">الاسم الكامل</th>
                <th className=" py-2 border  border-gray-200  w-[50px]"> الطلب</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index} className="border border-gray-300">
                    <td className='py-2  flex border-gray-200 gap-5 justify-center'>
                      <button onClick={() => handleDelete(order._id)} className='cursor-pointer bg-red-500 text-white py-2 px-3 font-bold rounded-md'>
                        <MdDelete />
                      </button>

                      <NavLink to={`/orderdetail/${order.fullName}`} className='cursor-pointer bg-green-500 text-white py-2 px-3 font-bold rounded-md'>
                        <FaEye />

                      </NavLink>
                    </td>
                    <td></td>
                    <td className="py-1 border-b-gray-200 ">{order.date} </td>
                    <td className="py-1 border-b-gray-200 ">{order.phone} </td>
                    <td className="py-1 border-b-gray-200 "> {order.fullName}</td>
                    <td className="py-1 border border-gray-200  ">{index} #</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Orders
