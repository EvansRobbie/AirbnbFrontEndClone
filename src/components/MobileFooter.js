import React from 'react'
import { FaSearch,FaUserCircle } from 'react-icons/fa'
import {BsHeart} from 'react-icons/bs'
import useScrollDirection from '../useScrollDirection'

const MobileFooter = () => {
  const scrollDirection = useScrollDirection()
  return (
    <footer className={`sticky ${ scrollDirection === "down"? "-bottom-24": "bottom-0"} flex justify-center bg-white h-14 w-screen p-2 transition-all delay-100`}>
    <div className='w-20 col-span-1  ' >
    <FaSearch className='w-8 fill-gray-500 text-2xl'/>
    <span className='text-xs pt-3  text-gray-600 '>Explore</span>
    
    </div>
    <div className='w-20 col-span-1 ml-5' >
    <BsHeart className='w-8 fill-gray-500  text-2xl'/>
    <span className='text-xs pt-3   text-gray-600 '>Wishlist</span>
    
    </div>
    <div className='w-20 col-span-1 ml-5 ' >
    <FaUserCircle className='w-8 fill-gray-500 text-2xl'/>
    <span className='text-xs pt-3  text-gray-600 '>Login</span>
    
    </div>
    </footer>
  )
}

export default MobileFooter