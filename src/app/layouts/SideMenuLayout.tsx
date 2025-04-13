import SideMenu from '@/components/SideMenu/SideMenu';
import { ReactNode } from 'react';


const SideMenuLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex'>
      <SideMenu/>
      <div className='mt-[60px] md:mt-[0px] grow bg-[var(--bg-secondray)]'>
      {children}
      </div>
    </div>
  )
}

export default SideMenuLayout
