// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import Home from '../src/pages/Home'
// import Collection from '../src/pages/Collection'
// import Contact from '../src/pages/Contact'
// import Product from '../src/pages/Product'
// import About from '../src/pages/About'
// import Navbar from './componets/Navbar'
// import Footer from './componets/Footer'
// import SearchBar from './componets/SearchBar'
// import { ToastContainer, toast } from 'react-toastify';
// import Confirm from './pages/Confirm'

// const App = () => {
//   return (
//     <div className='px-4 xl:px-[10vh] lg:px-[4vh] md:px-[6vh] sm:px-[2vh] w-full '>
//       <ToastContainer/>
//       <Navbar/>
//       <SearchBar/>
//       <Routes> 
//       <Route path='/' element={<Home/>} /> 
//       <Route path='/about' element={<About/>} />  
//       <Route path='/collection' element={<Collection/>} /> 
//       <Route path='/contact' element={<Contact/>} /> 
//       <Route path='/product/:productId' element={<Product/>} /> 
//       <Route path='/confirm' element={<Confirm/>} /> 
//       </Routes>
//       <Footer/>
//           </div>
//   )
// }

// export default App
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Lottie from 'lottie-react'
// تحميل المكونات بشكل ديناميكي عند الحاجة
const Home = React.lazy(() => import('../src/pages/Home'));
const Collection = React.lazy(() => import('../src/pages/Collection'));
const Contact = React.lazy(() => import('../src/pages/Contact'));
const Product = React.lazy(() => import('../src/pages/Product'));
const About = React.lazy(() => import('../src/pages/About'));
const Confirm = React.lazy(() => import('./pages/Confirm'));
import loading from '../src/loading.json'

const Navbar = React.lazy(() => import('./componets/Navbar'));
const Footer = React.lazy(() => import('./componets/Footer'));
const SearchBar = React.lazy(() => import('./componets/SearchBar'));

const App = () => {
  return (
    <div className="px-4 xl:px-[10vh] lg:px-[4vh] md:px-[6vh] sm:px-[2vh] w-full">
      <Suspense fallback={<div className='flex justify-center items-center h-dvh w-full'>
         <Lottie className='w-36'
          animationData={loading}
          loop={true}
        /></div>}>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;