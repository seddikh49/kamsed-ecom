import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backEndUrl } from '../App'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';





const List = ({ token }) => {


  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backEndUrl}/api/product/list`)
      if (response.data.msg) {
        setList(response.data.products)
      }

    } catch (error) {
      toast.error(response.data.msg)
    }

  }
  useEffect(() => {
    fetchList()
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(`${backEndUrl}/api/product/remove`, { id }, { headers: { token } })
      console.log(response.data.success)
      if (response.data.success) {
        toast.success(response.data.msg)
        fetchList()
        console.log('messages')
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='p-10 flex flex-col gap-2'>
      <p className='mb-10'>All products </p>
      <div className='border w-full border-black/20 bg-gray-200 grid grid-cols-[1fr_3fr_1fr_1fr_1fr] mx-auto  px-2 py-1 '>
        <b>Image</b>
        <b>Name</b>
        <b>Categoty</b>
        <b>Price</b>
        <b className='flex items-center  justify-center'>Action</b>
      </div>

      {
        list.map((product, index) => {
          return (
            <div key={index} className='border-black/20 w-full border gap-2 grid items-center grid-cols-[1fr_3fr_1fr_1fr_1fr] mx-auto  px-2 py-1 '>
              <img className='w-20 text-gray-600 font-poppins' src={product.image[0]} alt="" />
              <b className='text-gray-600 font-poppins'>{product.name}</b>
              <b className='text-gray-600 font-poppins'>{product.category}</b>
              <b className='text-gray-600 font-poppins'>{product.price}$</b>
              <b className='font-poppins flex items-center text-xl cursor-pointer text-gray-600 justify-center' onClick={() => removeProduct(product._id)}>X</b>
            </div>
          )
        })
      }

    </div>
  )
}

export default List
