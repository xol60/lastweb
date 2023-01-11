import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Presentation from './Presentation';
import { presentationsState$ } from '../../redux/selectors';
import { useParams } from 'react-router-dom';
import { check } from './function';

export default function PresentationList() {
  const dispatch = useDispatch();
  let presentations = useSelector(presentationsState$);
  let data=useParams();
  
  presentations=check(presentations,data.id);
  
  console.log(presentations)
  React.useEffect(() => {
    dispatch(actions.getPresentations.getPresentationsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {presentations.map((presentation) => (
        <Grid key={presentation._id} item xs={12} sm={12    }>
          <Presentation presentation={presentation} />
        </Grid>
      ))}
    </Grid>
  );
}