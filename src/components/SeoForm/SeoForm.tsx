import React, { useEffect, useState } from 'react';
import { useGetData } from '@/hook/useGetData';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import { InputData } from '@/helper/type';

const SeoForm = () => {
  const { data } = useGetData('KgLZiVEA1X1JFFf3Bl6h', 'site data');
  // const [isEdit,setEdit] = useState(false);
  const [seoData , setSeoData] = useState<any | null>(null);
  useEffect(()=>{
    if(data){
      setSeoData(data)
    }
  },[data])


  const InputGroup = ({ label, id, type, value, placeholder, readOnly }:InputData) => {
    return (
      <div>
        {label && <label  className="mb-1.5 inline-block text-[16px] font-[500]">{label}</label>}
        <Input
          id={id}
          type={type}
          value={value}
          // onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </div>
    )
  }
  
  return (
    <div className='p-4'>
      <h2 className='mb-5 text-[24px] font-[500]'>Manage SEO</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {data ?
          <>
            <InputGroup
             id="name"
             type="text"
             value={seoData?.metaTitle}
             // onChange={(e) => setName(e.target.value)}
             placeholder="Enter meta title"
             readOnly
             label='Meta title'
            />
             <InputGroup
             id="name"
             type="text"
             value={seoData?.MetaDescription}
             // onChange={(e) => setName(e.target.value)}
             placeholder="Enter meta description"
             readOnly
             label='Meta description'
            />
             <InputGroup
             id="name"
             type="text"
             value={seoData?.MetaKeywords}
             // onChange={(e) => setName(e.target.value)}
             placeholder="Enter meta keywords"
             readOnly
             label='Meta keyword'
            />
          </>
          :
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
        }
      </div>
    </div>
  )
}

export default SeoForm
