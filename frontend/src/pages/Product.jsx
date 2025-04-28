import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../‏‏assets/frontend_assets/assets'
import RelatedProducts from '../componets/RelatedProducts'
import { ShopContext } from '../context/shopContext'
import {  NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { wilayas } from '../‏‏assets/frontend_assets/wilayas'
import { communes } from '../‏‏assets/frontend_assets/communes'
import axios from 'axios';




const Product = () => {
  const {
    products,
    currency,
    backend_url,
    navigate,
    setnameConfirmation

  } = useContext(ShopContext)


  const [imageIndex, setimageIndex] = useState(0);
  const { productId } = useParams();
  const [product, setproduct] = useState(null);
  const [communess, setCommuness] = useState([]);


  const [fullName, setfullName] = useState('');
  const [phone, setPhone] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [commune, setCommune] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [productName, setProductName] = useState();


  const getSingleProduct = async () => {
    const singleProduct = products.find((product) => product._id === productId);
    setproduct(singleProduct);
  }

  const filterCommunes = async () =>  {
  
      let coms =   communes.filter((com)=> com.wilaya_name === wilaya)  
      setCommuness(coms)
  }


  useEffect(() => {
    getSingleProduct();
  }, [products, product ]);

  useEffect(() => {
    filterCommunes()
  }, [wilaya]);


  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    if(quantity > 0) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleSubmit = async (e) => {
   e.preventDefault()
   setnameConfirmation(fullName)
    try {
      const response = await axios.post(`${backend_url}/api/order/add`,{
        fullName,
        phone,
        wilaya,
        commune,
        quantity,
        productName :product.name  
    });
    if(response.data.success){
       setfullName('')  
       setCommune('')
       setPhone('')
       setWilaya('')
       setQuantity(0)
       navigate('/confirm')   
    }
    else{
       console.log(response.data.msg)  
    }
    } catch (error) {
         console.log(error)
    }
  }





  return product && (
    <div className='w-full max-h-max gap-10  flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xm:flex-col '>
      <div className='xl:w-1/2  lg:w-1/2 md:w-full  h-max  flex flex-col gap-10 md:items-center  lg:items-end xl:items-end sm:items-center pr-10  '>
        <div className='flex flex-col items-end gap-2' >
          <p className='text-2xl font-bold'>{product.name}</p>
          <div className='flex text-2xl font-bold'>
            <h1>{currency} </h1>
            <h1>{product.price}  </h1>
          </div>
          <p>description</p>
        </div>
        <form onSubmit={handleSubmit}  className='flex flex-col xl:w-3/4 md:w-2/3   lg:w-6/7 ml-10 sm:w-full  gap-5 xl:items-end sm:items-center' action="">
          <div className='xl:w-full md:w-full lg:w-full  sm:w-full flex gap-5 xl:flex-row md:flex-row lg:flex-row  sm:flex-col xm:flex-col '>
            <input onChange={(e)=> setPhone(e.target.value)} value={phone} className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 sm:w-full xm:w-full border-blue-500 rounded-[5px]' type="text" id="age" min="1" max="100" placeholder=" رقم الهاتف" />
            <input onChange={(e)=> setfullName(e.target.value)} value={fullName} className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 sm:w-full xm:w-full border-blue-500 rounded-[5px]' placeholder='الاسم الكامل' type="text" />
          </div>
          <div className='xl:w-full sm:flex-col-reverse xm:flex-col-reverse md:w-full sm:w-full lg:w-full flex gap-5  xl:flex-row md:flex-row lg:flex-row  '>
          <select onChange={(e)=> setCommune(e.target.value)} value={commune} className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 sm:w-full xm:w-full border-blue-500 rounded-[5px]' name="" id="">sdf
              <option value="">البلدية</option>
              { communess.map((wil,index) => {
                return (
                    <option key={index} value={wil.num}>{wil.commune_name}</option>
                )
              })}

            </select>
            <select onChange={(e)=> setWilaya(e.target.value)} value={wilaya} className='w-1/2 bg-gray-100 py-3 font-bold px-2 border-1 sm:w-full xm:w-full border-blue-500 rounded-[5px]' name="" id="">sdf
              <option value="">الولاية</option>
              {wilayas.map((wil,index) => {
                return (
                    <option key={index} value={wil.wil}>{wil.num}- {wil.wil}</option>
                )
              })}

            </select>
          </div>
          <div className=' flex gap-5 justify-end items-center  sm:flex-col-reverse  xm:flex-col-reverse  '>
            <div className='flex border-1   '>
              <div onClick={incrementQuantity} className='w-13 h-13 cursor-pointer bg-black text-white flex justify-center  items-center text-xl font-bold'>+</div>
              <div className='w-13 h-13 flex justify-center  items-center text-xl font-bold'>{quantity}</div>
              <div onClick={decrementQuantity} className='w-13 h-13 cursor-pointer bg-black text-white flex justify-center  items-center text-xl font-bold'>- </div>
            </div>
            <h1 className=' py-3 font-bold text-end text-xl ' >:كمية المنتج </h1>
          </div>

          {/* <div className='xl:w-full lg:w-full md:w-full flex gap-5 sm:w-full xl: bg-amber-800   '>
            <NavLink className={"no-active-style w-full bg-green-500 py-3 text-white text-center font-bold text-xl rounded-sm flex items-center justify-center whitespace-nowrap"}><FaWhatsapp className=' text-3xl pr-2' /> اضغط هنا للطلب عبر الواتساب </NavLink>
          </div> */}
          <div className='xl:w-full lg:w-full md:w-full flex gap-5 sm:w-full'>
            <button className={"no-active-style cursor-pointer w-full bg-blue-500 py-3 text-white text-center font-bold text-xl rounded-sm"}>اضغط هنا لتأكيد الطلب</button>
          </div>



        </form>
      </div>


      <div className='xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-2 justify-center   items-start'>
        <img src={product.image[imageIndex]} alt="" className='xl:w-3/5 lg:w-3/5 md:w-4/5' />
        <div className='grid grid-cols-4 xl:w-3/5 lg:w-3/5 md:w-4/5 gap-2 '>
          {product.image.map((img, index) => {
            return (
              <img key={index} onClick={() => setimageIndex(index)} className='cursor-pointer' src={img} alt="" />
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Product

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   // حالة البيانات المدخلة في النموذج
//   const [fullName, setFullName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [wilaya, setWilaya] = useState('');
//   const [commune, setCommune] = useState('');

//   // حالة لعرض الرسائل
//   const [message, setMessage] = useState('');

//   // الدالة لإرسال البيانات
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // منع الإرسال الافتراضي للنموذج

//     const data = {
//       fullName,
//       phone,
//       wilaya,
//       commune
//     };

//     try {
//       const response = await axios.post('http://localhost:3000/api/order/add', data);
//       setMessage('تم إرسال البيانات بنجاح');
//       console.log(response.data); // هنا يمكنك التعامل مع الاستجابة من السيرفر
//     } catch (error) {
//       setMessage('حدث خطأ أثناء إرسال البيانات');
//       console.error('حدث خطأ:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>إرسال بيانات الطلب</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="fullName">الاسم الكامل:</label>
//           <input
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">رقم الهاتف:</label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="wilaya">الولاية:</label>
//           <input
//             type="text"
//             id="wilaya"
//             value={wilaya}
//             onChange={(e) => setWilaya(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="commune">البلدية:</label>
//           <input
//             type="text"
//             id="commune"
//             value={commune}
//             onChange={(e) => setCommune(e.target.value)}
//             required
//           />
//         </div>
//         <button className='bg-red-400' type="submit">إرسال البيانات</button>
//       </form>
      
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default App;
