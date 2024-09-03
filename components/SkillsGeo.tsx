import Image from 'next/image'
import type { ImageLoaderProps } from 'next/image';
import React from 'react'
import typescrpt from "./../public/images/skills/typescript.png"


import SkillCard from './SkillCard'

enum Experience{
    Guru,
    Expert,
    Proficient,
    Intermediate,
    Beginner
}
interface Skill{
    image: string
    title: string
    experience: Experience
}


const skills:Skill[] = [
    {
        image: "typescript",
        title: "TypeScript",
        experience: Experience.Expert
    },
    {
        image: "javascript",
        title: "JavaScript",
        experience: Experience.Proficient
    },
    {
        image: "python",
        title: "Python",
        experience: Experience.Beginner
    }
]

function SkillsGeo() {
    return (
        <div className='bg-slate-700 pb-5'>
            <div className='text-center pt-5 md:pt-10  mx-auto lg:max-w-screen-xl md:max-w-screen-lg'>
                <h1 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
                    Skills
                </h1>
                <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize mb-12 font-bold text-white'>
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
            </div>
            <div className='text-center pt-5 md:pt-10 mx-auto lg:max-w-screen-xl md:max-w-screen-lg'>
                <div className='flex flex-row flex-wrap gap-x-28 gap-y-10 justify-center align-center'>
                    {
                        skills.map((skill, key) => {
                            return(
                                <SkillCard key={key} skill={skill} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default SkillsGeo
