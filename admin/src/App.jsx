import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import Orderdetail from './pages/Orderdetail'



export const backEndUrl = import.meta.env.VITE_BACK_END_URL


const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');


  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token]);

  return (
    <div className='bg-gray-50 min-h-screen w-full relative '>
      <ToastContainer />
      {token === "" ? <Login setToken={setToken} />
        : (
          <>
            <NavBar setToken={setToken} />
            <hr className='opacity-20 text-gray-600' />

            <div className='flex w-full justify-end relative '>
              <div className='xl:w-[85%] lg:w-[85%] md:w-[85%] xm:w-full sm:w-full'>
                <Routes>
                  <Route path='/add' element={<Add token={token} />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/list' element={<List token={token} />} />
                  <Route path='/orderdetail/:name' element={<Orderdetail token={token} />} />
                </Routes>
              </div>
              <div className='xl:w-56  lg:block lg:w-52 md:w-44 sm:w-20 xm:w-12  '>
                <SideBar />
              </div>
            </div>
          </>
        )
      }
      
    </div>
  )
}

export default App
