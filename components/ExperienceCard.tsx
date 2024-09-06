import { AcademicCapIcon } from '@heroicons/react/16/solid'
import React from 'react'

enum Position{
    Left,
    Right
}
interface Degree {
    degree: string;
    varsity: string;
    city: string;
    country: string;
    startDate: string;
    endDate: string;
    skills: string[];
    position: Position;
}

interface Props{
    info: Degree
}

function ExperienceCard({info}: Props) {
    const alignClass = info.position == Position.Left ? "md:self-start" : "md:self-end"
    const iconPositionClass = info.position == Position.Right ? "md:flex-row" : "md:flex-row-reverse"
    const hoverborderClass = info.position == Position.Right ? "before:md:border-r-8 before:md:border-r-black before:md:-left-4" : "before:md:border-l-8 before:md:border-l-black before:md:-right-4"
    return (
        <div className={`flex flex-col justify-center items-center py-3 w-full md:w-1/2 ${iconPositionClass} md:space-x-0 md:px-8 md:justify-between md:items-start md:gap-x-6 lg:gap-x-10 ${alignClass}`}>
            <div className='w-12 rounded-full bg-yellow-400 p-2 ring-4 ring-black ring-inset'>
                <AcademicCapIcon />
            </div>
            <div className={`bg-yellow-400 my-5 p-4 rounded-lg text-center md:text-left md:my-0 md:relative md:w-4/5 before:md:content-[""] before:md:border-8 before:md:border-solid before:md:border-transparent before:md:h-4 before:md:w-4 before:md:absolute ${hoverborderClass}`}>
                {/**border:7px solid transparent
                 * border-right: 7px solid #fff
                 */}
                <h3 className='text-lg font-bold'>{info.degree}</h3>
                <h4 className='text-base font-semibold'>{info.varsity}</h4>
                <h4 className='text-sm uppercase'>{`${info.city}, ${info.country}`}</h4>
                {/* <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse dolore suscipit magnam quo reiciendis eos ad facere.
                </p> */}
                <p className='text-sm'>{`${info.startDate} - ${info.endDate}`}</p>
                <div className='text-sm'>
                    <div className='flex flex-row gap-x-3'>
                    {
                        info.skills.map((skill, key) => {
                            return(
                                <span className='py-1 px-2 bg-slate-400 space-x-1' key={key}>{skill}</span>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ExperienceCard
