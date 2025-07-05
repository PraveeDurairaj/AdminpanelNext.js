'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import ViewTopics from '@/components/Learnings/ViewTopics';
import { useGetData } from '@/hook/useGetData';
import { viewTopic } from '@/helper/type';

const Page = () => {
  const { data, fetchData } = useGetData<viewTopic>('learnings');
  const [topicData, setTopicData] = useState<viewTopic | undefined>(undefined);
  
  const params = useParams<{ view?: string }>();
  const { view } = params;

  useEffect(() => {
    if (view) {
      fetchData(view);
    }
  }, [view]);

  useEffect(() => {
    if (data) {
      setTopicData(data);
    }
  }, [data]);

  return (
    <SideMenuLayout>
      {topicData && view && <ViewTopics data={topicData} />}
      
    </SideMenuLayout>
  );
};

export default Page;


