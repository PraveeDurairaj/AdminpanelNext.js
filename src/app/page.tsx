'use client'

import ViewTopics from '@/components/Learnings/ViewTopics';
import SideMenuLayout from '@/layouts/SideMenuLayout';



export default function Dashboard() {

  return (
    <SideMenuLayout >
      {/* <h1 className='flex items-center justify-center text-3xl bg-blue-300 p-[15px] h-[500px]  my-auto rounded-[10px] animate-pulse'>work in progress</h1> */}
      <ViewTopics />
    </SideMenuLayout>
  );
}
