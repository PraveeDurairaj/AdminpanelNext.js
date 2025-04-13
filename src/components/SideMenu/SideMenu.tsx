'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import arrow from '../../../public/arrow.png';
import seo from '../../../public/seo.png';
import blog from '../../../public/blog.png';
import enquiry from '../../../public/enquiry.png';
import logout from '../../../public/logout.png';
import menu from '../../../public/menuIcon.png';

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
    const active = "!text-[var(--side-bar-nav-active)]";
    const filterBlack = 'filter brightness-0 saturate-100';
    const mobileHeaderIcon = 'w-[30px] h-[30px] object-contain filter brightness-0 saturate-100'
    return (
        <>
            <header className='md:hidden flex p-2.5 justify-between border-b border-[var(--border-primary)] items-center fixed w-full h-[60px] bg-[var(--side-bar-primary)] z-[5]'>
                <Image src={menu} className={mobileHeaderIcon} alt='menu icon' onClick={() => { setMobileOpen(!mobileOpen) }}></Image>
                <Image src={logout} className={mobileHeaderIcon} alt='logout icon'></Image>
            </header>
            <aside className={cn('py-[10px] border-e border-[var(--border-primary)] px-[8px] bg-[var(--side-bar-primary)]  h-screen fixed md:relative transition-all duration-500 ease-in-out md:left-0 z-[10] w-[250px]', open ? 'w-[250px]' : 'md:w-[60px]', mobileOpen ? 'left-[0]' : '-left-[100%]')}>
                <header className='flex items-center justify-between gap-1.5 mb-5 h-[36px]'>
                    <div className='flex items-center gap-2'>
                        <div className={cn('w-[36px] h-[36px] bg-black text-white rounded-full flex items-center justify-center shrink-0 transition-all duration-500', !open && 'md:hidden md:opacity-0')}>P</div>
                        <p className={cn('text-[var(--side-bar-foreground)] transition-all truncate duration-500 opacity-100', open ? 'flex' : 'md:hidden md:opacity-0')}>Praveen Durairaj</p>
                    </div>
                    <Image src={arrow} alt='arrow icon' className={cn('hidden md:flex cursor-pointer mx-auto w-[25px] h-[25px] object-contain', filterBlack)} onClick={() => { setOpen(!open) }}></Image>
                    <Image src={arrow} alt='arrow icon' className={cn('md:hidden cursor-pointer mx-auto w-[25px] h-[25px] object-contain transform scale-[-1]', filterBlack)} onClick={() => { setMobileOpen(!mobileOpen) }}></Image>
                </header>
                <div className='border-b border-[var(--border-primary)] mb-1.5'></div>
                {/* sidemenu body */}
                <div className='flex flex-col gap-1.5'>
                    {
                        sideMenusData?.map((data) => {
                            return (
                                <div key={data?.id} className={cn('flex gap-2 items-center p-[6px] hover:bg-[#eff2f6]  rounded-[6px]')}>
                                    <Image src={data?.icon} alt='arrow icon' className={cn('w-[30px] h-[30px] object-contain', data?.url ? 'active-filter ' : filterBlack)}></Image>
                                    <p className={cn('text-[var(--side-bar-foreground)] text-[14px] transition-all opacity-100 whitespace-nowrap duration-500 ', !open && 'md:hidden md:opacity-0', data?.url && active)}>{data?.text}</p>
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
