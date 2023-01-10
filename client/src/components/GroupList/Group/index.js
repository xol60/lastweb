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
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";
import { deleteGroup } from '../../../redux/actions';

export default function Group({ group }) {
  
  const [data, setData] = React.useState({
    _id:'',
    
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const a=true;
  const goToClass = () => {
    navigate(`/${group._id}`);
  };
  const onDelete = React.useCallback(() => {
   
    data._id=group._id
    
    dispatch(deleteGroup.deleteGroupRequest(data));
    
  }, [data, dispatch]);

  

  return (
    <Card>
      
      <CardHeader style={{backgroundColor: "#106de7"}}
        avatar={<Avatar>G</Avatar>}
        title={<Link underline='hover' color='white'  onClick={goToClass} variant='h4' >{group.name}</Link>}
        action=
        {a?(
        <>
        {
          <IconButton onClick={onDelete}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        }
        </>
      ):null}
       
        
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
          
          <Typography component='span' color='textSecondary'>
          
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}