import React from 'react'
import TimelineCard from './TimelineCard'

function Timeline() {
  return (
    <div className='before:content-[""] before:w-2 before:bg-black before:h-full before:absolute before:left-1/2 before:-translate-x-1/2 before:-z-10 relative'>
        <TimelineCard />
        <TimelineCard />
    </div>
  )
}

export default Timeline
