import React from 'react';
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { tableData } from '@/helper/type';

const CommonTable = ({ tableColumns, tableRowData }: tableData) => {

    return (
        <div className='rounded-[10px] w-full overflow-y-hidden overflow-x-auto'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className={'w-[100px]'}>No</TableHead>
                        {tableColumns?.map((data, key) => {
                            return (<TableHead key={key} className={cn(data?.style,'max-w-[300px]')}>{data?.title}</TableHead>)
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableRowData?.map((data, key) => (
                        <TableRow key={key}>
                            <TableCell>{key + 1}</TableCell>
                            {data?.name && <TableCell>{data?.name}</TableCell>}
                            {data?.mobileNo && <TableCell>{data?.mobileNo}</TableCell>}
                            {data?.message && <TableCell>{data?.message}</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default CommonTable





