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

    let background:string
    switch(skill.experience){
        case Experience.Guru:
            background = "before:bg-gradient-to-br before:from-[#F48FB1] before:to-[#d81b60] bg-gradient-to-br from-[#F48FB1] to-[#d81b60] after:bg-gradient-to-br after:from-[#F48FB1] after:to-[#d81b60]"
            break
        case Experience.Expert:
            background = "before:bg-gradient-to-br before:from-[#4CAF50] before:to-[#1B5E20] bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] after:bg-gradient-to-br after:from-[#4CAF50] after:to-[#1B5E20]"
            break
        case Experience.Proficient:
            background = "before:bg-gradient-to-br before:from-[#1976D2] before:to-[#283593] bg-gradient-to-br from-[#1976D2] to-[#283593] after:bg-gradient-to-br after:from-[#1976D2] after:to-[#283593]"
            break
        case Experience.Intermediate:
            background = "before:bg-gradient-to-br before:from-[#ffc107] before:to-[#f57c00] bg-gradient-to-br from-[#ffc107] to-[#f57c00] after:bg-gradient-to-br after:from-[#ffc107] after:to-[#f57c00]"
            break
        case Experience.Beginner:
            background = "before:bg-gradient-to-br before:from-[#f4511e] before:to-[#b71c1c] bg-gradient-to-br from-[#f4511e] to-[#b71c1c] after:bg-gradient-to-br after:from-[#f4511e] after:to-[#b71c1c]"
            break  
    }

    return (
        <div className={`before:absolute before:m-0 before:w-14 before:h-20 before:rounded-xl before:inline-block before:top-0 before:bottom-0 before:left-0 before:right-0 before:rotate-[60deg] before:z-0 relative m-0 w-14 h-20 rounded-xl inline-block top-0 ${background} after:absolute after:m-0 after:w-14 after:h-20 after:rounded-xl after:inline-block after:top-0 after:bottom-0 after:left-0 after:right-0 after:-rotate-[60deg] after:z-0 group transition-[display] duration-300 ease-in-out relative`}>
            <div className='relative z-10 w-full h-full flex flex-col gap-y-0 justify-center items-center'>
                <div className='w-full h-10 transition-all duration-300 ease-in-out group-hover:scale-125'>
                    <Image src={imagePath} width={100} height={100} alt=""  className='w-full h-full object-contain'/>
                </div>
            </div>
            <div className='mt-2'>
                <h3 className='text-white font-bold text-xs antialiased drop-shadow-md'>{skill.title}</h3>
            </div>
        </div>
    )
}

export default SkillCard
