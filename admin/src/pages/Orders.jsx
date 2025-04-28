import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backEndUrl } from '../App'



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

  return (
    <div className='flex gap-4'>
      {orders.map((order, index) => {
        return (
          <div key={index} >
            <h1>{order.fullName} </h1>
            <h1>{order.phone} </h1>
            <h1>{order.state} </h1>
            <h1>{order.commune} </h1>
            <h1>{order.date} </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Orders
