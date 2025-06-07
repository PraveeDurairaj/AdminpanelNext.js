'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import Menus from './Menus';
import MobileMenu from './MobileMenu';

const SideMenu = () => {
    const pathName = usePathname();

    return (
        <>
            <aside className='w-[250px] h-screen fixed bg-white py-[20px] px-[10px] hidden md:block'>
                <div className='flex items-center gap-2 bg-[#b0b0eb59] rounded-[20px] mb-[10px] sticky shadow-[0px_4px_20px_0px_#80808082] overflow-hidden'>
                    <div className={cn('w-[36px] h-[36px] bg-black text-white  flex items-center justify-center shrink-0 transition-all duration-500')}>P</div>
                    <p className={cn('text-[var(--side-bar-foreground)] text-[16px] font-[600] truncate')}>Praveen Durairaj</p>
                </div>
                <div className='max-h-[calc(100vh-56px)] overflow-y-auto pb-[50px]'>
                    <Menus path={pathName} />
                </div>
            </aside>
            <MobileMenu menus={<Menus path={pathName} />} />
        </>

    )
}

export default SideMenu
