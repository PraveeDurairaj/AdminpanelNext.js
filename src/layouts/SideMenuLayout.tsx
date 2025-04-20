import SideMenu from '@/components/SideMenu/SideMenu';
import { ReactNode } from 'react';


const SideMenuLayout = ({children,title}:{children:ReactNode,title?:string}) => {
  return (
    <div className='flex'>
      <SideMenu/>
      <div className='mt-[60px] md:mt-[0px] grow bg-[var(--bg-secondray)] p-4'>
     {title &&  <h2 className='mb-5 text-[24px] font-[500]'>{title}</h2>} 
      {children}
      </div>
    </div>
  )
}

export default SideMenuLayout
