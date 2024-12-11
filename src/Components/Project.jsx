import React from 'react'
import {PROJECTS} from "../Constant";
import { motion } from 'framer-motion';




const Project = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        
        className='text-center text-5xl my-20'>Project</motion.h1>
        <div>  
            {PROJECTS.map((assets, index) =>(

                <div key={index} className=' flex flex-wrap lg:justify-center gap-10  mb-8'>

                   <motion.div
                   whileInView={{opacity:1, x:0}}
                   initial={{opacity:0, x:-100}}
                   transition={{duration:1}}
                   
                   >
                        <img 
                        src={assets.image}
                        width={150}
                        height={150}
                        alt="assets.title"
                        className='mb-6 mr-20 rounded'
                        
                        
                        
                        />
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:100}}
                        transition={{duration:1.5}}
                        className=' lg:w-1/2'>
                            <h6 className='mb-2'>assets.title</h6>
                            <p className='mb-4'>{assets.description}</p>
                         {assets.Technologies.map((tech, index) =>(
                            <span 
                            key={index} 
                            className='m-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                           ))} 
                         
                        </motion.div>
                        
                              </div>
            ))}     
        </div>
      
    </div>
  )
}

export default Project
