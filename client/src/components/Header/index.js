import React from 'react';

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  
} from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function Header() {
  const navigate = useNavigate();
  const goToGroups = () => {
    navigate(`/groups`);
  };

  return (
   
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          
          
            
             
              
            
        
          
              <Tabs
                sx={{ marginRight: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                
                
              >
                <Tab label="Groups" onClick={goToGroups} />
                
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Logout
              </Button>
             
            
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
   
    

  );
}