import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

function AboutMe() {
    return (
        <div className='pb-12 pt-16 md:pt-32 px-4 md:px-8 bg-[#121121] '>
            <div className='lg:max-w-screen-xl md:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-12 items-center'>
                <div>
                    <h1 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
                        About Me
                    </h1>
                    <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize mb-12 font-bold text-white'>
                        Transforming <span className='text-yellow-400'>Visions</span>
                    </h2>
                    <div className='mb-12 flex items-center md:space-x-10'>
                        <span className='w-24 hidden md:block h-1 bg-slate-400 rounded-sm'></span>
                        <p className='text-lg text-slate-300 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, animi laborum dolores eaque beatae aspernatur, adipisci quisquam quis tempore in dolor alias.</p>
                    </div>
                    <button className='px-8 py-4 bg-[#55e6a5] hover:bg-yellow-400 transition-all duration-200 text-lg font-bold uppercase text-black flex items-center space-x-2 rounded-md'>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className='w-6 h-6 text-black'/>
                    </button>
                </div>
                <div className='mx-auto md:mx-0 mt-8 lg:mt-0 w-72 h-72 lg:w-[500px] lg:h-[500px] relative'>
                    <Image src="/images/about.jpg" alt="user" layout='fill' objectFit='contain' className='relative z-20 w-full h-full object-contain' />
                    <div className='absolute w-full h-full z-10 bg-[#55e6a5] -top-8 -right-8'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
