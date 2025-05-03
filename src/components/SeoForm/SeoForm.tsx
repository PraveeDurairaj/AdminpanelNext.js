import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { useUpdateData } from '@/hook/useUpdateData';
import { useGetData } from '@/hook/useGetData';
import { InputData } from '@/helper/type';
import { SeoData } from '@/helper/type';
import ModalPopup from '../ModalPopup/ModalPopup';

const InputGroup = ({ label, id, type, value, placeholder, readOnly, name, labelItem, onChangeFunction }: InputData) => {
  return (
    <div>

      {label && <label htmlFor={id} className="mb-1.5 flex gap-2 items-center text-[16px] font-[500]">
        <span>{label}</span>
        {labelItem && <span>{labelItem}</span>}
      </label>}
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
  const { data,fetchData } = useGetData('site data');
  const [isEdit, setEdit] = useState<boolean>(false);
  const { update, setUpdate, updateData } = useUpdateData('site data')
  const [seoData, setSeoData] = useState<SeoData>({
    metaTitle: '',
    MetaDescription: '',
    MetaKeywords: '',
    ogImage: ''
  });

  useEffect(() => {
    if (data) {
      setSeoData(data)
    } else {
      fetchData('KgLZiVEA1X1JFFf3Bl6h')
    }
    if (update) {
      toast("SEO form submitted successfully!", {
        description: "Your data has been saved and processed",
      });
      setUpdate(false)
      fetchData('KgLZiVEA1X1JFFf3Bl6h')
    }
  }, [data, update])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSeoData(prev => ({
      ...prev, [name]: value,
    }))
    if (!isEdit) {
      setEdit(true)
    }
  }
  const handleSubmit = () => {
    updateData('KgLZiVEA1X1JFFf3Bl6h', seoData)
    setEdit(false)
  }
  
  const handleCancel = () => {
    setEdit(false)
    if (data) setSeoData(data)
  }

  const renderForm = () => {
    return (
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
          value={seoData?.MetaDescription}
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
          labelItem={
            <ModalPopup
              title='OgImage preview'
              buttonText={'Preview'}
              content={<div className={'w-full h-[200px] rounded-[10px] bg-cover bg-center'} style={{ backgroundImage: `url("${seoData?.ogImage}")` }} ></div>} />
          }
        />
      </>
    )
  }
  const renderSkeleton = () => {
    return (
      [1, 2, 3, 4]?.map((data) => {
        return (
          <div key={data}>
            <Skeleton className='w-[150px] h-[20px] rounded-[4px] mb-1.5' />
            <Skeleton className='w-full h-[50px] rounded-[4px]' />
          </div>
        )
      })
    )
  }


  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data ? renderForm() : renderSkeleton()}
      </div>
      {isEdit && <div className='flex justify-end gap-3.5 pt-3 border-t border-[var(--border-primary)] mt-6'>
        <Button variant={'outline'} onClick={handleCancel}>cancel</Button>
        <Button onClick={handleSubmit}>save</Button>
      </div>}
      {
      !data && <div className='flex justify-end gap-3.5 mt-6' >
          <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
          <Skeleton className='w-[120px] h-[40px] rounded-[4px]' />
        </div>
      }
    </div>
  )
}

export default SeoForm
