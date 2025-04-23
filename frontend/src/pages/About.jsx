import React from 'react'
import Title from '../componets/Title'
import { assets } from '../‏‏assets/frontend_assets/assets'
import NewsLetter from '../componets/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='flex gap-10 xl:flex-row sm:flex-col items-center justify-evenly mt-20'>
        <div>
          <img className='sm:w-[450px] xl:w-[500px] ' src={assets.about_img} alt="" />
        </div>
        <div className='flex flex-col gap-10 xl:w-1/2 sm:w-full font-poppins text-gray-700'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eligendi, odio a nesciunt itaque in culpa incidunt quae sunt, at soluta aperiam dolorum quia animi alias corporis saepe illum nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium tempora exercitationem repellat ipsum, ipsa perspiciatis, delectus neque molestiae omnis harum fugit. Maxime aut, earum natus pariatur ipsam esse alias.</p>
          <p>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum error harum nam nostrum alias voluptas praesentium est dolor veritatis, necessitatibus assumenda perspiciatis vero, officiis, nulla illum voluptatum facilis rem libero? ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium tempora exercitationem repellat ipsum, ipsa perspiciatis, delectus neque molestiae omnis harum fugit. Maxime aut, earum natus pariatur ipsam esse alias.</p>
          <b className='text-xl'>Our Mission</b>
          <p>Our mission ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consequuntur, hic ipsa doloribus, excepturi cupiditate dolore quo culpa molestiae earum numquam quaerat debitis quasi dolores quidem eos praesentium! Vel, ratione. adipisicing elit. Cum error harum </p>
        </div>
      </div>
      <div className='mt-10 flex flex-col gap-10'>
          <div className='my-10'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
          </div>
          <div className='flex  sm:flex-col xl:flex-row justify-between items-center'>
            <div className='py-15 px-10 border border-gray-400 flex gap-4 flex-col '>
              <h1 className='text-xl font-bold font-poppins'>Quality Assurance:</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in nihil excepturi tenetur? Id expedita nihil aliquam suscipit. Rem ip</p>
            </div>
            <div className='py-15 px-10 border border-gray-400 flex gap-4 flex-col '>
              <h1 className='text-xl font-bold font-poppins'>Convenience</h1>
              <p>sam necessitatibus quia aliquid deserunt sequi sint illo. Voluptatem, consequatur officia! acasper oisdy ereze roisd sded</p>
            </div>
            <div className='py-15 px-10 border border-gray-400 flex gap-4 flex-col '>
              <h1 className='text-xl font-bold font-poppins'>Exceptional Customer Service</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in nihil excepturi tenetur? Id expedita nihil aliquam suscipit. Rem ip</p>
            </div>
          </div>
        </div>
        <div className='mt-20'>
        <NewsLetter/>
        </div>
    </div>
  )
}

export default About
