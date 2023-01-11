import { Button, Modal, TextField, Select,MenuItem} from '@mui/material';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { memberModalState$ } from '../../redux/selectors';

import { addMember, hideMemberModal } from '../../redux/actions';
import { spacing } from '@mui/system';
import { useParams } from 'react-router-dom';
export default function AddMemberModal() {
  const [data, setData] = React.useState({
    email: '',
    role:'Member',
    group_id:''
    
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(memberModalState$);
  const params=useParams()
  

  const onClose = React.useCallback(() => {
    dispatch(hideMemberModal());
    setData({
      email: '',
      role:'Member',
      group_id:''
      
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    data.group_id=params.id
    
    dispatch(addMember.addMemberRequest(data));
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
      <h2 style={{textAlign:'center'}}>Add New Member</h2>
      <form noValidate autoComplete='off' style={{display: 'flex',
    flexDirection: 'column',}}>
        <TextField
          style={{marginBottom: '10px'}}
          required
          label='Email(Required)'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Select
      
    value={data.role}
    label="Role"
    onChange={(e) => setData({ ...data, role: e.target.value })}
  >
    <MenuItem value="Co-owner">Co-owner</MenuItem>
    <MenuItem value="Member">Member</MenuItem>
    
  </Select>
        
        
        <div style={{marginTop: '10px',}}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Add
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