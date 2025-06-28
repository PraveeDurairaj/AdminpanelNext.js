'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Inputgroup from '@/components/InputGroup/Inputgroup';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { addTopicsdata } from '@/helper/type';
import { useAddDos } from '@/hook/useAddData';
import { useRouter } from 'next/navigation';

const TiptapEditor = dynamic(() => import('@/components/TextEditor/TextEditor'), {
    ssr: false,
})

export default function LearningsForm() {
    const [addTopicsdata, setAddTopicsdata] = useState<addTopicsdata>({ categroy: null, notesTitle: null });
    const [content, setContent] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const { added, setAdded, addData } = useAddDos('learnings')
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddTopicsdata(prev => ({
            ...prev, [name]: value,
        }))
    }

    const handleSubmit = () => {
        if (addTopicsdata?.categroy && addTopicsdata?.notesTitle && content) {
            addData<addTopicsdata>({ ...addTopicsdata, notesContent: content })
            setAddTopicsdata({
                categroy: null, notesTitle: null
            })
            setContent('')
        }
        else {
            toast.error("Kindly fill out all fields", {
                description: "Category Title and Notes",
                position: 'top-right'
            });
        }
    }
    const handleCancel = () => {
        router.back();
    }
    const renderSkeleton = () => {
        return (
            <div className='grid grid-cols-1  gap-4 max-w-[800px]'>
                {[1, 2]?.map((data) => {
                    return (
                        <div key={data}>
                            <Skeleton className='w-[150px] h-[20px] rounded-[4px] mb-1.5' />
                            <Skeleton className='w-full h-[50px] rounded-[4px]' />
                        </div>
                    )
                })}
                <div>
                    <Skeleton className='w-[150px] h-[20px] rounded-[4px] mb-1.5' />
                    <Skeleton className='w-full h-[250px] rounded-[4px]' />
                </div>
                <div className='flex justify-end gap-3.5 mt-6' >
                    <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
                    <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
                </div>

            </div>

        )
    }

    useEffect(() => {
        setLoading(false)
        if (added) {
            toast.success("Learnings Notes form submitted successfully!", {
                description: "Your notes has been saved",
            });
            setAdded(false)
            router.back();
        }
    }, [loading, added, setAdded, content])


    return (
        <SideMenuLayout title={'Add Topics'}>
            {loading ? renderSkeleton() :
                <div className='grid grid-cols-1  gap-4 max-w-[800px]'>
                    <Inputgroup
                        id="categroy"
                        type="text"
                        name='categroy'
                        value={addTopicsdata?.categroy}
                        onChangeFunction={handleChange}
                        placeholder="Categroy"
                        label='Categroy'
                    />
                    <Inputgroup
                        id="topicTitle"
                        type="text"
                        name='topicTitle'
                        value={addTopicsdata?.notesTitle}
                        onChangeFunction={handleChange}
                        placeholder="Title"
                        label='Title'
                    />
                    <div>
                        <label className="mb-1.5 flex gap-2 items-center text-[16px] font-[500]">Notes</label>
                        <TiptapEditor content={content} setContent={setContent} />
                    </div>
                    <div className='flex justify-end gap-3.5 pt-3 border-t border-[var(--border-primary)] mt-6'>
                        <Button variant={'outline'} onClick={handleCancel}>cancel</Button>
                        <Button onClick={handleSubmit}>save</Button>
                    </div>
                </div>}
        </SideMenuLayout>

    );
}
