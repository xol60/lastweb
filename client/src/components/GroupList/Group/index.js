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
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';


import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Group({ group }) {
  
  
  const navigate = useNavigate();

  const goToClass = () => {
    navigate(`/group/${group._id}`);
  };

  

  return (
    <Card>
      
      <CardHeader style={{backgroundColor: "#106de7"}}
        avatar={<Avatar>G</Avatar>}
        title={<Link underline='hover' color='white'  onClick={goToClass} variant='h4' >{group.name}</Link>}
       
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      
      
      <CardMedia
        image={group.avatar || ''}
        title='Title'
        
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {group.password}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {group.email}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton >
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
          
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}