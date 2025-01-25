"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='navbar-container'>
      <div className="navbar-title">{pathname.split("/").pop()}</div>
      <div className="navbar-menu">
        <div className="navbar-search">
          <MdSearch />
          <input type="text" placeholder="Axtar..." className="navbar-input" />
        </div>
        <div className="navbar-icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar