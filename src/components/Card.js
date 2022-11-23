import React from 'react'
import {BsHeart} from 'react-icons/bs'

export default function Card(props){
    
    // let badgeText
    // if(props.item.openSpots === 0){
    //     badgeText = "SOLD OUT"
    // } else if(props.item.location === "Online"){
    //     badgeText = "Online"
    // }
    
    return(
        <div className="flex flex-col">
        {/* {badgeText && <div className ="card--badge">{badgeText}</div>} */}
        <img src = {props.image} className="tablet:h-70 mobile:h-96 w-11/12 rounded-xl  " alt=''/>
        <BsHeart className ="cursor-pointer absolute mt-5 tablet:ml-64 mobile:ml-90 text-xl fill-white hover:shadow-outline "/>
        <div className = " flex justify-between items-center my-5 ">
            <div >
            <span className = "font-semibold text-lg ">{props.city}</span> 
            <span className = "font-semibold text-lg">,{props.country}</span> 
                {/* <span className = "gray">({props.item.stats.reviewCount})</span> */}
                      
                <p className="text-gray-500">{props.distance}</p>
                <p className="text-gray-500">{props.check_in} - {props.check_out}</p>
                <p><span className= "font-semibold ">${props.price}</span> night</p>
            </div>
            <div className='flex mr-10 items-center mt-0'>
                <img src={require("../assets/star.png")} className ="w-4" alt=''/>
                <span className='p-2 text-lg m-0'>{props.ratings}</span>
            </div>
           </div>   
        </div>
    )
}