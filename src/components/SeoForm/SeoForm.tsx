import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useGetData } from '@/hook/useGetData';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import { useUpdateData } from '@/hook/useUpdateData';
import { InputData } from '@/helper/type';
import { SeoData } from '@/helper/type';

const InputGroup = ({ label, id, type, value, placeholder, readOnly, name, onChangeFunction }: InputData) => {
  return (
    <div>
      {label && <label htmlFor={id} className="mb-1.5 inline-block text-[16px] font-[500]">{label}</label>}
      <Input
        id={id}
        type={type}
        value={value ?? ''}
        onChange={onChangeFunction}
        placeholder={placeholder}
        readOnly={readOnly}
        name={name}
      />
    </div>
  )
}

const SeoForm = () => {
  const { data } = useGetData('KgLZiVEA1X1JFFf3Bl6h','site data');
  const [isEdit,setEdit] = useState<boolean>(false);
  const { updateData } = useUpdateData('site data')
  const [seoData, setSeoData] = useState<SeoData>({
    metaTitle: '',
    MetaDescription: '',
    MetaKeywords: '',
    ogImage: ''
  });

  useEffect(() => {
    if (data) setSeoData(data)
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSeoData(prev => ({
      ...prev, [name]: value,
    }))
    if(!isEdit){
      setEdit(true)
    }
  }
  const handleSubmit = ()=>{
    updateData('KgLZiVEA1X1JFFf3Bl6h',seoData)
    setEdit(false)
  }
  const handleCancel = ()=>{
    setEdit(false)
    if (data) setSeoData(data)
  }


  return (
    <div className='p-4'>
      <h2 className='mb-5 text-[24px] font-[500]'>Manage SEO</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data ?
          <>
            <InputGroup
              id="metaTitle"
              type="text"
              name='metaTitle'
              value={seoData?.metaTitle}
              onChangeFunction={handleChange}
              placeholder="Enter meta title"
              label='Meta title'
            />
            <InputGroup
              id="MetaDescription"
              type="text"
              value={seoData?.MetaDescription ?? ''}
              name='MetaDescription'
              onChangeFunction={handleChange}
              placeholder="Enter meta description"
              label='Meta description'
            />
            <InputGroup
              id="MetaKeywords"
              type="text"
              name='MetaKeywords'
              value={seoData?.MetaKeywords}
              onChangeFunction={handleChange}
              placeholder="Enter meta keywords"
              label='Meta keyword'
            />
            <InputGroup
              id="ogImage"
              type="text"
              name='ogImage'
              value={seoData?.ogImage}
              onChangeFunction={handleChange}
              placeholder="Enter ogImage url"
              label='Og Image'
            />
            {/* <div className={'w-[200px] h-[200px]'} style={{ backgroundImage: `url("${seoData?.ogImage}")` }} ></div> */}
          </>
          :
          <>
            {[1, 2, 3, 4]?.map((data) => {
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
      {isEdit && <div className='flex justify-end gap-3.5 pt-3 border-t'>
            <button onClick={handleCancel}>cancel</button>
            <button onClick={handleSubmit}>save</button>
            </div>}
            {
              data && <div className='flex justify-end gap-3.5 m-6' >
                 <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
                 <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
              </div>
            }
    </div>
  )
}

export default SeoForm
