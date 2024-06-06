import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';



const Profilenavigation = ({open,handleClose}) => {
  const menu = [
    {title: "Order", icon: <ShoppingBagIcon />},
    {title: "Foverite", icon: <FavoriteIcon />},
    {title: "Addrest", icon: <HomeIcon />},
    {title: "Payments", icon: <AccountBalanceWalletIcon />},
    {title: "Notification", icon: <NotificationsIcon />},
    {title: "Event", icon: <EventIcon />},
    {title: "Logout", icon: <LogoutIcon />},
  ]

    const isSmallScreen = useMediaQuery('(max-width: 1080px)');
    const navigate = useNavigate();
    const handleNavigate = (item) => {
      navigate(`/my-profile/${item.title.toLowerCase()}`)
    }

  return (

    <div>
      <Drawer onClose={handleClose} open={open} variant={isSmallScreen ? "temporary": "permanent" } anchor='left' sx={{zIndex: -1, position:"sticky"} } >

            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-10 '>
                        

                {menu.map((item,i) => 
                <>
                    <div onClick={() => handleNavigate(item)} className='px-5 flex item-center space-x-5 cursor-pointer'>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                        <Divider/>
                </>)}
            </div>
      </Drawer>
    </div>
  )
}

export default Profilenavigation
