import React from 'react';

import {
  Avatar,
  Card,
  Link,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';




import { useNavigate } from "react-router-dom";

export default function Presentation({ presentation }) {
  
  
  const navigate = useNavigate();

  const goToClass = () => {
    navigate(`/${presentation._id}`);
  };

  

  return (
    <Card>
      
      <CardHeader style={{backgroundColor: "purple"}}
        avatar={<Avatar>P</Avatar>}
        title={<Link underline='hover' color='white'  onClick={goToClass} variant='h4' >{presentation.name}</Link>}
       
        
      />
      
      
      <CardMedia
        image={presentation.avatar || ''}
        title='Title'
        
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {presentation.password}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {presentation.email}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton >
          
          <Typography component='span' color='textSecondary'>
          
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}