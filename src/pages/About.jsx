import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to QuickDocMeet, your trusted partner in managing your healthcare needs conveniently and efficiently. At QuickDocMeet, we understand the challenges indiniduals face when it comes to scheduling doctor appointments and managing theirhealth records.</p>
            <p>QuickDocMeet is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care. QuickDocMeet is here to support you every step of the wway.</p>
            <b className='text-gray-800
            '>Our Vision</b>
            <p>At QuickDocMeet our vision is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
    </div>
  )
}

export default About