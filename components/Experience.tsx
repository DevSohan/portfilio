import React from 'react'
import ExperienceCard from './ExperienceCard';

enum Position{
    Left,
    Right
}
interface Experience {
    degree: string;
    varsity: string;
    city: string;
    country: string;
    startDate: string;
    endDate: string;
    skills: string[];
    position: Position;
}

const experiences:Experience[] = [
    {
        degree: "Masters in Geodesy and Geoinformatics",
        varsity: "HafenCity Universität Hamburg",
        city: "Hamburg",
        country: "Germany",
        startDate: "October, 2019",
        endDate: "August, 2024",
        skills: ["GIS", "LiDAR", "Remote Sensing"],
        position: Position.Left
    },
    {
        degree: "Bachelor in Urban and Regional Planning",
        varsity: "Khulna University of Engineering and Technology",
        city: "Khulna",
        country: "Dhaka",
        startDate: "April, 2014",
        endDate: "April, 2018",
        skills: ["GIS", "LiDAR", "Remote Sensing"],
        position: Position.Right
    },
]
function Experience() {
    return (
        <div className='bg-slate-500 pb-5'>
            <div className='text-center pt-5 md:pt-10  mx-auto px-4 md:px-8 lg:max-w-screen-xl md:max-w-screen-lg'>
                <h1 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
                    Education
                </h1>
                <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize mb-12 font-bold text-white'>
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
            </div>
            <div className='mx-auto lg:max-w-screen-xl md:max-w-screen-lg px-5 py-5 mb-5 md:px-0 md:py-12 md:mb-10 before:content-[""] before:w-2 before:bg-black before:h-full before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:z-0 relative md:flex md:flex-col lg:gap-y-6'>
                {
                    experiences.map((experience, key)=>{
                        return(
                            <ExperienceCard key={key} info={experience} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience
