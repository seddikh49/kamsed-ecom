import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ShopContext } from '../context/shopContext'
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { wilayas } from '../‏‏assets/frontend_assets/wilayas'
import { communes } from '../‏‏assets/frontend_assets/communes'
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from 'react-toastify'
import { ClipLoader } from "react-spinners";
import RelatedProducts from '../componets/RelatedProducts'











const Product = () => {
  const {
    products,
    currency,
    backend_url,
    navigate,
    setnameConfirmation,
    setfullName,
    fullName,
    setPhone,
    phone,
    setWilaya,
    wilaya,
    setCommune,
    commune,
    quantity,
    setQuantity,
    deliveryPrice,
    setdeliveryPrice,
    totalPrice,
    settotalPrice,
    productName,
    setProductName

  } = useContext(ShopContext)


  const [imageIndex, setimageIndex] = useState(0);
  const { productId } = useParams();
  const [product, setproduct] = useState();
  const [communess, setCommuness] = useState([]);
  const [loading, setLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const [status, setstatus] = useState('جديد');
  const [notification, setnotification] = useState(1);



  const getSingleProduct = async () => {
    const singleProduct = products.find((product) => product._id === productId);
    setproduct(singleProduct);
  }
  const filterCommunes = async () => {
    let coms = await communes.filter((com) => com.wilaya_name === wilaya)
    setCommuness(coms)
    const filterPrice = await wilayas.filter((wil) => {
      return wil.wil === wilaya
    })
    if (filterPrice.length) {
      setdeliveryPrice(filterPrice[0].deliveryPrice)
    }
  }

  const getTotlaPrice = async () => {
    if (product) {
      const add = await (product.price * quantity) + deliveryPrice
      settotalPrice(add)

    }
  }


  useEffect(() => {
    getSingleProduct();
  }, [products, product]);

  useEffect(() => {
    filterCommunes()
    getTotlaPrice()
  }, [wilaya, quantity, deliveryPrice, totalPrice]);


  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)

  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setProductName(product.name)
    setnameConfirmation(fullName)

    try {
      const response = await axios.post(`${backend_url}/api/order/add`, {
        fullName,
        phone,
        wilaya,
        commune,
        quantity,
        productName: product.name,
        status,
        notification
      });
      if (response.data.success) {
        setLoading(false)
        navigate('/confirm')
      }
      else {
        setLoading(false)
        const errorMessage = response.data.msg.message.split(":")
        toast.error(errorMessage[errorMessage.length - 1])
      }
    } catch (error) {
      console.log(error)
    }

  }




  return product && (
    <div className='w-full max-h-max  mt-10 '>
     <div className='w-full max-h-max gap-10  flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xm:flex-col mt-10 '>
     <div className='xl:w-1/2   lg:w-1/2 md:w-full  h-max flex flex-col md:items-center  lg:items-end xl:items-end sm:items-center sm:justify-start   '>
        <div className='flex flex-col items-end gap-2 pb-3 sm:ml-auto' >
          <p className='text-2xl font-bold'>{product.name}</p>
          <div className='flex text-2xl font-bold'>
            <h1>{currency} </h1>
            <h1>{product.price}  </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='flex z-1  flex-col xl:w-[550px] md:w-full  p-7 shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.8)] lg:w-[450px] sm:w-full  gap-5 xl:items-end sm:items-center' action="">
          <div dir='rtl' className='xl:w-full md:w-full lg:w-full  sm:w-full flex gap-5 xl:flex-row md:flex-row lg:flex-row  sm:flex-col xm:flex-col '>
          <div className='xl:w-1/2 relative sm:w-full xm:w-full'>
              <input onChange={(e) => setfullName(e.target.value)} value={fullName} className='w-1/2 bg-gray-100 py-3 font-bold px-10 border-1 sm:w-full xm:w-full focus:outline-blue-500 border-gray-600/50 rounded-[5px]' placeholder='الاسم الكامل' type="text" />
              <MdAccountCircle className='absolute top-[13px] left-1 text-2xl text-gray-600' />
            </div>
           
            <div className='xl:w-1/2 relative  sm:w-full xm:w-full'>
              <input onChange={(e) => setPhone(e.target.value)} value={phone} className='w-full bg-gray-100 py-3 font-bold px-9 border-1 sm:w-full xm:w-full focus:outline-blue-500 border-gray-600/50 rounded-[5px]' type="text" id="age" min="1" max="100" placeholder=" رقم الهاتف" />
              <FaPhone className='absolute top-[13px] left-[7px] text-2xl text-gray-600 ' />
            </div>

        
          </div>
          <div  className='xl:w-full sm:flex-col-reverse xm:flex-col-reverse md:w-full sm:w-full lg:w-full flex gap-5  xl:flex-row md:flex-row lg:flex-row  '>
            <select onChange={(e) => setCommune(e.target.value)} value={commune} className='w-1/2 bg-gray-100 text-gray-600 py-3 font-sans font-bold px-2 border-1 sm:w-full xm:w-full focus:outline-blue-500 border-gray-600/50 rounded-[5px]' name="" id="">
              <option value="">البلدية</option>
              {communess.map((wil, index) => {
                return (
                  <option className='text-black' key={index} value={wil.num}>{wil.commune_name}</option>
                )
              })}

            </select>
            <select onChange={(e) => setWilaya(e.target.value)} value={wilaya} className='w-1/2 text-gray-600 bg-gray-100 py-3 font-bold px-2 border-1 sm:w-full xm:w-full focus:outline-blue-500 border-gray-600/50 rounded-[5px]' name="" id="">
              <option className='' value="">الولاية</option>
              {wilayas.map((wil, index) => {
                return (
                  <option className='text-black font-bold  flex flex-col' key={index} value={wil.wil}>{wil.wil}- {wil.num}  </option>
                )
              })}

            </select>
          </div>
          <div className='flex gap-5 justify-end items-center xl:flex-row lg:flex-row   sm:flex-col-reverse  xm:flex-col-reverse  '>
            <div className='flex border-1  rounded-sm   '>
              <div onClick={incrementQuantity} className='w-10 h-10 cursor-pointer  bg-black text-white flex justify-center  items-center text-xl font-bold'>+</div>
              <div className='w-10 h-10 flex justify-center  items-center text-xl font-bold'>{quantity}</div>
              <div onClick={decrementQuantity} className='w-10 h-10 cursor-pointer bg-black text-white flex justify-center  items-center text-xl font-bold'>- </div>
            </div>
            <h1 className=' py-3 font-bold text-end text-xl ' >:كمية المنتج </h1>
          </div>
          <div className='bg-gray-100/50 rounded-t-md border-1  border-black/30 w-full'>
            <div className='flex justify-between items-center rounded-t-md p-3 bg-orange-400'>
              <FaCartShopping className='text-2xl text-white' />
              <h1 className='text-end  font-bold text-xl text-white pb-2'>: تفاصيل الطلب </h1>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2 px-3'>
                <h1 className='text-end font-bold xl:text-lg lg:text-sm md:text-lg xm:text-sm sm:text-md'> : المنتج</h1>
                <p className=' text-end  whitespace-nowrap  font-poppins xl:text-lg lg:text-sm md:text-lg xm:text-sm sm:text-mdt'>{product.name}</p>
              </div>
              <div>
                <div className='flex gap-2 justify-between px-3 '>
                  <div className='flex gap-2 font-bold'>
                    <h1>ق</h1>
                    <h1 className='font-poppins'>{quantity} </h1>
                  </div>
                  <h1 className=' text-end  font-bold xl:text-lg lg:text-lg md:text-lg xm:text-sm sm:text-md '> : الكمية  </h1>
                </div>
              </div>

              <div className='flex justify-between gap-2 font-bold xl:text-lg lg:text-lg md:text-lg xm:text-sm sm:text-md px-3'>
                <div className='flex gap-2'>
                  <h1>{currency}</h1>
                  <h1 className='font-poppins'>{deliveryPrice}</h1>
                </div>
                <h1> : سعر التوصيل </h1>
              </div>
              <div className='flex justify-between gap-2 font-bold text-lg border-t-1 border-black/30 p-3'>
                <div className='flex gap-2 '>
                  <h1>{currency}</h1>
                  <h1 className='font-poppins'> {totalPrice} </h1>
                </div>
                <h1 className='text-xl '> : السعر الاجمالي </h1>
              </div>
            </div>

          </div>


          <div className='xl:w-full lg:w-full md:w-full flex gap-5 sm:w-full xl: bg-amber-800   '>

            <NavLink className={"no-active-style w-full  bg-green-500 py-2 text-white text-center xl:text-xl md:text-xl lg:text-xl xm:text-md rounded-sm flex items-center justify-center whitespace-nowrap"}><FaWhatsapp className=' text-3xl pr-2' /> اضغط هنا للطلب عبر الواتساب </NavLink>
          </div>
          <div className='xl:w-full lg:w-full md:w-full flex gap-5 sm:w-full'>
            <button className={"no-active-style w-full  bg-blue-500 py-2 font-cairo text-white text-center xl:text-xl md:text-xl lg:text-xl xm:text-md rounded-sm flex items-center justify-center whitespace-nowrap"}>{loading ? <ClipLoader color="#36d7b7" size={30} /> : " اضغط هنا لتأكيد الطلب"} </button>
          </div>


        </form> 
      </div>


      <div className='xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-2 justify-center md:items-center xl:items-start '>
        <img src={product.image[imageIndex]} alt="" className='xl:w-[500px] lg:w-[400px] md:w-4/5' />
        <div className='grid grid-cols-4 xl:w-[500px] lg:w-[400px] md:w-4/5 gap-2 '>
          {product.image.map((img, index) => {
            return (
              <img key={index} onClick={() => setimageIndex(index)} className='cursor-pointer' src={img} alt="" />
            )
          })}
        </div>
      </div>
     </div>

     <div className='mt-15'>
      <RelatedProducts category={product.category} id={product._id}/>
      </div>   
    </div>

  )
}

export default Product
