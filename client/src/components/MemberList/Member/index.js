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
import { useSelector } from 'react-redux';
import { customerState$,membersState$ } from '../../../redux/selectors';

import { deleteMember } from '../../../redux/actions';
import { useParams } from 'react-router-dom';
import { candeleteM } from '../function';

export default function Member({ member }) {
  
  const [data, setData] = React.useState({
    _id:'',
    
  });
  const dispatch = useDispatch();
  let params=useParams();
  let i=useSelector(customerState$);
  let members=useSelector(membersState$);
  let a=candeleteM(members,i.info.id,params.id)
  if(member.role==="Owner"){
    a=false
  }
  
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