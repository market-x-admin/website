import React from 'react'
import { FcCallback } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";
const ConatctUs = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center lg:mb-28'>

     <h1 className='font-semibold text-5xl pb-4'> LET'S CHAT!</h1>
     <p className='mb-10'>We would Love to hear from You</p>
     <div className='lg:flex justify-between items-center w-full px-40'>
        <div className='flex items-center flex-col'>
            <FcCallback
            className='text-2xl mb-4'
            />
            <p>+970597861621</p>
        </div>
        <div className='flex items-center flex-col'>
            <SiMinutemailer
             className='text-2xl mb-4'
            />
            <p>Matrix X@2023gmail.com</p>
        </div>
       
     </div>
    </div>
  )
}

export default ConatctUs