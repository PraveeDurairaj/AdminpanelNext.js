import React from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import seo from '../../../public/seo.png';
import enquiry from '../../../public/enquiry.png';
import tractFitness from '../../../public/trackFitness.png';
const sideMenusData = [
    {
        id: 1,
        text: 'Dashboard',
        icon: seo,
        url: '/'
    },
    {
        id: 2,
        text: 'Manage Enquiry',
        icon: enquiry,
        url: '/manageEnquiry'
    },
    {
        id: 3,
        text: 'SEO Settings',
        icon: seo,
        url: '/seoSettings'
    },
    {
        id: 4,
        text: 'Track Fitness',
        icon: tractFitness,
        url: '/trackFitness',
        subUrl:'/trackFitness/trackFitnessForm'
    }
    

]

const Menus = ({path}:{path: string}) => {

    const active = "shadow-[3px_15px_20px_6px_#80808038] hover:bg-white";
    const filterBlack = 'filter brightness-0 saturate-100';
    return (
        <div className='flex flex-col mt-[20px] gap-1.5 border-t border-[#80808059] border-dashed pt-[20px]'>
            {
                sideMenusData?.map((data) => {
                    const isNavActive = path == data?.url || path == data?.subUrl
                    return (
                        <a href={data?.url} key={data?.id} className={cn('flex gap-2 items-center  hover:bg-[#b0b0eb59]  rounded-[6px] py-[8px] px-[14px]',isNavActive && active)}>
                            <Image src={data?.icon} alt='arrow icon' className={cn('w-[25px] h-[25px] object-contain',isNavActive ? 'active-filter':  filterBlack)}></Image>
                            <p className={cn('text-[var(--side-bar-foreground)] text-[14px] transition-all opacity-100 whitespace-nowrap duration-500 ')}>{data?.text}</p>
                        </a>
                    )
                })
            }

        </div>
    )
}

export default Menus
