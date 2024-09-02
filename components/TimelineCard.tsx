import { AcademicCapIcon } from '@heroicons/react/16/solid'
import React from 'react'

function TimelineCard() {
  return (
    <div className='flex flex-col justify-center items-center py-3'>
        <div className='w-12 rounded-full bg-yellow-400 p-2 ring-4 ring-black'>
            <AcademicCapIcon />
        </div>
        <div className='bg-yellow-400 my-5 p-4 rounded-lg text-center'>
            <h3 className='text-lg font-bold'>Masters in Geodesy and Geoinformatics</h3>
            <h4 className='text-base font-bold'>HafenCity University Hamburg</h4>
            <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse dolore suscipit magnam quo reiciendis eos ad facere.
            </p>
            <p className='text-base font-bold'>October, 2019 - August, 2024</p>
            <div className='text-md font-bold'>Skills: GIS, LiDAR, Satellite Image Analysis</div>
        </div>
    </div>
  )
}

export default TimelineCard
