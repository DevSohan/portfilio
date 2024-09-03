import React from 'react'
import TimelineCard from './TimelineCard'
interface Education {
    msc: Degree;
    bsc: Degree;
}

interface Degree {
    degree: string;
    varsity: string;
    city: string;
    country: string;
    startDate: string;
    endDate: string;
    skills: string[];
    position: string;
}

const education:Education = {
    msc: {
        degree: "Masters in Geodesy and Geoinformatics",
        varsity: "HafenCity Universität Hamburg",
        city: "Hamburg",
        country: "Germany",
        startDate: "October, 2019",
        endDate: "August, 2024",
        skills: ["GIS", "LiDAR", "Remote Sensing"],
        position: "left"
    },
    bsc: {
        degree: "Bachelor in Urban and Regional Planning",
        varsity: "Khulna University of Engineering and Technology",
        city: "Khulna",
        country: "Dhaka",
        startDate: "April, 2014",
        endDate: "April, 2018",
        skills: ["GIS", "LiDAR", "Remote Sensing"],
        position: "right"
    },
}

function Timeline() {
    return (
        <div className='bg-slate-500 pb-5'>
            <div className='text-center pt-5 md:pt-10  mx-auto lg:max-w-screen-xl md:max-w-screen-lg'>
                <h1 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
                    Education
                </h1>
                <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize mb-12 font-bold text-white'>
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
            </div>
            <div className='mx-auto lg:max-w-screen-xl md:max-w-screen-lg px-5 py-5 mb-5 md:px-0 md:py-12 md:mb-10 before:content-[""] before:w-2 before:bg-black before:h-full before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:z-0 relative md:flex md:flex-col lg:gap-y-6'>
                <TimelineCard align={"right"} info={education.bsc} />
                <TimelineCard align={"left"} info={education.msc} />
            </div>
        </div>
    )
}

export default Timeline
