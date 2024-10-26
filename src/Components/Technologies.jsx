import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { motion } from 'framer-motion';

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div  className='pb-24'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        
        className='text-center my-20 text-4xl'>Technologies</motion.h1>
        <div  className=' flex flex-wrap items-center justify-center gap-4'>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-7xl text-cyan-400' />
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-cyan-400' />
            </motion.div>
           
            <motion.div 
            variants={iconVariants(9)}
            initial="initial"
            animate="animate"className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb className='text-7xl text-green-500' />
            </motion.div>
        
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                < FaJs className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(9)}
            initial="initial"
            animate="animate"
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-7xl text-red-700' />
            </motion.div>
           
        </div>
      
    </div>
  )
}

export default Technologies
