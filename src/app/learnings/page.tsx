'use client'
import { Button } from '@/components/ui/button';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { useRouter } from 'next/navigation';

export default function Learnings() {
    const router = useRouter();

  return (
    <SideMenuLayout title={'Learnings'}>
     {/* <div className='common_rich_editor' dangerouslySetInnerHTML={{__html:notes}}>
      </div> */}
      <div className='flex justify-end'>
        <Button onClick={()=>{router.push('/learning/form')}}>Add Notes</Button>
      </div>
      <h1 className='flex items-center justify-center text-3xl bg-blue-300 p-[15px] h-[500px]  my-auto rounded-[10px] animate-pulse'>work in progress</h1>
    </SideMenuLayout>
  );
}
