'use client'
import dynamic from 'next/dynamic'
import SideMenuLayout from '@/layouts/SideMenuLayout';
import {  useState } from 'react';
import { Button } from '@/components/ui/button';


const TiptapEditor = dynamic(() => import('@/components/TextEditor/TextEditor'), {
  ssr: false,
})

export default function Home() {
  const [notes , setNotes] = useState<string>('')
  const [formSumit,setFormSumbit] = useState<boolean>(false)

  return (
    <SideMenuLayout title={'Dashboard'}>
      {/* <h1 className='flex items-center justify-center text-3xl bg-blue-300 p-[15px] h-[500px]  my-auto rounded-[10px] animate-pulse'>work in progress</h1> */}
      <TiptapEditor isSubmit={formSumit}  setNotesData={setNotes} updateContent={'<h1>hello</h1>'}/>
      <Button onClick={()=>setFormSumbit(true)} className='mt-[20px]'>submit</Button>
      <div className='common_rich_editor' dangerouslySetInnerHTML={{__html:notes}}>
      </div>
    </SideMenuLayout>
  );
}
