import React from 'react'

const Footer = () => {
  const date = new Date()

  return (
    <div className=''>
      <div className='xl:flex  xl:justify-around sm:justify-center items-start mt-20 mb-10 '>
        
      <div className='flex flex-col gap-5' dir='rtl'>
          <h1 className='text-2xl font-extrabold text-gray-600 font-cairo '>تواصل معنا</h1>
          <ul>
            <li className='text-lg font-abold text-gray-600 font-poppins'>+213 664 75 32 37</li>
            <li className='text-lg font-abold text-gray-600 font-poppins'>contact@sedever.com</li>
          </ul>
        </div>
        
        <div className='flex flex-col gap-5 mb-10'>
          <h1 className='text-2xl font-extrabold text-gray-600 font-cairo' style={{ direction: 'rtl' }}>الشركة</h1>
          <ul style={{ direction: 'rtl' }}>
            <li className='text-lg font-abold text-gray-600 font-cairo'>الرئيسية</li>
            <li className='text-lg font-abold text-gray-600 font-cairo'>من نحن</li>
            <li className='text-lg font-abold text-gray-600 font-cairo'>التوصيل</li>
            <li className='text-lg font-abold text-gray-600 font-cairo'>الخصوصية</li>
          </ul>
        </div>


        <div className='xl:max-w-1/2 sm:w-full mb-10 flex flex-col sm:flex-col  items-start  gap-5 justify-start ' dir='rtl'>
          <h1 className="text-4xl   font-extrabold  text-gray-600 font-cairo ">
            كامسد<span className="text-orange-400 aspect-square font-cairo">.</span>
          </h1>
          <p className='text-lg font-abold text-gray-600 font-cairo'>شركة متخصصة في بيع المنتجات عالية الجودة، تهدف إلى تلبية احتياجات العملاء من خلال توفير تشكيلة واسعة من السلع بأسعار تنافسية وخدمة موثوقة.
          </p>
        </div>
      </div>
 
      <div className='text-center  py-6 text-xl font-light text-gray-600 font-poppins border-gray-400  border-t-1'>Copyright {date.getFullYear()}@forever.com - All Right Reserved </div>
    </div>
  )
}

export default Footer
