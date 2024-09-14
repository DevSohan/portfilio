import React from 'react'

const footer = () => {
    return (
        <>
        <div className="bg-institute-red text-white font-lato text-center text-base bottom-0 flex flex-col items-center md:text-base md:pt-6 md:pb-0 md:text-left">
            <div className="max-w-4xl w-full">
                <div className="mt-10 mb-4 py-4 pt-5 md:py-0 md:pt-0 mx-20 md:mx-0 md:my-0 flex flex-col-reverse md:flex-row md:justify-between border-t-[1px] md:border-t-0">
                    <div className="md:py-6 text-sm antialiased text-center md:text-left w-full md:w-2/3">
                        {"Copyright @ 2024. All Rights Reserved. "}
                    </div>
                    <div className=" pb-3 md:py-6 flex justify-center md:justify-end gap-10 w-full md:w-1/3 md:gap-3">
                        {/* {
                            router.locales?.map((item, index) => {
                                return(
                                        <button key={index} className={`${classes} antialiased text-sm font-lato md:text-xs leading-6`} onClick={()=>{
                                            const newQuery = {...query}
                                            newQuery.pid = slug[item]
                                            const newPath = asPath.replace(`/${id}`, `/${slug[item]}`)
                                            router.push({ pathname, query : newQuery }, newPath, { locale: item })
                                        }}>
                                            {item == "en" ? footerContents?.locale_EN_title : footerContents?.locale_DE_title}
                                        </button>
                                )
                            })
                        } */}
                    </div>

                </div>
            </div>
        </div>
        </>  
    )
}

export default footer
