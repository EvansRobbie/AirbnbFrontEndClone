import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {TbWorld, } from 'react-icons/tb'
import {FaBars,FaUserCircle} from 'react-icons/fa'



export default function Navbar(){
    
    return( 
        <nav className=' bg-white h-20 flex justify-between items-center shadow-3xl sticky top-0 '>
            <img src={require("../assets/airbnb.png")} className="w-25 h-9 m-10" alt=''/>
            <div className=" border-2 text-base pl-5 font-medium tracking-wide rounded-full items-center justify-center shadow shadow-airbnbShadow m-auto grid grid-cols-3 divide-x h-12 w-1/4 mobile:truncate hover:shadow-gray-500">
                    <span className='tablet:truncate text-sm'>Anywhere</span>
                    <span className='pl-5 tablet:truncate text-sm'>Any week</span>
                    <ul className='flex items-center pr-2 tablet:truncate '>
                        <li>
                    <span className='text-xs pl-1 font-medium text-gray-400 tablet:truncate'>Add guests</span>
                    </li>
                    <li className='ml-1 bg-airbnb rounded-full w-10 h-6 flex items-center justify-center'> 
                    <BsSearch className='fill-white '/>
                    </li>
                    </ul>

            </div>
            <div className="flex items-center justify-end mr-10 w-96 ">
                <span className='p-3 h-10 flex items-center  font-medium text-sm  hover:bg-airbnbBackground rounded-full'>Become a Host</span>
                <span className='p-3 text-xl hover:bg-airbnbBackground rounded-full flex items-center'><TbWorld/></span>
                <div className='border-2 rounded-full w-1/5 w h-1/12 flex items-center hover:shadow-3xl  '>
                    <ul className='flex items-center p-2 justify-between '>
                        <li>
                        <span className='text-sm '><FaBars className=' fill-gray-500 '/></span>
                        </li>
                        <li>
                        <span className='text-2xl flex ml-5 '><FaUserCircle className=' fill-gray-500'/></span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>

    )
}