import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import {backEndUrl} from '../App'
import { toast } from 'react-toastify';




const Add = ({token}) => {
 
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

 
  const [name, setName] = useState("");
  const [description, setdescription] = useState();
  const [price, setprice] = useState('');
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const dataForm = new FormData()

      dataForm.append("name", name)
      dataForm.append("description", description)
      dataForm.append("price",price)
      dataForm.append("category", category)
      dataForm.append("subCategory", subCategory)
      dataForm.append("bestSeller", bestSeller)
      dataForm.append("sizes", JSON.stringify(sizes))


      image1 && dataForm.append("image1", image1)
      image2 && dataForm.append("image2", image2)
      image3 && dataForm.append("image3", image3)
      image4 && dataForm.append("image4", image4)
      

      const response = await axios.post(`${backEndUrl}/api/product/add`, dataForm, {
        headers: { token }  
      });
        if(response.data.success){
          toast.success('product added successfully')
          setName('')
          setdescription('')
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
          setprice('')
          console.log(response.data)
        }else{
          toast.error(response.data.msg)
          

        }
      
    } catch (error) {
      console.log(error)
    }
  }





  
  return (
    <div className='p-10 w-full'>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-3' action="">
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-poppins'>Upload Image</h1>
          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20 h-15' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id='image1' hidden />
            </label>

            <label htmlFor="image2">
              <img className='w-20 h-15' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id='image2' hidden />
            </label>

            <label htmlFor="image3">
              <img className='w-20 h-15' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id='image3' hidden />
            </label>

            <label htmlFor="image4">
              <img className='w-20 h-15' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id='image4' hidden />
            </label>
          </div>
        </div>
        <div className='w-full '>
          <p className='mb-2 font-poppins'>Product name</p>
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Type here' className=' w-full max-w-[500px] font-poppins px-4 py-2' />
        </div>
        <div className='w-full'>
          <p className='mb-2 font-poppins'>Product descrition</p>
          <textarea onChange={(e)=> setdescription(e.target.value)} value={description} type="text" placeholder='Write content here' className=' w-full max-w-[500px] font-poppins px-4 py-2' />
        </div>
        <div className='flex sm:flex-col xl:flex-row w-full gap-4 xm:flex-col'>
          <div className=''>
            <p className='mb-2 font-poppins whitespace-nowrap'>Product category</p>
            <select onChange={(e)=> setCategory(e.target.value)} value={category}  className='py-2 px-5 font-poppins' name="" id="">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className=''>
            <p className='mb-2 font-poppins whitespace-nowrap'>Product subcategory</p>
            <select onChange={(e)=> setSubCategory(e.target.value)}  className='py-2 px-5 font-poppins' name="" id="">
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div className=''>
            <p className='mb-2 font-poppins'>Product price</p>
            <input onChange={(e)=> setprice(Number(e.target.value))} value={price} className='py-2 font-poppins px-4 ' type="Number" />
          </div>
        </div>
        <div >
          <p>Product sizes</p>
          <div className='flex gap-3 mt-3'>
            <div onClick={()=> setSizes(prev => prev.includes('S') ? prev.filter((item)=> item !== "S") : [...prev, "S"])} className={`${sizes.includes("S") ? "bg-[#FFC0CB]" : " bg-slate-200"} px-4 py-1   cursor-pointer font-poppins text-xl`}>
              <p  className={``}>S</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes('M') ? prev.filter((item)=> item !== "M") : [...prev, "M"])}className={`${sizes.includes("M") ? "bg-[#FFC0CB]" : " bg-slate-200"} px-4 py-1   cursor-pointer font-poppins text-xl`} >
              <p>M</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes('L') ? prev.filter((item)=> item !== "L") : [...prev, "L"])} className={`${sizes.includes("L") ? "bg-[#FFC0CB]" : " bg-slate-200"} px-4 py-1   cursor-pointer font-poppins text-xl`}>
              <p>L</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes('XL') ? prev.filter((item)=> item !== "XL") : [...prev, "XL"])} className={`${sizes.includes("XL") ? "bg-[#FFC0CB]" : " bg-slate-200"} px-4 py-1   cursor-pointer font-poppins text-xl`}>
              <p>XL</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes('XXL') ? prev.filter((item)=> item !== "XXL") : [...prev, "XXL"])} className={`${sizes.includes("XXL") ? "bg-[#FFC0CB]" : " bg-slate-200"} px-4 py-1   cursor-pointer font-poppins text-xl`}>
              <p>XXL</p>
            </div>
          </div>
          <div className='mt-5 mb-5  gap-3'>
             <div className='flex gap-3 mb-4'>
             <input type="checkbox" checked={bestSeller} onChange={(e)=> setBestSeller(prev =>  !prev)} />
             <p>Add to bestseller</p>
             </div>
            <button className='bg-black text-white px-10 py-2 cursor-pointer'>ADD</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add
