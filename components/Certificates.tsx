import React, { useState } from 'react'
import CertificateFilterBar from './CertificateFilterBar'
enum FilterBy{
    Stack = "stack",
    Language = "language"
}

interface FilterTypes{
    filterBy:FilterBy
    filterByValue:string
}
const Certificates = () => {
    const [filters, setFilters] = useState<FilterTypes>({
        filterBy:FilterBy.Stack,
        filterByValue:""
    })

    const stacks = ["AR VR", "Data Science", "DevOps", "FullStack", "GIS", "iOS", "Project Management", "Wordpress"];
    const languages = ["JavaScript", "PHP", "Python", "Swift"];


    return (
        <div className='bg-dev-sohan-black-1 pb-5'>
            <div className='text-center pt-5 md:pt-10  mx-auto px-4 md:px-8 lg:max-w-screen-xl md:max-w-screen-lg'>
                <h2 className='text-lg md:text-3xl lg:text-5xl leading-8 md:leading-12 capitalize mb-12 font-bold text-white'>
                    <span className='text-yellow-400'>Certificates</span>
                </h2>
            </div>
            <div>
                <CertificateFilterBar filters={filters} setFilters={setFilters} stacks={stacks} languages={languages} />

                <h3 className='text-white text-center'>{filters.filterBy} {filters.filterByValue}</h3>
            </div>
        </div>
    )
}

export default Certificates
