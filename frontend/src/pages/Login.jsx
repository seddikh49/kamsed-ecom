import React from 'react'
import { useState, useContext,useEffect } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/shopContext';
import { toast } from 'react-toastify';


const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { backend_url,token,setToken ,navigate} = useContext(ShopContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backend_url}api/user/register`, {
          name,
          email,
          password
        });
        if (response.data.success) {
          toast.success(response.data.msg)
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)

        } else {
          toast.error(response.data.msg)
        }
      }
      else {
        const response = await axios.post(`${backend_url}api/user/login`, {
          email,
          password
        });
        if(response.data.success){
          toast.success("success login")
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else{
          toast.error(response.data.msg)
        }

      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(token){  
      navigate('/')
    }
  }, [token]);

  const [currentState, setCurrentState] = useState('Login');
  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} action="" className='w-96 flex-col gap-5 text-gray-800 flex justify-center items-center'>
        <div className='inline-flex justify-between items-center font-bold font-poppins mb-5 gap-1'>
          <h1 className='text-4xl'>{currentState} </h1>
          <hr className='w-8 h-[2px] '></hr>
        </div>
        {currentState === 'Sign Up' ? <input value={name} placeholder='Name' className='border font-poppins px-3 py-2 w-96' onChange={(e) => setName(e.target.value)} required
          type="text" /> : ('')}
        <input placeholder='Email' className='border font-poppins px-3 py-2 w-full ' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        <input placeholder='Password' value={password} required className='border font-poppins px-3 py-2 w-full' type="password" onChange={(e) => setPassword(e.target.value)} />
        <div className='flex font-poppins cursor-pointer justify-between  w-full'>
          <p>Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer underline font-poppins'>Create account</p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer underline font-poppins'>Login</p>
          )}
        </div>
        <button className='bg-black text-2xl text-amber-50 px-10 py-1 font-poppins'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  )
}

export default Login
