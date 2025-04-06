import React from 'react';
import { getData } from '@/hook/getData';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';

const SeoForm = () => {
  const { data } = getData('KgLZiVEA1X1JFFf3Bl6h', 'site data')
  return (
    <div className='p-4'>
      <h2 className='mb-5 text-[24px] font-[500]'>Manage SEO</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {/* {data ?
          <>
            <Input
              id="name"
              type="text"
              value={data?.metaTitle}
              label={'Meta title'}
              // onChange={(e) => setName(e.target.value)}
              placeholder="Enter meta title"
              readOnly
            />
            <Input
              id="name"
              type="text"
              value={data?.MetaDescription}
              label={'Meta description'}
              // onChange={(e) => setName(e.target.value)}
              placeholder="Enter meta description"
              readOnly
            />
            <Input
              id="name"
              type="text"
              value={data?.MetaKeywords}
              label={'Meta keyword'}
              // onChange={(e) => setName(e.target.value)}
              placeholder="Enter meta keywords"
              readOnly
            />
          </>
          : */}
          <>
            {[1, 2, 3]?.map((data) => {
              return (
                <div key={data}>
                  <Skeleton className='w-[150px] h-[20px] rounded-[4px] mb-1.5' />
                  <Skeleton className='w-full h-[50px] rounded-[4px]' />
                </div>
              )
            })}
          </>
        {/* } */}
      </div>
    </div>
  )
}

export default SeoForm
