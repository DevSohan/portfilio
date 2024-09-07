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

interface SkillSet{
    title: string
    skills: Skill[]
}


const skills:Skill[] = [
    {
        image: "qgis",
        title: "QGis",
        experience: Experience.Proficient
    },
    {
        image: "arcgis",
        title: "ArcGIS Map",
        experience: Experience.Proficient
    },
    {
        image: "arcgis-pro",
        title: "ArcGIS Pro",
        experience: Experience.Intermediate
    },
/*     {
        image: "typescript",
        title: "OpenStreetsMap",
        experience: Experience.Expert
    }, */
    


]

const newSkills:SkillSet[] = [
    {
        title: "Geo-spatial Technologies",
        skills: [
            {
                image: "qgis",
                title: "QGis",
                experience: Experience.Proficient
            },
            {
                image: "arcgis",
                title: "ArcGIS Map",
                experience: Experience.Proficient
            },
            {
                image: "arcgis-pro",
                title: "ArcGIS Pro",
                experience: Experience.Intermediate
            },
        ]
    },
    {
        title: "Modeling and Visualisation",
        skills: [
            {
                image: "autocad",
                title: "AutoCAD",
                experience: Experience.Beginner
            },
            {
                image: "revit",
                title: "Revit",
                experience: Experience.Beginner
            },
        ]
    },
    {
        title: "Programming and Scripting",
        skills: [
            {
                image: "python",
                title: "Python",
                experience: Experience.Proficient
            },
            {
                image: "sql",
                title: "SQL",
                experience: Experience.Proficient
            },
            {
                image: "typescript",
                title: "TypeScript",
                experience: Experience.Proficient
            },
            {
                image: "javascript",
                title: "JavaScript",
                experience: Experience.Proficient
            },
            {
                image: "nodejs",
                title: "NodeJs",
                experience: Experience.Beginner
            },
            {
                image: "react",
                title: "React",
                experience: Experience.Expert
            },
            {
                image: "jquery",
                title: "JQuery",
                experience: Experience.Expert
            },
            {
                image: "flask",
                title: "Flask",
                experience: Experience.Intermediate
            },
            {
                image: "django",
                title: "DJango",
                experience: Experience.Intermediate
            },
            {
                image: "rest-api",
                title: "Rest API",
                experience: Experience.Expert
            },
        ]
    },
    {
        title: "Databases",
        skills: [
            {
                image: "postgres",
                title: "PostgreSQL",
                experience: Experience.Proficient
            },
            {
                image: "postgis",
                title: "PostGIS",
                experience: Experience.Beginner
            },
            {
                image: "mongodb",
                title: "MongoDB",
                experience: Experience.Intermediate
            },
            {
                image: "mysql",
                title: "MySQL",
                experience: Experience.Expert
            },
        ]
    },
    {
        title: "DevOps",
        skills: [
            {
                image: "git",
                title: "Git",
                experience: Experience.Proficient
            },
            {
                image: "github",
                title: "Github",
                experience: Experience.Proficient
            },
            {
                image: "gitlab",
                title: "GitLab",
                experience: Experience.Intermediate
            },
            {
                image: "docker",
                title: "Docker",
                experience: Experience.Proficient
            },
        ]
    },
]

function SkillsGeo() {
    return (
        <div className='bg-[#09101A] pb-5'>
            <div className='text-center pt-5 md:pt-10  mx-auto px-4 md:px-8 lg:max-w-screen-xl md:max-w-screen-lg'>
                <h1 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
                    Skills
                </h1>
                <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize font-bold text-white'>
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
            </div>
            <div className='text-center mx-auto mb-3 md:mb-10 lg:mb-16 lg:max-w-screen-xl md:max-w-screen-lg'>
                {
                    newSkills.map((skillset, key) => {
                        return(
                            <div key={key}>
                                <h2 className='text-2xl font-bold antialiased text-white py-6 md:pb-10 md:pt-16'>{skillset.title}</h2>
                                <div className='flex flex-row flex-wrap gap-x-16 gap-y-10 justify-center align-center'>
                                    {
                                        skillset.skills.map((skill, key) => {
                                            return(
                                                <SkillCard key={key} skill={skill} />
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default SkillsGeo
