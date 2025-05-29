'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import SideMenuLayout from '@/layouts/SideMenuLayout';
import weightIcon from '../../../public/weight.png';
import IconWithTextCard from '@/components/ui/IconWithTextCard';
import caloriesIcon from '../../../public/calories.png';
import { Skeleton } from '@/components/ui/skeleton';
import CommonTable from '@/components/Table/Table';
import { trackFitnessData } from '@/helper/type';

const tractFitnessDashboard = [
    {
        title: '46 Kg',
        subTitle: 'Weight',
        icon: weightIcon
    },
    {
        title: '1500 cal',
        subTitle: 'colories',
        icon: caloriesIcon
    }
]
const tableHeadingsData = [
    {
        title: 'Date',
        style: 'min-w-[120px]'
    },
    {
        title: 'wakeup time',
        style: 'min-w-[120px]'
    },
    {
        title: 'Step count',
        style: 'min-w-[150px]'
    },
    {
        title: 'Colories',
        style: 'min-w-[200px]'
    },
    {
        title: 'workout',
        style: 'min-w-[120px]'
    }
]

const trackFitnessTableData = [
    {
        date: '29/05/2025',
        wakeupTime: '06:55 AM',
        stepCount: '2000',
        colories: 1800,
        workout: 'multi Class'
    }


]

const page = () => {
    useEffect(() => {
        setTBoday(trackFitnessTableData)

    }, [])
    const [tbody, setTBoday] = useState<trackFitnessData[]>()
    return (
        <SideMenuLayout title={'Track Fitness'}>
            <div className='flex  w-full gap-[20px] mb-[30px] flex-col sm:flex-row'>
                {
                    tbody ? tractFitnessDashboard?.map((data, key) => {
                        return (
                            <IconWithTextCard
                                key={key}
                                title={data?.title}
                                subTitle={data?.subTitle}
                                icon={data?.icon}
                            />
                        )
                    }) :
                        tractFitnessDashboard?.map((data) => {
                            return (
                                <Skeleton key={data?.title} className='w-full h-[120px] rounded-[12px]' />
                            )
                        })
                }


            </div>
            <CommonTable tableColumns={tableHeadingsData}>
                {tbody?.map((data, key) => {
                    return (
                        <TableRow key={key}>
                            <TableCell>{key + 1}</TableCell>
                            <TableCell>{data?.date}</TableCell>
                            {data?.wakeupTime && <TableCell>{data?.wakeupTime}</TableCell>}
                            {data?.stepCount && <TableCell>{data?.stepCount}</TableCell>}
                            {data?.colories && <TableCell>{data?.colories}</TableCell>}
                            <TableCell>{data?.workout ? data?.workout : '-'}</TableCell>
                        </TableRow>
                    )
                })}
            </CommonTable>
        </SideMenuLayout>
    )
}

export default page
