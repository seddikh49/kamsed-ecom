import React, { useEffect, useState } from 'react'
import { backEndUrl } from '../App';
import axios from 'axios'
import { toast } from 'react-toastify';


const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const  onHandleSubmit = async(e) =>{
    console.log(localStorage.getItem('token'))
    try {
      e.preventDefault();
      const response = await axios.post(backEndUrl+'/api/user/admin', {
        email,
        password
      });

      if(response.data.success){
        setToken(response.data.token)
        toast.success('successfully')
      }
      else{  
        toast.error('Wrong email or password')
      }
    } catch (error) {
  
    }
  }


  return (
    <div className='min-h-screen flex justify-center items-center bg-green-50/30 '>
         <div className='w-md flex flex-col gap-4 bg-white p-6 shadow-md'>
            <h1 className='text-3xl font-bold font-poppins'>Admin panel</h1>
            <form onSubmit={onHandleSubmit} className='w-full flex  flex-col gap-2 items-start ' action="">
                <div className='w-full flex  flex-col gap-1 font-poppins '>
                    <p>Email Adress</p>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='your@gmail.com' required className='font-poppins px-2 w-full py-2 border border-gray-300' type="text" />
                </div>
                <div className='w-full flex  flex-col gap-1 font-poppins'>
                    <p>Password</p>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Enter your password' required className='w-full px-2 py-2 border border-gray-300' type="text" />
                </div>
                <button className='mt-5 font-poppins w-full py-3 bg-black rounded-md text-white'>Login</button>
            </form>
         </div>
    </div>
  )
}

export default Login 
