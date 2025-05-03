import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { backEndUrl } from '../App'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { OrderContext } from '../context/orderContext';






const Orders = () => {
  const [orders, setorders] = useState([]);
  const [copiedOrders, setCopiedOrders] = useState([]);


 const {} = useContext(OrderContext)

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${backEndUrl}/api/order/list`)
      if (response) {
        const formattedOrders = response.data.order.map(order => ({
          ...order,
          date: new Date(order.date).toLocaleDateString('en-GB')  // تحويل بسيط
        }));
        setorders(formattedOrders)
        setCopiedOrders(formattedOrders)
        console.log(orders[0].status)
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

  const [status, setstatus] = useState([
    'جديد', 'قيد المراجعة', 'تم التوصيل', 'ملغى'
  ]);



  const filterOrders = (e) => {
    const keyword = e.target.value
    if (keyword === "") {
      setorders(copiedOrders)
    }
    const filter = copiedOrders.filter((or) => {
      return or.fullName.includes(keyword.toLowerCase())
    })
    setorders(filter)

  }





  return (
    <div className='w-full bg-gray-100 p-10'>
      <div className='p-5 bg-white rounded-xl shadow-xl'>
        <div dir='rtl' className='flex gap-5 mb-5 sm:flex-col justify-between xm:flex-col md:flex-row lg:flex-row xl:flex-row'>
          <div className='relative sm:w-full xm:w-full xl:w-96 lg:w-full'>
            <FaSearch className='absolute top-4 left-3 text-xl text-gray-600' />
            <input type="text" onChange={filterOrders} className='py-3 px-3 xl:w-96 lg:w-full xm:w-full sm:w-full' placeholder='البحث في الطلبات' />
          </div>
         <div className='flex gap-3 sm:justify-between xm:justify-between  sm:flex-row xm:flex-col'>
         <div >
            <select className="border py-3 px-3 rounded font-bold">
              {status.map((sta, index) => {
                return <option key={index} className='font-bold' value="">{sta} </option>
              })}
            </select>
          </div>
          <div>
            <select className="border py-3 px-3 rounded font-bold">
              <option>التاريخ</option>
              <option className='font-bold'>Today</option>
              <option className='font-bold'> This week</option>
            </select>
          </div>
         </div>

        </div>
        <div className='flex gap-4 bg-amber-50  justify-center items-center  w-full overflow-hidden rounded-xl border border-gray-300  '>
          <table className="w-full  text-center bg-white  border-gray-300">
            <thead className="bg-gray-100 rounded-md">
              <tr className=''>
                <th className="py-2 border-gray-200 border w-1/6 ">الإجراء</th>
                <th className="py-2 border-gray-200 border w-1/6   xl:table-cell md:hidden sm:hidden xm:hidden  ">الحالة</th>
                <th className="py-2 border border-gray-200 w-1/6 xl:table-cell  md:hidden sm:hidden xm:hidden  ">تاريخ الطلب</th>
                <th className="py-2 border border-gray-200 w-1/6  xl:table-cell md:hidden sm:hidden xm:hidden  ">رقم الهاتف</th>
                <th className=" py-2 border border-gray-200 w-1/6">الاسم الكامل</th>
                <th className=" py-2 border  border-gray-200  w-1/6"> الطلب</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index} className="border border-gray-300">
                  
                    <td className='py-2  flex border-gray-200 gap-3 justify-center'>
                      <button onClick={() => handleDelete(order._id)} className='cursor-pointer hover:bg-red-800 bg-red-500 text-white xl:py-3  xm:py-[5px] xm:px-2  xl:px-3 font-bold rounded-md'>
                        <MdDelete />
                      </button>

                      <NavLink to={`/orderdetail/${order.fullName}`} className='cursor-pointer hover:bg-green-800 bg-green-500 text-white xl:py-3  xm:py-[5px] xm:px-2  xl:px-3 font-bold rounded-md'>
                        <FaEye />

                      </NavLink>
                    </td>
                    <td className={`md:hidden sm:hidden text-center xm:hidden xl:table-cell   `}> 
                      <div className={`${order.status === 'جديد' ? 'bg-blue-400' : order.status === "قيد المراجعة" ? 'bg-orange-400' : order.status === 'ملغى' ? 'bg-red-400' : 'bg-green-500'} text-white py-2 w-30 rounded-sm  font-bold inline-block cursor-pointer `}>{order.status} </div>
                    </td>
                    <td className="py-1 border-b-gray-200  xl:table-cell  md:hidden sm:hidden xm:hidden  ">{order.date} </td>
                    <td className="py-1 border-b-gray-200 xl:table-cell  md:hidden sm:hidden xm:hidden ">{order.phone} </td>
                    <td className="py-1 border-b-gray-200 xm:text-sm xl:text-xl lg:text-xl md:text-xl "> {order.fullName}</td>
                    <td className="py-1 border border-gray-200  ">{index+1} #</td>
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
