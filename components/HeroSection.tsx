import React from 'react'
import Particle from './Particles'
import TextEffect from './TextEffect'
function HeroSection() {
    return (
        <div className='h-[88vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'>
            <Particle />
            <div className='w-4/5 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
                <div>
                    <h1 className='text-4xl md:text-5xl text-white font-bold'>
                        Hi, I'm <span className='text-yellow-400'>SOHAN!</span>
                    </h1>
                    <TextEffect />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
