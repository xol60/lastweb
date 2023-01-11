import { Button, Modal, TextField } from '@mui/material';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { presentationModalStates$ } from '../../redux/selectors';

import { createPresentation, hidePresentationModal } from '../../redux/actions';
import { spacing } from '@mui/system';
import { useParams } from 'react-router-dom';
import { customerState$ } from '../../redux/selectors';
export default function CreatePresentationModal() {
  let i=useSelector(customerState$)
  const [data, setData] = React.useState({
    presentationname: '',
    group_id:'',
    customer_id:''
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(presentationModalStates$);
  let params=useParams();

  const onClose = React.useCallback(() => {
    dispatch(hidePresentationModal());
    setData({
    presentationname: '',
    group_id:'',
    customer_id:''
      
    });
  }, [dispatch]);

  
  const onSubmit = React.useCallback(() => {
    data.group_id=params.id
    data.customer_id=i.info.id
    dispatch(createPresentation.createPresentationRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div style={{top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    boxShadow: 5,
    padding: spacing(2, 4, 3),}} id='simple-modal-title'>
      <h2 style={{textAlign:'center'}}>Create New Presentation</h2>
      <form noValidate autoComplete='off' style={{display: 'flex',
    flexDirection: 'column',}}>
        <TextField
          style={{marginBottom: '10px'}}
          required
          label='Name of Presentation(Required)'
          value={data.presentationname}
          onChange={(e) => setData({ ...data, presentationname: e.target.value })}
        />
        
        
        <div style={{marginTop: '10px',}}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}