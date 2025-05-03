import React from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import seo from '../../../public/seo.png';
import blog from '../../../public/blog.png';
import enquiry from '../../../public/enquiry.png';
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
        text: 'Manage Blog',
        icon: blog,
        url: '/'
    },

]

const Menus = ({ path, openState }: { path: string, openState: boolean }) => {
    const active = "!text-[var(--side-bar-nav-active)]";
    const filterBlack = 'filter brightness-0 saturate-100';
    return (
        <div className='flex flex-col gap-2'>
            {
                sideMenusData?.map((data) => {
                    return (
                        <a href={data?.url} key={data?.id} className={cn('flex gap-2 items-center  hover:bg-[#eff2f6]  rounded-[6px]')}>
                            <Image src={data?.icon} alt='arrow icon' className={cn('w-[30px] h-[30px] object-contain', data?.url == path ? 'active-filter ' : filterBlack)}></Image>
                            <p className={cn('text-[var(--side-bar-foreground)] text-[14px] transition-all opacity-100 whitespace-nowrap duration-500 ', !openState && 'md:hidden', data?.url == path && active)}>{data?.text}</p>
                        </a>
                    )
                })
            }

        </div>
    )
}

export default Menus
