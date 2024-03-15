import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const One = () => {
  return (
    <div className='bg-white h-8'>
        <div className=' mx-12 flex items-center justify-items-center'>
        < FaPhone />
        <a href="tel:(+64)1234567890"><i class="FaPhone"></i>(+64) 123 456 7890</a>
      <div className='text-slate-400 mx-12'>|</div>
      <div className='text-slate-4 text-xs'><MdEmail  className='text-green-5' /> axontheme@gmail.com</div>
      <div  style={{marginLeft:"6px"}} className='flex items-center text-green-500 text-xs'>
      <FaGlobe/>
      {/* <Select/> */}
      <div className='text-slate-400 mx-12'>|</div>
      </div>
<div className='flex items-center text-xs'>
<FaUser className='text-green-500'/>
{/* <Account/> */}
</div>
      </div>

    </div>
  )
}

export default One