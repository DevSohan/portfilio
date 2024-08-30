import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
    
}

function Navbar() {
    return (
        <div className='w-full top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-4/5 mx-auto h-full'>
                <h1 className='flex-[0.6] cursor-pointer text-2xl text-white font-bold'>
                    MS
                    <span className='text-yellow-300'>Rahman</span>
                </h1>
                <div className='nav-link'>Home</div>
                <div className='nav-link'>About</div>
                <div className='nav-link'>Skills</div>
                <div className='nav-link'>Education</div>
                <div className='nav-link'>Blog</div>
                <div className='nav-link'>Contact</div>
                <div>
                    <Bars3Icon className='w-6 md:hidden h-6 cursor-pointer text-yellow-400' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
