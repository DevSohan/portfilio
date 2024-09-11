import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CertificateCard = () => {
    return (
        <Link href={"ddd"}>
            {/* <a className='block max-w-[20rem] lg:max-w-[16rem] rounded-md overflow-visible shadow-nav-sm mx-auto group outline-4 focus-visible:outline outline-offset-0 focus-visible:outline-institute-blue/20 active:scale-90 transition-transform'> */}
                <div className="rounded-md max-w-[16rem] w-[16rem] bg-white h-[18rem] flex flex-col items-stretch justify-end py-5 px-3 group-hover:outline-institute-blue outline-1 outline-offset-0 group-hover:outline group-focus-visible:outline group-focus-visible:outline-institute-blue">
                    <div className='h-32 relative rounded-t-md overflow-hidden'>
                        <Image src={"/images/certificates/cert_foundation_mozilla.jpg"} alt={"alt"} layout="fill" objectFit='contain' />
                    </div>
                    <div className='flex flex-col justify-between items-stretch p-4 flex-1 pt-3'>
                        <span className='text-center font-lato font-bold antialiased text-unterschrift-gray text-sm'>{"May, 2023"}</span>
                        <span className='text-center font-lato font-bold antialiased text-md text-black leading-snug line-clamp-2 text-ellipsis'>{"JavaScript Foundations Professional Certificate"}</span>
                        <span className='text-center font-lato font-normal antialiased text-sm text-light-gray line-clamp-3 text-ellipsis'>{"by Mozilla"}</span>
                        <div className='mx-auto p-[0.1875rem] flex space-x-1 bg-beige-dark rounded-full mt-2'>
                            {/* {blogCategories?.map(({attributes}, key) => {
                                return (
                                    <div key={key} className='rounded-full w-2.5 h-2.5' style={{backgroundColor: attributes.color_hex}}></div>
                                )
                            })} */}
                        </div>
                    </div>
                </div>
            {/* </a> */}
        </Link>
    )
}

export default CertificateCard
