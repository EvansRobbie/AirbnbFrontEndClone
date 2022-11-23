import React from 'react'
import {BsSearch} from 'react-icons/bs'

const MobileNav = () => {
  return (
    <nav className='bg-white sticky top-0 h-20'>
    <div className=' border text-base m-5 mt-4 mb-2 pl-5 font-medium flex tracking-wide rounded-full items-center shadow-[0px_2.98256px_7.4564px_rgba(0,0,0,0.1)] h-14 '>
        <div className='flex items-center text-sm '>
        <BsSearch/>
        </div>
        <div className='ml-5 py-5 text-sm'> 
        <p className='text-gray-700 font-semibold tracking-wider '>Where to?</p>
       
        
          <ul className='flex  text-xs text-gray-500  '>
            <li className='pl-3'>Anywhere</li>
            <li className='pl-3'>. Any week</li>
            <li className='pl-3'>. Add quests</li>
          </ul>
          </div>
          <div className='w-9 h-9 mobile:ml-28 tablet:ml-84 border rounded-full p-1 flex items-center font-serif'>
        <img src={require("../assets/filter.png")} className="w-5 h-5" alt=''/>
        </div>
        </div>
        </nav>  
   
    
  )
}

export default MobileNav