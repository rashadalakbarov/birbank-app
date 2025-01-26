"use client"

import React, { useState } from 'react'
import Link from 'next/link';

// icons
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md';

// image
import images from '@/constants/image';

// list
import { Avatar, Button, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface MenuItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  list?: MenuItem[] | string;
}

const menuItems: MenuItem[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
        list: "",
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
        list: "",
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
        list: "",
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
        list: "",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
        list: "",
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
        list: "",
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
        list: "",
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "",
        icon: <MdOutlineSettings />,
        list: [
          {
            title: "Account",
            path: "/settings/account",
            icon: <MdPeople />,
          }
        ],
      },
      {
        title: "Help",
        path: "",
        icon: <MdHelpCenter />,
        list: [
          {
            title: "Need",
            path: "/help/need",
            icon: <MdPeople />,
          }
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});


  const handleClick = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className='sticky top-10'>
      <div className="flex items-center mb-5 gap-5">
        <Avatar alt="profile" src={images.noavatar} sx={{width: 45, height: 45}}/>
        <div className="flex flex-col">
          <span className="font-medium">Rashad Alakbarov</span>
          <span className="text-xs text-muted">Administrator</span>
        </div>
      </div>

      {menuItems.map((item) => (
        <List key={item.title}
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{background: "transparent"}}>
            {item.title}
          </ListSubheader>
        }>
          {Array.isArray(item.list) ? (
            item.list?.map((subitem) => (
              <React.Fragment key={subitem.title}>
                 <Link href={subitem.path || "#"} passHref>
                  <ListItemButton onClick={() => handleClick(subitem.title)}>
                      <ListItemIcon>
                        {subitem.icon}
                      </ListItemIcon>
                      <ListItemText primary={subitem.title} />    
                      {Array.isArray(subitem.list) ? (
                        open[subitem.title] ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : null}     
                    </ListItemButton>
                 </Link>  
                {
                  Array.isArray(subitem.list) && (
                    <Collapse in={open[subitem.title] || false} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                      {subitem.list.map((childrenitem:MenuItem) => (
                        <Link href={childrenitem.path || "#"} key={childrenitem.title}>
                          <ListItemButton sx={{ pl: 4 }} >
                            <ListItemIcon>{childrenitem.icon}</ListItemIcon>
                            <ListItemText primary={childrenitem.title} />
                          </ListItemButton>
                        </Link>
                      ))}
                      </List>
                    </Collapse>
                  )
                }
              </React.Fragment>
            ))
          ) : (
            <ListItem>
              <ListItemText primary={item.list} />
            </ListItem>
          )}
        </List>
      ))}

      <Button variant="text" className='w-full text-white shadow-lg capitalize mt-4'><MdLogout className='mr-1'/> Sistemdən çıxış</Button>
    </div>
  )
}

export default Sidebar

{/* <ul className='sidebar-list'>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="list-cat">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul> */}