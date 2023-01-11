import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Member from './Member';
import { membersState$ } from '../../redux/selectors';
import { useParams } from 'react-router-dom';
export default function MemberList() {
  const dispatch = useDispatch();
  const members = useSelector(membersState$);
  let id=useParams();
  React.useEffect(() => {
    dispatch(actions.getMembers.getMembersRequest(id));
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {members.map((member) => (
        <Grid key={member._id} item xs={12} sm={12}>
          <Member member={member} />
        </Grid>
      ))}
    </Grid>
  );
}