'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
// components
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from '@/components/ui/select';
import Inputgroup from '@/components/InputGroup/Inputgroup';
import SideMenuLayout from '@/layouts/SideMenuLayout';
// helper
import { addTopicsdata } from '@/helper/type';
import { useFetchCollection } from '@/hook/useFetchCollection';
import { useUpdateData } from '@/hook/useUpdateData';
import { useGetData } from '@/hook/useGetData';

const TiptapEditor = dynamic(() => import('@/components/TextEditor/TextEditor'), {
    ssr: false,
})

export default function LearningsForm() {
    // state values
    const [addTopicsdata, setAddTopicsdata] = useState<addTopicsdata>({ categroy: 'select', notesTitle: null });
    const [content, setContent] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter();

    const documents = useFetchCollection<addTopicsdata>({ fbCollection: 'learnings', orderData: 'createdDate', orderMethod: 'desc' })
    const { isUpdated, updateData } = useUpdateData<addTopicsdata>('learnings')
    const { data, fetchData } = useGetData<addTopicsdata>('learnings');



    const handleSubmit = () => {
        if (addTopicsdata?.categroy && addTopicsdata?.notesTitle && content && data) {
              const previousContent = data?.topicsubContent || [];
              console.log()
            updateData(addTopicsdata?.categroy, { topicsubContent: [...previousContent,{ ...addTopicsdata, notesContent: content }] })
            setAddTopicsdata({categroy: null, notesTitle: null})
            setContent('')
        }
        else {
            toast.error("Kindly fill out all fields", {
                description: "Category Title and Notes",
                position: 'top-right'
            });
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddTopicsdata(prev => ({
            ...prev, [name]: value,
        }))
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
        if (isUpdated) {
            toast.success("Learnings Notes form submitted successfully!", {
                description: "Your notes has been saved",
                 position: 'top-right'
            });
            router.back();
        }
        if (addTopicsdata.categroy) {
            fetchData(addTopicsdata?.categroy)
        }
    }, [loading, isUpdated, content,addTopicsdata])


    return (
        <SideMenuLayout title={'Add notes'}>
            {loading ? renderSkeleton() :
                <div className='grid grid-cols-1  gap-4 max-w-[800px]'>
                    <Select value={addTopicsdata.categroy ?? 'select'} onValueChange={(value) => setAddTopicsdata(prev => ({
                        ...prev, categroy: value,
                    }))}>
                        <SelectTrigger className="w-full" >
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>

                            <SelectItem value="select">Select</SelectItem>
                            {documents?.map((data, key) => {
                                return (
                                    <SelectItem value={data?.id ?? ''} key={key}>{data?.topicTitle}</SelectItem>
                                )
                            })}

                        </SelectContent>
                    </Select>
                    <Inputgroup
                        id="notesTitle"
                        type="text"
                        name='notesTitle'
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
