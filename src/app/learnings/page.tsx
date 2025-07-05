'use client'
import { useEffect, useState } from 'react';
import ModalPopup from '@/components/ModalPopup/ModalPopup';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { AddTopicForm } from '@/components/Learnings/AddTopicForm';
import IconWithTextCard from '@/components/ui/IconWithTextCard';
import { useFetchCollection } from '@/hook/useFetchCollection';
import { addTopicsdata } from '@/helper/type';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';




export default function Learnings() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true)
  const [topis, setAddTopics] = useState<addTopicsdata[]>()
  const documents = useFetchCollection<addTopicsdata>({ fbCollection: 'learnings', orderData: 'createdDate', orderMethod: 'desc' })
  useEffect(() => {
    if (documents) {
      setAddTopics(documents)
      setLoading(false)
    }

  },[documents])
  return (
    <SideMenuLayout title={'Learnings'}>
      {/* <div className='common_rich_editor' dangerouslySetInnerHTML={{__html:notes}}>
      </div> */}
      <div className='flex justify-end mb-5'>
        <ModalPopup
          title={'Add topics'}
          buttonText={'Add'}
          content={<AddTopicForm handlePopup={setOpen} />}
          isOpen={open}
          setIsOpen={setOpen}
        />
      </div>

      {loading ? <Skeleton className='w-full h-[300px]' /> :
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5'>
          {topis?.map((data, key) => {
            return (
              <Link key={key} href={`learnings/view/${data?.id}`}>
                <IconWithTextCard 
                title={data?.topicTitle ?? ''}
                subTitle={data?.topicDescription ?? ''}
                className={'border border-[var(--border-primary)] shadow-none'}
              />
              </Link>
            
            )
          })} </div>
      }

    </SideMenuLayout>
  );
}
