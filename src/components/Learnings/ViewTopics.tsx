
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { viewTopic } from '@/helper/type'
import Link from 'next/link';
import { cn } from '@/lib/utils';
interface ViewTopicsProps {
    data: viewTopic;
}

const ViewTopics = ({ data }: ViewTopicsProps) => {
    const router = useRouter();
    const [sidemenuActive, setSideMenuActive] = useState(false)

    useEffect(() => {
        if (data?.topicsubContent) {
            if (data?.topicsubContent.length > 0) {
                setSideMenuActive(true)
            }
        }
    },[])
    return (
        <>
            {sidemenuActive && <div className=' hidden md:flex flex-col fixed w-[260px] bg-white h-screen p-[5px]'>
                {data?.topicsubContent?.map((data, key) => {
                    return (
                        <Link href={`#id${key}`} key={key}
                            className='p-[6px] hover:bg-blue-100 text-[16px] font-[500] hover:rounded-[6px]'>{data?.notesTitle}</Link>
                    )
                })}
            </div>}

            <div className={cn('p-[15px]', sidemenuActive && 'md:ms-[260px]')}>
                <div className='flex justify-end mb-5 gap-3.5'>
                    <Button variant={'outline'} onClick={() => router.back()}>Go back</Button>
                    <Button onClick={() => router.push('/learnings/form')}>Add notes</Button>
                </div>
                <div className="px-[20px] py-[15px] rounded-[5px] border border-[var(--border-primary)] bg-[#6489d92b]">
                    <h1 className='text-[28px] font-[600]  leading-[36px] mb-[6px] mt-0'>{data?.topicTitle}</h1>
                    <p className='text-[16px]  leading-[24px]'>{data?.topicDescription}</p>
                </div>
                <div className='mt-[20px]'>
                    {data?.topicsubContent?.map((data, key) => {
                        return (
                            <div id={`id${key}`} className='mb-[24px] py-[10px] border-b border-gray-200' key={key}>
                                <p className='text-[var(--theme-bg)] text-[30px] mb-[20px] font-[600]'>{data?.notesTitle}</p>
                                <div className='common_rich_editor' dangerouslySetInnerHTML={{ __html: data?.notesContent ?? '' }}>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </>


    )
}

export default ViewTopics
