import React from 'react'

const Navigation = (props) => {
  return (
   <>
    <nav className='ml-6 laptop:mt-10 tablet:mt-2 mobile:mt-0 flex-col flex-nowrap items-center ' >
        <div className='w-20 col-span-1 ' >
        <img src ={require(`../assets/${props.coverImg}`)} alt='' className='laptop:w-8 tablet:w-6 mobile:w-4   hover:bg-airbnbBackground'/>
        <span className='text-xs pt-3 cool-link  text-gray-600 '>{props.title}</span>
        
        </div>
        <button className='col-span-4'></button>
    </nav>
        
    </>
  )
}

export default Navigation