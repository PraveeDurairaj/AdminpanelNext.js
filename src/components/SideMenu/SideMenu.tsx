'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import arrow from '../../../public/arrow.png';
import logout from '../../../public/logout.png';
import menu from '../../../public/menuIcon.png';
import Menus from './Menus';

const SideMenu = () => {
    const [open, setOpen] = useState<boolean>(true)
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)
    const pathName = usePathname();
    const filterBlack = 'filter brightness-0 saturate-100';
    const mobileHeaderIcon = 'w-[30px] h-[30px] object-contain filter brightness-0 saturate-100'
    return (
        <>
            <header className='md:hidden flex p-2.5 justify-between border-b border-[var(--border-primary)] items-center fixed w-full h-[60px] bg-[var(--side-bar-primary)] z-[5]'>
                <Image src={menu} className={mobileHeaderIcon} alt='menu icon' onClick={() => { setMobileOpen(!mobileOpen) }}></Image>
                <Image src={logout} className={mobileHeaderIcon} alt='logout icon'></Image>
            </header>
            <aside className={cn('py-[10px] pb-[80px] border-e border-[var(--border-primary)] px-[12px] bg-[var(--side-bar-primary)]  h-screen fixed md:relative transition-all duration-500 ease-in-out md:left-0 z-[10] w-[60px] shrink-0 overflow-x-hidden', open && 'w-[250px]', mobileOpen ? 'left-[0]' : '-left-[100%]')}>
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
                <Menus path={pathName} openState={open}/>
           
            </aside>
        </>

    )
}

export default SideMenu
