import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Collection from '../src/pages/Collection'
import Card from '../src/pages/Card'
import Contact from '../src/pages/Contact'
import PlaceOrder from '../src/pages/PlaceOrder'
import Product from '../src/pages/Product'
import Orders from '../src/pages/Orders'
import About from '../src/pages/About'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import SearchBar from './componets/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 xl:px-[10vh] lg:px-[4vh] md:px-[6vh] sm:px-[2vh] w-full'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes> 
      <Route path='/' element={<Home/>} /> 
      <Route path='/about' element={<About/>} />  
      <Route path='/collection' element={<Collection/>} /> 
      <Route path='/card' element={<Card/>} /> 
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/place-order' element={<PlaceOrder/>} /> 
      <Route path='/login' element={<Login/>} /> 
      <Route path='/product/:productId' element={<Product/>} /> 
      <Route path='/orders' element={<Orders/>} /> 
      </Routes>
      <Footer/>
          </div>
  )
}

export default App
