
import React from 'react'
import { HERO_CONTENT } from "../Constant";
import myProfile from "../assets/myProfile.png";
import { motion, transform } from "framer-motion"

const container = (delay)=>({
  hidden: {x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition: {duration:0.5, delay:delay},
  },
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:pb-12'>
      <div className='flex flex-wrap justify-center lg:items-start lg:justify-between  '>
        
        {/* Text Section */}
        <div className='w-full lg:w-1/2  lg:text-left lg:mb-0'>
          <motion.h1
          variants={container(0)}
          initial = "hidden"
          animate = "visible"

       
          className='text-5xl sm:text-6xl font-thin tracking-tight lg:text-7xl lg:mt-10'>
            Khemraj Saud
          </motion.h1>
          <motion.span
          variants={container(0.5)}
          initial = "hidden"
          animate = "visible"
          
           className='block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl text-transparent mt-10'>
            Full Stack Developer
          </motion.span>
          <motion.p 
          variants={container(1)}
          initial = "hidden"
          animate = "visible"
          className='mt-3  break-all sm:break-all'>
            {HERO_CONTENT}
          </motion.p>
        </div>
        
        {/* Image Section */}
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center'>
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            
            className=' lg:w-7/12 h-[400px] pt-10 rounded-lg shadow-gray-900'  src={myProfile} alt="myProfile" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero;

