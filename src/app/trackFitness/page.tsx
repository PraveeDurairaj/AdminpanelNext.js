'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import moment from 'moment';
import { useFetchCollection } from '@/hook/useFetchCollection';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import weightIcon from '../../../public/weight.png';
import IconWithTextCard from '@/components/ui/IconWithTextCard';
import caloriesIcon from '../../../public/calories.png';
import { Skeleton } from '@/components/ui/skeleton';
import CommonTable from '@/components/Table/Table';
import { trackFitnessData } from '@/helper/type';
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
        title: 'Colories',
        style: 'min-w-[200px]'
    },
    {
        title: 'Weight',
        style: 'min-w-[120px]'
    },
    {
        title: 'Backlog Colories',
        style: 'min-w-[200px]'
    }
]

export default function Home() {
    const [tbody, setTBoday] = useState<trackFitnessData[]>()
    const [dashBoardData, setDashBoarddata] = useState<trackFitnessData>()
    const documents = useFetchCollection<trackFitnessData>({ fbCollection: 'trackFitness', orderData: 'createdDate', orderMethod: 'desc' })
    useEffect(() => {
        if (documents) {
            setDashBoarddata(documents?.[0])
            documents.forEach(item => {
                if (!item.createdDate?.seconds) return; 

                const date = new Date(item?.createdDate?.seconds * 1000); 
                const month = date.getMonth() + 1;  
                const year = date.getFullYear();
                const dateWithMonth = `${month}-${year}`;
                item.dateWithMonth= dateWithMonth
            });
            setTBoday(documents)
        }

    }, [documents])


    const tractFitnessDashboard = [
        {
            title: dashBoardData?.weight + ' Kg',
            subTitle: 'Weight',
            icon: weightIcon
        },
        {
            title: dashBoardData?.maintenanceCal + ' Cal',
            subTitle: 'colories',
            icon: caloriesIcon
        }
    ]



    return (
        <SideMenuLayout title={'Track Fitness'}>
            <div className='flex justify-end mb-[20px]'>
                <a className='link-text text-[18px]' href='/trackFitness/trackFitnessForm'>Add</a>
            </div>
            <div className='flex  w-full gap-[20px] mb-[30px] flex-col sm:flex-row'>
                {
                    dashBoardData?.weight ? tractFitnessDashboard?.map((data, key) => {
                        return (
                            <IconWithTextCard
                                key={key + 1}
                                title={data?.title}
                                subTitle={data?.subTitle}
                                icon={data?.icon}
                            />
                        )
                    }) :
                        tractFitnessDashboard?.map((data, key) => {
                            return (
                                <Skeleton key={key} className='w-full h-[120px] rounded-[12px]' />
                            )
                        })
                }


            </div>{
                tbody ?
                    <CommonTable tableColumns={tableHeadingsData}>
                        {tbody?.map((data, key) => {
                            const date = data?.createdDate?.toDate()
                            const fitnessDate = moment(date).format('DD-MM-YYYY')

                            return (
                                <TableRow key={key}>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell>{fitnessDate ?? '-'}</TableCell>
                                    <TableCell>{data?.consumedCal && data?.maintenanceCal ? <><span className={data?.consumedCal > data?.maintenanceCal ? 'text-green-600' : 'text-red-600'}>{data?.consumedCal}</span> / <span>{data?.maintenanceCal} Cal</span> </> : '-'}</TableCell>
                                    <TableCell>{data?.weight ? data?.weight + 'Kg' : '-'}</TableCell>
                                    <TableCell>{data?.backlogCal && data?.backlogCal > 0 ? <span className='text-red-600'>{data?.backlogCal + ' Cal'}</span> : '-'}</TableCell>
                                </TableRow>
                            )
                        })}
                    </CommonTable> :
                    <TableSkeleton />
            }
        </SideMenuLayout>
    )
}


