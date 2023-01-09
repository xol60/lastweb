import React from 'react';
import { Typography } from '@mui/material';
import {
  AppBar, Box, Button, Link, Toolbar,
} from '@mui/material';

export default function Header() {
  

  return (
   
    <AppBar position="fixed">
      <Toolbar>
       
        <Link
          
          to="/"
          variant="h5"
          color="inherit"
          underline="none"
          noWrap
        >
          Home
        </Link>
        <Link
          sx={{ marginLeft: 2 }}
          
          to="/group"
          variant="h5"
          color="inherit"
          underline="none"
          noWrap
        >
          Group
        </Link>
        
        <div />
        
      </Toolbar>
    </AppBar>
   
    

  );
}