import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

function MobileNavbar() {
  return (
    <div className='fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
            <div className='nav-link-mobile'>Home</div>
            <div className='nav-link-mobile'>About</div>
            <div className='nav-link-mobile'>Skills</div>
            <div className='nav-link-mobile'>Education</div>
            <div className='nav-link-mobile'>Blog</div>
            <div className='nav-link-mobile'>Contact</div>
        </div>
        <div className='absolute cursor-pointer top-8 right-8 w-8 h-8 text-yellow-400'>
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNavbar
