'use client'
import SeoForm from '@/components/SeoForm/SeoForm';
import SideMenuLayout from '@/layouts/SideMenuLayout';

export default function Home() {

  return (
    <SideMenuLayout title={'SEO Settings'}>
      <SeoForm />
    </SideMenuLayout>
  );
}