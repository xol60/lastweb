import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Group from './Group';
import { groupsState$, membersState$ } from '../../redux/selectors';
import { customerState$ } from '../../redux/selectors';
import { checkF } from './function';

export default function GroupList() {
  const dispatch = useDispatch();
  let groups = useSelector(groupsState$);
  let i=useSelector(customerState$);
  let members=useSelector(membersState$);
  console.log(i)
  groups=checkF(groups,i.info.id,members)
  

  React.useEffect(() => {
    dispatch(actions.getGroups.getGroupsRequest());
    dispatch(actions.getMembers.getMembersRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {groups.map((group) => (
        <Grid key={group._id} item xs={12} sm={6}>
          <Group group={group} />
        </Grid>
      ))}
    </Grid>
  );
}