
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { viewTopic } from '@/helper/type'
interface ViewTopicsProps {
    data: viewTopic;
}

const ViewTopics = ({ data }: ViewTopicsProps) => {
       const router = useRouter();
    return (
        <div>
            <div className='flex justify-end mb-5 gap-3.5'>
                <Button variant={'outline'} onClick={()=> router.back()}>Go back</Button>
                <Button onClick={()=>router.push('/learnings/form')}>Add notes</Button>
            </div>
            <div className="px-[20px] py-[15px] rounded-[5px] bg-[linear-gradient(10deg,_var(--theme-bg),_transparent)]">
                <h1 className='text-[28px] font-[600]  leading-[36px] mb-[6px] mt-0'>{data?.topicTitle}</h1>
                <p className='text-[16px]  leading-[24px]'>{data?.topicDescription}</p>
            </div>
        </div>

    )
}

export default ViewTopics
