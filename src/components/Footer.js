import React from 'react'
import {TbWorld, } from 'react-icons/tb'
import {FaChevronUp } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-white flex justify-between ml-10 h-14 sticky bottom-0 mobile:items-center text-sm'>
        <div className="flex items-center text-gray-600 tracking-wide ">
       <span>&copy; 2022 Airbnb-clone,Inc.</span>
       <ul className='flex p-2 m-2'>
            <li>Privacy .</li>
            <li>Terms .</li>
            <li>Sitemap .</li>
            <li>Destination</li>
       </ul>
       </div>
        <div className=' flex items-center p-3 m-3 text-gray-700 '>
            <span className='ml-3'><TbWorld className='text-2xl'/></span>
            <span className='ml-3'>English(US)</span>
            <span className='ml-6'>$</span>
            <span className='ml-2'>USD</span>
            <span className='ml-6'>Support & Resources</span>
            <FaChevronUp className='ml-2'/>
        
        </div>
    </footer>
  )
}

export default Footer 
