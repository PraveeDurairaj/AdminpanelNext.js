'use client'
import SeoForm from '@/components/SeoForm/SeoForm';
import SideMenu from '@/components/SideMenu/SideMenu';

export default function Home() { 

  return (
  <div className='flex items-start' >
  <SideMenu/>
  <div className='grow'>
  <SeoForm/>
  </div>
  </div>
  );
}
