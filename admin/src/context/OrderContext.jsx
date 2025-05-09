import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import { backEndUrl } from '../App'

// إنشاء السياق
export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orderStatus, setStatusOrder] = useState(0);
  const [orders, setorders] = useState([]);
  const [copiedOrders, setCopiedOrders] = useState([]);
  const [notofications, setnotofications] = useState();
  const [status, setStatus] = useState("جديد");


  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${backEndUrl}/api/order/list`)
      if (response) {
        setorders(response.data.order)
        setCopiedOrders(response.data.order)
      }

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchOrders()
  }, [status]);





  const valueOrders = {
    orders,
    setorders,
    copiedOrders,
    setCopiedOrders,
    orderStatus,
    setStatusOrder,
    fetchOrders,
    backEndUrl,
    status, 
    setStatus
  }



  return (
    <OrderContext.Provider value={valueOrders}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;