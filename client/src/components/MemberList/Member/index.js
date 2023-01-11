import React, { useState } from 'react';

import {
  Avatar,
  Card,
  Link,
 
  CardHeader,
  
  IconButton,
  
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';


import { deleteMember } from '../../../redux/actions';

export default function Member({ member }) {
  
  const [data, setData] = React.useState({
    _id:'',
    
  });
  const dispatch = useDispatch();
  
  
  const a=true;
  
  const onDelete = React.useCallback(() => {
   
    data._id=member._id
    
    dispatch(deleteMember.deleteMemberRequest(data));
    
  }, [data, dispatch]);

  

  return (
    <Card>
      
      <CardHeader style={{backgroundColor: "grey"}}
        avatar={<Avatar>M</Avatar>}
        title={member.name}
        subheader={member.role}
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
      
      
      
    </Card>
  );
}