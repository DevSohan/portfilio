import React from 'react'
enum FilterBy{
    Stack = "stack",
    Language = "language"
}

interface FilterTypes{
    filterBy:FilterBy
    filterByValue:string
}

interface FilterProps{
    filters: FilterTypes
    setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>
    stacks: string[],
    languages: string[]
}

const CertificateFilterBar = ({filters, setFilters, stacks, languages}: FilterProps) => {
    const handleFilterBy = (filterBy: FilterBy) => {
        console.log(filterBy)
        setFilters((prevFilters) => ({ ...prevFilters, filterBy }));
    }

    const handleFilterByValue = (filterByValue: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, filterByValue }));
    }
    const filterOptions = {
        [FilterBy.Stack]: stacks,
        [FilterBy.Language]: languages,
    };
    const activeClass = "text-black bg-dev-sohan-yellow"
    return (
        <>
            <div className='flex gap-4 justify-center items-center'>
                <span className='text-white'>Filter by:</span>
                {
                Object.entries(FilterBy).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => handleFilterBy(value)}
                            className={`bg-dev-sohan-black-2 py-2 px-5 capitalize transition-all duration-300 ease-in-out ${value === filters.filterBy ? activeClass : "text-white"} px-4 py-1 rounded-full`}>
                            {value}
                        </button>
                    )
                })
                }
            </div>
            <div className='mt-5 flex gap-4 justify-center items-center flex-wrap'>
                {filterOptions[filters.filterBy].map((option) => (
                    <button key={option} onClick={() => handleFilterByValue(option)} className={`bg-dev-sohan-black-2 py-2 px-5 capitalize transition-all duration-300 ease-in-out ${option === filters.filterByValue ? activeClass : "text-white"} px-4 py-1 rounded-full`}>
                    {option}
                    </button>
                ))}
            </div>
        </>
    )
}

export default CertificateFilterBar
