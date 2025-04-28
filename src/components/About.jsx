import React from 'react'
import N1 from '../assets/N1.png'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <div className='py-20 bg-gray-900 z-50 text-gray-300'>
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>Um pouco sobre mim </h2>
            <div className='flex flex-col md:flex-row gap-20 items-center'>
                {/* img section */}
                <div className='relative border hidden md:block border-blue-600 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                     <img src={N1} alt='' className='w-[300px] md:w-[500px] rounded-full border-blue-600 border  ' />
                </div>
                {/* paragraph section */}
                <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rbga(0,0,0,0.3)] shadow-blue-500' >
                    <p className='text-lg leading-7 mb-6'>Olá! Sou Emerson Leme, um apaixonado desenvolvedor full-stack com expertise em C#, ASP.NET CORE e Angular. Com sólida formação em desenvolvimento web moderno e atenção aos detalhes, crio soluções web elegantes e fáceis de usar, sob medida para atender às necessidades dos clientes.</p>
                    <p className='text-lg leading-7 mb-6'>
                    Minha jornada na tecnologia começou com uma experiência no Senac-MS, onde fiz um curso técnico em ciência da computação para internet e abracei todos os desafios para aprimorar minhas habilidades em desenvolvimento, resolução de problemas e trabalho em equipe. Estou sempre em busca de aprender e explorar novas tecnologias para oferecer experiências web de ponta.
                    </p>
                    <p className='text-lg leading-7 mb-6'>Gosto muito de me aventurar em novas tecnologias, escrevendo códigos em outras linguagens. Sou formado em Análise e Desenvolvimento de Sistemas pela Faculdade Estácio de Sá e atualmente curso Engenharia de Software na Gran Faculdade. Aprender é realmente uma paixão.</p>
                    <div className='mt-5'>
                      <h1 className='font-bold text-2xl mb-5 text-blue-400'>Meus Conhecimentos</h1>
                      <div className='flex flex-wrap gap4 mb5 text-sm'>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>C#</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>ASP NET CORE</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>SQL SERVER</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>React</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>Angular </p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>Node js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>Javascript</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full '>Tailwind</p>
                      </div>
                      <button className='mt-5 px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact <FaChevronRight /></button>


                    </div>
                </div>                    

            </div>



        </div>
    </div>
  )
}

export default About