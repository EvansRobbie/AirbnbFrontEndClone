import React, {useEffect, useState}  from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Navigation from './components/Navigation'
import { useMediaQuery } from "@react-hook/media-query";
import MobileNav from './components/MobileNav'
import MobileFooter from './components/MobileFooter'
// import Data from './Data'
import DataNav from './DataNav'
import './App.css';



export default function App(){
    const [apartments, setApartments] = useState([])

    useEffect(() =>{
        getApartments()
    },[])

    const getApartments = () =>{
        fetch("api/")
        .then(res => res.json())
        .then(data => setApartments(data))
    }

   
    const isSmallScreen  = useMediaQuery('only screen and (min-width: 780px)');

    const dataElement = apartments?.map((apartment )=> {
        return (<Card 
        key = {apartment.id}
        {...apartment}
        
        // img = {item.coverImg}
        // rating = {item.stats.rating}
        // reviewCount = {item.stats.reviewCount}
        // location = {item.location}
        // title = {item.title}
        // price = {item.price}
         />)
    })
    const navElements = DataNav.map((item) =>{
        return(<Navigation 
            key = {item.id}
            {...item}
            
        />)
    })
    return(
        <div>
       {isSmallScreen? <Navbar />:<MobileNav/>}
       {isSmallScreen? <hr className='text-gray-300'/>: null}
        <div className='grid grid-flow-col laptop:h-28 tablet:h-20 mobile:h-10  sticky top-20 bg-white'>
            <div className='  overflow-x-scroll flex flex-nowrap scrollbar-hide col-span-1 '>
                {navElements}
            </div>
            {isSmallScreen?(
            <div className='col-span-4 border-2 rounded-2xl h-10  p-6 w-24 mt-8 mr-10 flex items-center justify-center'>
                <img src={require("./assets/filter.png")} className="w-4 h-4 " alt=''/>
                <button className='ml-2'>Filters</button>
            </div>): null}
       </div>
       
       <div className = ' grid ml-10 laptop:mt-4 tablet:mt-3 mobile:gap-0 mobile:mt-7 mobile:mb-0 tablet:grid-cols-2 mobile:grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-4 '>
            {dataElement}
       </div>
       {isSmallScreen?<Footer/>:<MobileFooter/>}
       </div>
    )
}
//