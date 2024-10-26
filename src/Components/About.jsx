import React from 'react'
import image from "../assets/myProfile.png";
import {HERO_CONTENT} from "../Constant"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div>
              <motion.h1 
              whileInView={{opacity:1, y:0}}
              initial={{opacity:0, y:-100}}
              transition={{duration:1.5}}
              
              className='flex justify-center items-center text-5xl lg:text-6xl my-10'>About 
              <span className='text-gray-500'>me</span></motion.h1>
            <div className=' lg:flex gap-12'>
            < motion.div
            whileInView={{ opacity:1, x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration:0.5}}  
            className=' flex justify-center '>
                <img className='  rounded-2xl lg:w-[300px] lg:h-[350]  ' src={image} alt="" />
            </motion.div>
            <div 
            
            className='w-full lg:w-1/2 lg:p-8 ' 
             >
              <div className=' flex justify-center items-center break-all'>
                <motion.p
                whileInView={{ opacity:1, x:0}}
                initial={{x:100, opacity:0}}
                transition={{duration:0.5}}   
                 className='  my-10'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            </div> 
    </div>
  )
}

export default About
