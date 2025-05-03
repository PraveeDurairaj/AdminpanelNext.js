import React from 'react';
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { tableData } from '@/helper/type';
import { TableSkeleton } from '../Skeletons/skeleton';

const CommonTable = ({ tableColumns, children }: tableData) => {

    return (
        (children ?
            <div className='rounded-[10px] w-full overflow-y-hidden overflow-x-auto'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={'w-[100px]'}>No</TableHead>
                            {tableColumns?.map((data, key) => {
                                return (<TableHead key={key} className={cn(data?.style, 'max-w-[300px]')}>{data?.title}</TableHead>)
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </div> : <TableSkeleton />)
    )
}

export default CommonTable





