'use client'
import React, {  useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import arrow from '../../../public/arrow.png';
import seo from '../../../public/seo.png';
import blog from '../../../public/blog.png';
import enquiry from '../../../public/enquiry.png';

const SideMenu = () => {
    const [open, setOpen] = useState<boolean>(true)
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)
    const sideMenusData = [
        {
            id: 1,
            text: 'SEO Settings',
            icon: seo,
            active: '',
            url: true
        },
        {
            id: 2,
            text: 'Manage Blog',
            icon: blog,
            active: '',
        },
        {
            id: 3,
            text: 'Manage Enquiry',
            icon: enquiry,
            active: ''
        },
        {
            id: 4,
            text: 'SEO Settings',
            icon: seo,
            active: ''
        },

    ]
    const active = "shadow-[0px_3px_14px_2px_#0a0af263]"
    return (
        <>
            <header className='md:hidden flex p-2.5 justify-between fixed w-full h-[60px] text-white bg-[var(--side-bar-primary)]'>
                <span onClick={() => { setMobileOpen(!mobileOpen) }}>open</span>
                <span>logout</span>
            </header>
            <aside className={cn('py-[10px] px-[8px] bg-[var(--side-bar-primary)]  h-screen fixed md:relative transition-all duration-500 ease-in-out md:left-0 z-10 w-[250px]', open ? 'w-[250px]' : 'md:w-[60px]', mobileOpen ? 'left-[0]' : '-left-[100%]')}>
                <header className='flex items-center justify-between gap-1.5 mb-6 h-[36px]'>
                    <div className='flex items-center gap-2'>
                        <div className={cn('w-[36px] h-[36px] bg-white text-black rounded-full flex items-center justify-center shrink-0 transition-all duration-500', !open && 'md:hidden md:opacity-0')}>P</div>
                        <p className={cn('text-[var(--side-bar-foreground)] transition-all truncate duration-500 opacity-100', open ? 'flex' : 'md:hidden md:opacity-0')}>Praveen Durairaj</p>
                    </div>
                    <Image src={arrow} alt='arrow icon' className=' hidden md:flex cursor-pointer mx-auto w-[25px] h-[25px] object-contain' onClick={() => { setOpen(!open) }}></Image>
                    <Image src={arrow} alt='arrow icon' className=' md:hidden cursor-pointer mx-auto w-[25px] h-[25px] object-contain' onClick={() => { setMobileOpen(!mobileOpen) }}></Image>
                </header>
                {/* sidemenu body */}
                <div className='flex flex-col gap-1.5'>
                    {
                        sideMenusData?.map((data) => {
                            return (
                                <div key={data?.id} className={cn('flex gap-2 items-center p-[6px] bg-[#a0a0a030]  rounded-[6px]', data?.url && active)}>
                                    <Image src={data?.icon} alt='arrow icon' className='w-[30px] h-[30px] object-contain'></Image>
                                    <p className={cn('text-[var(--side-bar-foreground)] text-[14px] transition-all opacity-100 whitespace-nowrap duration-500', !open && 'md:hidden md:opacity-0')}>{data?.text}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </aside>
        </>

    )
}

export default SideMenu
