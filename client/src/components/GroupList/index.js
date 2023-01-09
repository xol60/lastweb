import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Group from './Group';
import { groupsState$ } from '../../redux/selectors';

export default function GroupList() {
  const dispatch = useDispatch();
  const groups = useSelector(groupsState$);

  React.useEffect(() => {
    dispatch(actions.getGroups.getGroupsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {groups.map((group) => (
        <Grid key={group._id} item xs={12} sm={12}>
          <Group group={group} />
        </Grid>
      ))}
    </Grid>
  );
}