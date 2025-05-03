'use client'
import CommonTable from '@/components/Table/Table';
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import moment from 'moment';
import { manageEnquiryData } from '@/helper/type';
import { useFetchCollection } from '@/hook/useFetchCollection';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { useEffect, useState } from 'react';


const tableHeadingsData = [
  {
    title: 'Date',
    style: 'min-w-[100px]'
  }, 
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
  const [tbody, setTBoday] = useState<manageEnquiryData[]>()
  const documents = useFetchCollection({fbCollection:'manageEnquiry',orderData:'enQuiryDate',orderMethod:'desc'})
  useEffect(() => {
    if (documents) setTBoday(documents)
  }, [documents])



  return (
    <SideMenuLayout title={'Manage Enquiry'}>
      <CommonTable tableColumns={tableHeadingsData}>
        {tbody?.map((data, key) => { 
         const date = data?.enQuiryDate?.toDate()
         const enQuiryDate =  moment(date).format('DD-MM-YYYY')
         
          return(
          <TableRow key={key}>
            <TableCell>{key + 1}</TableCell>
            <TableCell>{enQuiryDate}</TableCell>
            {data?.name && <TableCell>{data?.name}</TableCell>}
            {data?.mobileNo && <TableCell>{data?.mobileNo}</TableCell>}
            {data?.message && <TableCell>{data?.message}</TableCell>}
          </TableRow>
        )})}
      </CommonTable>
    </SideMenuLayout>

  );
}