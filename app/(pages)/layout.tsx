import React from 'react'

// components
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({children}:DashboardLayoutProps) => {
  return (
    <div className='flex'>
      <div className='p-5 min-h-screen flex-1' style={{background: "var(--theme-color)"}}>
        <Sidebar/>
      </div>
      <div className='p-5 flex-[4]'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout