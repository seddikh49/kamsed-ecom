

import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const ProductItems = ({ id, name, image, price,index }) => {
  const { currency } = useContext(ShopContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2, // تأخير تدريجي بين الكروت
      }}
      className="bg-white shadow-lg rounded-b-2xl overflow-hidden border p-2 border-gray-300 transition-transform duration-300 hover:scale-105 flex flex-col h-max">
      <Link to={`/product/${id}`} className="flex flex-col h-full">

        {/* صورة المنتج بنسبة 1:1.2 أو يمكنك استخدام ratio ثابت حسب تصميمك */}
        <div className="bg-gray-100  overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 max-h-72 rounded-t-md"
          />
        </div>

        {/* محتوى المنتج */}
        <div className="flex flex-col justify-between p-2">
          <p className="text-lg font-semibold text-gray-800  whitespace-nowrap ">{name}</p>
          <div className="flex items-center gap-2 text-gray-600 ">
            <span className="text-base">{currency}</span>
            <span className="text-xl font-bold text-gray-800">{price}</span>
          </div>
        </div>

        {/* زر الشراء */}
        <div className="">
          <button className="w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white py-2 rounded-b-xl rounded-t-sm font-semibold text-lg hover:brightness-110 transition">
            شراء المنتج
          </button>
        </div>

      </Link>
    </motion.div>
  )
}
export default ProductItems





