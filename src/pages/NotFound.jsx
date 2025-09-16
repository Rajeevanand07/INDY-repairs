import React from 'react'
import ButtonRed from '../components/ButtonRed'
const NotFound = () => {
  return (
    <div className='relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-white'>      
      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center text-center px-4'>
        <h1 className='text-[10rem] md:text-[20rem] font-bold text-red-gradient leading-none'>
          4<span className='text-[#E81C2E]'>0</span>4
        </h1>
        <p className='text-[16px] font-semibold text-[#7A7A7A] mb-8 max-w-md'>
          Sorry, the page you are looking for does not exist.
        </p>
        <ButtonRed text="Go Back Home" />
      </div>
    </div>
  )
}

export default NotFound