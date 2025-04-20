'use client'
import CommonTable from '@/components/Table/Table';
import SideMenuLayout from '@/layouts/SideMenuLayout';

export default function Home() {
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
  const enquiryData = [
    {
      name:'praveen',
      mobileNo:'9345818731',
      message:'hello i am praveen'
    },
    {
      name:'ravi',
      mobileNo:'9337738731',
      message:'hello '
    },
    {
      name:'praveen',
      mobileNo:'9345089921',
      message:'hii'
    },
  ]

  return (
    <SideMenuLayout title={'Manage Enquiry'}>
      <CommonTable
        tableColumns={tableHeadingsData}
        tableRowData={enquiryData} />
    </SideMenuLayout>

  );
}