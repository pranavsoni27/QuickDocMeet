import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*..........left............*/}
                <div>
                        <img className='mb-5 w-40' src={assets.logo} alt="" />
                        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Our branches are also located at: Jaipur, Delhi, Mumbai.</p>
                </div>


                {/*..........center............*/}
                <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                        </ul>
                </div>


                {/*..........right............*/}
                <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                                <li>+91 999-888-7777</li>
                                <li>quickdocmeet@gmail.com</li>
                        </ul>
                </div>
        </div>
        <div>
                {/*...........copyright text..............*/}
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ QuickDocMeet - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer