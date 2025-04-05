'use client'
import SideMenu from '@/components/SideMenu/SideMenu';
// hook
import { useGetDocs } from '@/hook/useFirebaseCURD';
import { useEffect } from 'react';

export default function Home() {
  // const {getBlogData,blog} = useGetDocs('site data')
  // useEffect(()=>{
  //   getBlogData('KgLZiVEA1X1JFFf3Bl6h')
  // },[blog])

  return (
  <>
  <SideMenu/>
  </>
  );
}
