'use client'
import { useEffect, useState } from 'react';
import CommonTable from '@/components/Table/Table';
import { toast } from "sonner";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import moment from 'moment';
import { manageEnquiryData } from '@/helper/type';
import { useFetchCollection } from '@/hook/useFetchCollection';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import { useDeleteData } from '@/hook/useDeleteData';
import { TableSkeleton } from '@/components/Skeletons/skeleton';


const tableHeadingsData = [
  {
    title: 'No',
    style: 'min-w-[120px]'
  },
  {
    title: 'Date',
    style: 'min-w-[120px]'
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
  },
  {
    title: 'Action',
    style: 'min-w-[120px]'
  }
]

export default function Home() {
  const [tbody, setTBoday] = useState<manageEnquiryData[]>()
  const documents = useFetchCollection<manageEnquiryData>({ fbCollection: 'manageEnquiry', orderData: 'enQuiryDate', orderMethod: 'desc' })
  const { deleteState, setDeleteState, deleteData } = useDeleteData('manageEnquiry');

  useEffect(() => {
    if (documents) setTBoday(documents)
    if (deleteState) {
      toast("Enquiry data deleted successfully!");
      setDeleteState(false)
    }
  }, [documents, deleteState])

  return (
    <SideMenuLayout title={'Manage Enquiry'}>
      {tbody ? <CommonTable tableColumns={tableHeadingsData}>
        {tbody?.map((data, key) => {
          const date = data?.enQuiryDate?.toDate()
          const enQuiryDate = moment(date).format('DD-MM-YYYY')
          return (
            <TableRow key={key}>
              <TableCell>{key + 1}</TableCell>
              <TableCell>{enQuiryDate}</TableCell>
              {data?.name && <TableCell>{data?.name}</TableCell>}
              {data?.mobileNo && <TableCell>{data?.mobileNo}</TableCell>}
              <TableCell>{data?.message ? data?.message : '-'}</TableCell>
              <TableCell className='link-text' onClick={() => data?.id && deleteData(data?.id)}>delete</TableCell>
            </TableRow>
          )
        })}
      </CommonTable> : <TableSkeleton />}
    </SideMenuLayout>

  );
}