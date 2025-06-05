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
        title: 'No',
        style: 'min-w-[120px]'
    },
    {
        title: 'Date',
        style: 'min-w-[120px]'
    },
    {
        title: 'Day',
        style: 'min-w-[120px]'
    },
    {
        title: 'Colories',
        style: 'min-w-[200px]'
    },
    {
        title: 'weight',
        style: 'min-w-[120px]'
    }
]

export default function Home() {
    const [tbody, setTBoday] = useState<trackFitnessData[]>()
    const documents = useFetchCollection<trackFitnessData>({ fbCollection: 'trackFitness',orderData: 'day', orderMethod: 'desc' })
    useEffect(() => {
        if (documents) setTBoday(documents)
    }, [documents])

    return (
        <SideMenuLayout title={'Track Fitness'}>
            <div className='flex justify-end mb-[20px]'>
                <a className='link-text text-[18px]' href='/trackFitness/trackFitnessForm'>Add</a>
            </div>
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
                    const date = data?.createdDate?.toDate()
                    const fitnessDate = moment(date).format('DD-MM-YYYY')
                  
                    return (
                        <TableRow key={key}>
                            <TableCell>{key + 1}</TableCell>
                            <TableCell>{fitnessDate ?? '-'}</TableCell>
                            <TableCell>{data?.day}</TableCell>
                            <TableCell>{data?.consumedCal && data?.maintenanceCal ? <><span className={data?.consumedCal > data?.maintenanceCal ? 'text-green-600' :'text-red-600'}>{data?.consumedCal}</span> / <span>{ data?.maintenanceCal} Cal</span> </> : '-'}</TableCell>
                            <TableCell>{data?.weight ? data?.weight + 'Kg' : '-'}</TableCell>
                        </TableRow>
                    )
                })}
            </CommonTable>
        </SideMenuLayout>
    )
}


