import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import './Navbar.css'


const Navbar = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null)
    // <null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    const navigateToProfile = () => {
        navigate('/my-profile')
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () =>{
        setAnchorEl(null);
    }

    const handleLogout = () =>{
        console.log('Handle Logout')
    }

    
  return (
    <Box className='px-5 sticky top-0 z-50 py-[1.2rem] bg-[#292828a2] lg:px-20 flex justify-between'>
        <div className='space-x-4 flex items-center'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4' onClick={() => navigate('/') }>
                <li className='logo font-semibold text-2xl '>Vishwaraj Food</li>
            </div>
        </div>

        <div className='flex items-center space-x-2 lg:space-x-10'>
            <IconButton>
                <SearchIcon sx={{fontSize:"1.5rem"}}/>
            </IconButton>

            {false?<span 
            id="basic-button"
            aria-controls={openMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
         
         className='font-semibold cursor-pointer' onClick={true?handleOpenMenu:navigateToProfile}>Bhushan</span>:
         <IconButton onClick={() => navigate('/account/register')}>
                <PersonIcon sx={{fontSize:"1.5rem"}}/>
            </IconButton>}

            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate('./admin')}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
            

            <IconButton>
                <ShoppingCartIcon onClick={()=> navigate('/cart')} sx={{fontSize:"1.5rem"}}/>
            </IconButton>

        </div>
      
    </Box>
  )
}

export default Navbar
