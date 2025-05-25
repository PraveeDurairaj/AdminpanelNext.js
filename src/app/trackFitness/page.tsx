import React from 'react';
import Image from 'next/image';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import weightIcon from '../../../public/weight.png';
// import caloriesIcon from '../../../public/calories.png';

const page = () => {
    return (
        <SideMenuLayout title={'Track Fitness'}>
            <div className='flex  w-full gap-[20px]'>
                {[1, 2].map((data) => {
                    return (
                        <div key={data} className='py-[25px] px-[18px] w-full bg-white rounded-[12px] shadow-[1px_1px_10px_3px_#80808029]'>
                            <div className='flex justify-between mb-[6px]'>
                                <p  className='text-[28px] font-[500]'>46 Kg</p>
                                <Image src={weightIcon} width={40} height={40} alt='wight'></Image>
                            </div>
                            <p className='text-[16px] text-[var(--gray-text-foreground)]'>Weight</p>
                        </div>
                    )
                })}


            </div>
        </SideMenuLayout>
    )
}

export default page
