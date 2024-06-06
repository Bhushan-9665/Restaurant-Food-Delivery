import React from 'react'

function CarouselItem({image, title}) {
  return (
    <div className='flex flex-col justify-center item-center cursor-pointer' >
      <img className='w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full 
      object-cover object-center' src={image} alt="food" />
      <span className='py-5 px-10 font-semibold text-xl text-gray-400 ' >{title}</span>
    </div>
  )
}

export default CarouselItem
