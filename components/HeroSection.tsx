import React from 'react'
import Particle from './Particles'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'

function HeroSection() {
    return (
        <div className='h-[100vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'>
            <Particle />
            <div className='w-4/5 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
                <div className='flex flex-col gap-y-4'>
                    <h1 className='text-4xl md:text-5xl text-white font-bold'>
                        Hi, I'm <span className='text-yellow-400'>SOHAN!</span>
                    </h1>
                    <TextEffect />
                    <p className='text-[#ffffff92] text-lg mt-8'>
                    Versatile Software Developer with a strong foundation in web development and a growing expertise in data science, web and mobile applications. Passionate about coding and adept at learning new programming languages, leveraging a solid understanding of Object-Oriented Programming.
                    </p>
                    <div className='mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-8 py-4 bg-[#55e6a5] hover:bg-yellow-400 transition-all duration-200 text-lg font-bold uppercase text-black flex items-center space-x-2 rounded-md'>
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className='w-6 h-6 text-black'/>
                        </button>
                    </div>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="/images/u1.jpg" alt="user" layout="fill" className='object-cover rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
