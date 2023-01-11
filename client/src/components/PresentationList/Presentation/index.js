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
import { deletePresentation } from '../../../redux/actions';

export default function Presentation({ presentation }) {
  
  
  const navigate = useNavigate();

  const goToClass = () => {
    navigate(`/${presentation._id}`);
  };
  const [data, setData] = React.useState({
    _id:'',
    
  });
  const dispatch = useDispatch();
  
  const a=true;
  
  const onDelete = React.useCallback(() => {
   
    data._id=presentation._id
    
    dispatch(deletePresentation.deletePresentationRequest(data));
    
  }, [data, dispatch]);

  

  return (
    <Card>
      
      <CardHeader style={{backgroundColor: "brown"}}
        avatar={<Avatar>P</Avatar>}
        title={<Link underline='hover' color='white'  onClick={goToClass} variant='h4' >{presentation.name}</Link>}
        action=
        {a?(
        <>
        {
          <IconButton onClick={onDelete}>
            <DeleteIcon color="white"></DeleteIcon>
          </IconButton>
        }
        </>
      ):null}
       
        
      />
      
      
     
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          
        </Typography>
      </CardContent>
      
    </Card>
  );
}