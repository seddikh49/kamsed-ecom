import React from 'react'
import Hero from '../componets/Hero'
import LatestCollection from '../componets/LatestCollection'
import { useState ,useEffect } from 'react'
import BestSellers from '../componets/BestSellers'
import Policy from '../componets/Policy'
import NewsLetter from '../componets/NewsLetter'


const Home = () => {

  
  return (
    <div className='w-full '>
       <Hero/>
       <LatestCollection/> 
       <BestSellers/>
       <Policy/>
       <NewsLetter/>
    </div>
  )
}

export default Home
