import Image from 'next/image'
import React from 'react'
import image from "./../public/images/skills/typescript.png"


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

interface Props{
    skill: Skill
}
function SkillCard({skill}:Props) {
    const imagePath = `/images/skills/${skill.image}.png`;

    const background = switch(skill.experience){
        case Experience.Guru:
            "bg-gradient-to-br from-[#4CAF50] to-[#1B5E20]"
            break
        case Experience.Expert:

        
    }

    return (
        <div className='before:absolute before:m-0 before:w-24 before:h-40 before:rounded-xl before:inline-block before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-green-800 before:rotate-[60deg] before:z-0 relative m-0 w-24 h-40 rounded-xl inline-block top-0 bg-green-800 after:absolute after:m-0 after:w-24 after:h-40 after:rounded-xl after:inline-block after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-green-800 after:-rotate-[60deg] after:z-0 group transition-[display] duration-300 ease-in-out'>
            <div className='relative z-10 w-full h-full flex flex-col gap-y-3 justify-center items-center'>
                <div className='w-full h-16 relative'>
                    <Image src={imagePath} width={100} height={100} alt=""  className='w-full h-full object-contain'/>
                </div>
                <div className=''>
                    <h3 className='text-white font-bold text-xl antialiased'>{skill.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
