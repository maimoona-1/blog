import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import PetsIcon from '@mui/icons-material/Pets';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector(state => state.user);
  const { name, avatarUrl } = currentUser;

  return (
    <AppBar position='sticky'>
      <Toolbar className='navStyle'>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <div className='searchBar'>
          <InputBase placeholder='  Search…' />
        </div>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='error'>
              <EmailIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit'>
            <Badge badgeContent={17} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' onClick={() => setOpen(true)}>
            <Avatar sx={{ width: 30, height: 30 }} alt={name} src={avatarUrl} />
          </IconButton>
        </Box>
        <IconButton
          sx={{ display: { xs: 'block', sm: 'none' } }}
          color='inherit'
          onClick={() => setOpen(true)}
        >
          <Avatar sx={{ width: 30, height: 30 }} alt={name} src={avatarUrl} />
          <Typography>Elena</Typography>
        </IconButton>
      </Toolbar>

      <Menu
        id='simple-menu'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transormOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>
          <Link to='/login'>Logout</Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
