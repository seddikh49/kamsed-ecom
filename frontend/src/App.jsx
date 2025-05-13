import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Collection from '../src/pages/Collection'
import Contact from '../src/pages/Contact'
import Product from '../src/pages/Product'
import About from '../src/pages/About'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import SearchBar from './componets/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Confirm from './pages/Confirm'

const App = () => {
  return (
    <div className='px-4 xl:px-[10vh] lg:px-[4vh] md:px-[6vh] sm:px-[2vh] w-full '>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes> 
      <Route path='/' element={<Home/>} /> 
      <Route path='/about' element={<About/>} />  
      <Route path='/collection' element={<Collection/>} /> 
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/product/:productId' element={<Product/>} /> 
      <Route path='/confirm' element={<Confirm/>} /> 
      </Routes>
      <Footer/>
          </div>
  )
}

export default App
