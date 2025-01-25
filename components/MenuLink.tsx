"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface MenuItem {
    title: string;
    path: string;
    icon: React.ReactNode;
}
  
  interface MenuLinkProps {
    item: MenuItem;
}


const MenuLink = ({item}:MenuLinkProps) => {

  const pathname = usePathname();

  return (
    <Link href={item.path} className={`menu-container ${pathname === item.path && "menu-active"}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink