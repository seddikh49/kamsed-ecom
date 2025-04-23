import React from 'react'

const NewsLetter = () => {


  const onSubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div  className='text-center'>
        <h1 className='font-light text-3xl text-gray-600 font-poppins text-center'>Subscribe now & get 100% off</h1>
        <p className='font-light text-xl mt-3 text-gray-600 font-poppins text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut dolorem, architecto inventore iste,</p>
     <form onSubmit={onSubmitHandler} action="" className='flex xl:w-4/9 sm:w-full lg:w-2/3  md:w-2/3  my-6 border mx-auto xm: '>
        <input className='xl:w-1/2 text-xl font-poppins xm:w-2/3 sm:w-full flex-1 pl-4 outline-none py-2' type="email" placeholder='Enter your email' required />
        <button type='submit' className='text-amber-50 cursor-pointer font-bold font-poppins py-4 px-10 bg-black'>SUBSCRIBE</button>
     </form>
    </div>
  )
}

export default NewsLetter

