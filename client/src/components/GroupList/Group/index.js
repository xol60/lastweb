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
import { customerState$,membersState$ } from '../../../redux/selectors';

import { useDispatch,useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";
import { deleteGroup } from '../../../redux/actions';
import { canDelete } from '../function';


export default function Group({ group }) {
  
  const [data, setData] = React.useState({
    _id:'',
    
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let i=useSelector(customerState$);
  let members=useSelector(membersState$);
  
  let a=canDelete(members,i.info.id,group._id)

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
      
      
      
      <CardContent style={{backgroundColor:'greenyellow'}}>
        <Typography variant='h5' color='textPrimary'>
          {group.title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          
        </Typography>
      </CardContent>
      
      <CardMedia style={{height:500}}
        image="https://img.freepik.com/free-vector/group-therapy-illustration-concept_52683-45727.jpg?w=1060&t=st=1673414932~exp=1673415532~hmac=934f4b9aa97c52229bc072d693de2976287d6ff8ec12455f8c2ae83ea09dc6e9"
        title='Title'
        
      />
    </Card>
  );
}