import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className='flex justify-between py-6 mb-20 '>
    <div className='items-center'>
      <h1 className='font-bold text-2xl'>KS</h1>
    </div>
    <div className='flex items-center justify-center gap-4 text-2xl'>
    <FaLinkedin/>
      <FaTwitter/>
      <FaGithub/>
   
    <FaInstagram/>
    </div>

    </nav>
  )
}

export default Navbar
