// import React, { useContext } from 'react'
// import { ShopContext } from '../context/shopContext'
// import { Link } from 'react-router-dom'

// const ProductItems = ({ id, name, image, price }) => {

//   const { currency } = useContext(ShopContext)

//   return (
//     <div className='border-1  border-black/10 hover:scale-105 hover:border-orange-400 transition-all duration-300 p-2 rounded-md'>
//       <Link to={`/product/${id}`} className=''>
//         <img className='sm:w-full xm:w-full ' src={image} alt="" />
//         <p className=' font-md pt-4 text-md font-poppins xl:text-md lg:text-md md:text-md sm:text-sm'>{name} </p>
//         <div className='flex gap-2'>
//           <h1>{currency}</h1>
//           <p className='text-lg font-bold font-poppins text-gray-700'>{price} </p>
//         </div>
//         <div className='w-full flex justify-center items-center relative  '>
//           <button className='w-full bg-orange-400  text-white py-2 font-bold text-xl cursor-pointer rounded-b-md  '>شراء المنتج</button>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default ProductItems

import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const ProductItems = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${id}`} className="block">
        {/* صورة المنتج */}
        <div className="overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="object-cover transition-transform duration-300 hover:scale-110 w-full"
          />
        </div>

        {/* معلومات المنتج */}
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">{name.slice(0,27)}..</p>
          <div className="flex items-center gap-2 text-gray-600 ">
            <span className="text-base">{currency}</span>
            <span className="text-xl font-bold text-gray-800">{price}</span>
          </div>
        </div>

        {/* زر الشراء */}
        <div className="px-4 pb-4">
          <button className="w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white py-2 rounded-b-xl rounded-t-sm font-semibold text-lg hover:brightness-110 transition">
            شراء المنتج
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductItems;
