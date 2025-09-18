import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'

// Minimal, reusable fade-up animation config
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 }
}

const NotFound = () => {
  return (
    <div className='relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-white'>      
      {/* Content */}
      <motion.div className='relative z-10 flex flex-col items-center justify-center text-center px-4' {...fadeUp}>
        <h1 className='text-[10rem] md:text-[20rem] font-bold text-red-gradient leading-none'>
          4<span className='text-[#E81C2E]'>0</span>4
        </h1>
        <p className='text-[16px] font-semibold text-[#7A7A7A] mb-8 max-w-md'>
          Sorry, the page you are looking for does not exist.
        </p>
        <Button to="/" text="Go Back Home" />
      </motion.div>
    </div>
  )
}

export default NotFound