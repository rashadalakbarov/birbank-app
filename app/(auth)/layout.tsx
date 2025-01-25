import { Metadata } from 'next';
import React from 'react'
import Image from 'next/image';

// constants
import images from '@/constants/image';

// components
import Card from '@/components/Card';

export const metadata: Metadata = {
    title: "Birbank - Login",
};

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div>
            <div className="flex flex-col items-center mb-4">
                <Image src={images.logo_text} alt="Logo" className="w-72 h-28 mb-2" width={288} height={112} priority/>
            </div>
            <Card>
                {children}
            </Card>
        </div>
    </div>
  )
}

export default AuthLayout