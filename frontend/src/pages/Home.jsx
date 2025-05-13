import React from 'react'
import Hero from '../componets/Hero'
import LatestCollection from '../componets/LatestCollection'
import { useState, useEffect } from 'react'
import BestSellers from '../componets/BestSellers'
import Policy from '../componets/Policy'
import { Helmet } from "react-helmet";



const Home = () => {


  return (
    <div className='w-full '>
      {/* <Helmet>
        <title>الصفحة الرئيسية</title>
        <meta name="description" content="اكتشف أفضل العروض والمنتجات في متجرنا الإلكتروني – ملابس، إلكترونيات، إكسسوارات والمزيد! توصيل سريع وخدمة عملاء مميزة."/>
      </Helmet> */}
      <Hero />
      <LatestCollection />
      <Policy />
    </div>
  )
}

export default Home
