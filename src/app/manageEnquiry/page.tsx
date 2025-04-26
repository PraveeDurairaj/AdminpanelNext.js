'use client'
import CommonTable from '@/components/Table/Table';
import { useFetchCollection } from '@/hook/useFetchCollection';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { useEffect, useState } from 'react';

const tableHeadingsData = [
  {
    title: 'Name',
    style: 'min-w-[150px]'
  },
  {
    title: 'Mobile No',
    style: 'min-w-[150px]'
  },
  {
    title: 'Message',
    style: 'min-w-[200px]'
  }
]

export default function Home() {
  const [tbody, setTBoday] = useState<any>()
  const documents = useFetchCollection('manageEnquiry')
  useEffect(() => {
    if (documents) setTBoday(documents)
  }, [documents])
  return (
    <SideMenuLayout title={'Manage Enquiry'}>
       <CommonTable
        tableColumns={tableHeadingsData}
        tableRowData={tbody} />
    </SideMenuLayout>

  );
}