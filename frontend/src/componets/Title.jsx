import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex  gap-5  items-center '>
        <p className='xl:w-12 sm:w-8 h-[2px] xm:w-6 bg-gray-400 '></p>
        <p className='text-gray-400 font-bold sm:text-2xl xm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>{text1 }</p>
        <p className=' text-gray-700 font-bold md:text-3xl xm:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl'>{text2 }</p>
      
    </div>
  )
}

export default Title
