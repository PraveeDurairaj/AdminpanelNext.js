import React from 'react';
import Image from 'next/image';
import { iconTextCardData } from '@/helper/type';

const IconWithTextCard = ({title,subTitle,icon}:iconTextCardData) => {
    return (
        <div className='py-[25px] px-[18px] w-full bg-white rounded-[12px] shadow-[1px_1px_10px_3px_#80808029]'>
            <div className='flex justify-between mb-[6px]'>
                <p className='text-[28px] font-[500]'>{title}</p>
               {icon && <Image src={icon} width={40} height={40} alt='wight'></Image>}
            </div>
            <p className='text-[16px] text-[var(--gray-text-foreground)]'>{subTitle}</p>
        </div>
    )
}

export default IconWithTextCard
