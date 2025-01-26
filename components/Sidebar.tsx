"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { MenuItem, menuItems } from '@/constants/menuItem';

// icons
import { MdLogout} from 'react-icons/md';

// image
import images from '@/constants/image';

// list
import { Avatar, Button, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});


  const handleClick = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className='sticky top-10 min-w-max'>
      <div className="flex items-center mb-5 gap-5">
        <Avatar alt="profile" src={images.noavatar} sx={{width: 40, height: 40}}/>
        <div className="flex flex-col">
          <span className="font-medium">Rashad Alakbarov</span>
          <span className="text-xs" style={{color: "#c9d6e1"}}>Təbriz Fiilialı</span>
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