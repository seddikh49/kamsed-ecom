import React, { createContext, useState } from 'react';

// إنشاء السياق
export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
const [orderStatus, setStatusOrder] = useState(0);
const valueOrders = {
    orderStatus,
    setStatusOrder
}



  return (
    <OrderContext.Provider value={valueOrders}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;