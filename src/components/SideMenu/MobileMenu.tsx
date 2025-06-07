"use client"
import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '../ui/drawer';
import logout from '../../../public/logout.png';
import menu from '../../../public/menuIcon.png';



const MobileMenu = ({ menus }: { menus: ReactNode }) => {
    const filterBlack = 'filter brightness-0 saturate-100';
    return (
        <Drawer>
            <header className='md:hidden flex p-2.5 justify-between border-b border-[var(--border-primary)] items-center fixed w-full h-[60px] bg-[var(--side-bar-primary)] z-[5]'>
                <DrawerTrigger asChild>
                    <Image src={menu} className={cn('w-[30px] h-[30px]', filterBlack)} alt='menu icon' ></Image>
                </DrawerTrigger>
                <Image src={logout} className={cn('w-[30px] h-[30px]', filterBlack)} alt='logout icon'></Image>
            </header>
            <DrawerContent>
                <DrawerTitle>
                    <div className='flex items-center gap-2 bg-[#b0b0eb59] rounded-[20px]   mb-[10px] sticky shadow-[0px_4px_20px_0px_#80808082] overflow-hidden'>
                        <div className={cn('w-[45px] py-[10px] h-full bg-black text-[18px] text-white  flex items-center justify-center shrink-0 transition-all duration-500')}>P</div>
                        <p className={cn('text-[var(--side-bar-foreground)] text-[14px] font-[600] truncate')}>Praveen Durairaj</p>
                    </div>
                </DrawerTitle>
                <div className='max-h-[300px] overflow-y-auto'>
                    {menus}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileMenu

