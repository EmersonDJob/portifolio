import React from 'react'
import { FaDownload, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center relative z-10 pb-10 '>
      <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
        <div className='md:space-y-6 px-4'>
          <h1 className='md:text-6xl px-4 font-bold mb-4 ' >Hi, I'm <p className='text-blue-400'>Emerson</p>Leme  </h1>
          <p className='md:text-2xl text-lg mb-3'>Full-Stack Developer</p>
          <p className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam iste ipsa dolores? Voluptas et quae eveniet obcaecati voluptatibus eaque dolorem fugiat labore cumque esse. </p>
          <button className='md:mt-3 px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'><FaDownload>
            </FaDownload>Download CV</button>
            <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
             <FaFacebook  className='hover:text-blue-400'/>
             <FaInstagram  className='hover:text-blue-400'/>
             <FaLinkedin className='hover:text-blue-400'/>
             <FaFacebook  className='hover:text-blue-400'/>
            </div>


        </div>
      </div>
    
    </section>
  )
}

export default Hero