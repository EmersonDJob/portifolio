import React from 'react'
import { SlAnchor } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className='bg-gray-800 -mb-7 z-50 w-full py-3 fixed '>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0 '>
          {/* logo section */} 
          <div className='flex gap-2 '>
            <p className='text-emerald-800 text-xl font-extrabold '>Emerson</p>
            <p className='text-amber-500  text-xl font-extrabold'>DLL</p>
          </div>
           {/* Menu section */}
          <nav className=' hidden md:block'>
            <ul className='flex gap-7 text-xl items-center font-semibold text-amber-50'>
                <a href='/' ><li className='cursor-pointer'>Home</li></a> 
                <a href='#about' ><li className='cursor-pointer'>Home</li></a> 
                <a href='#education' ><li className='cursor-pointer'>Education & Exprerience</li></a> 
                <a href='#project' ><li className='cursor-pointer'>Projects</li></a> 
                <a href='#contact'><button className='px-3 py-1 cursor-pointer rounded-md bg-emerald-800 text-amber-500 flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]
                shadow-emerald-800 border-emerald-600 border-2'>Contacts<SlAnchor /></button></a>
            </ul>
          </nav>
          
        </div>
    </div>
  )
}

export default Navbar