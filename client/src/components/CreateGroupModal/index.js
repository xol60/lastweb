import { Button, Modal, TextField } from '@mui/material';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import { customerState$ } from '../../redux/selectors';

import { createGroup, hideModal,addMember } from '../../redux/actions';
import { spacing } from '@mui/system';
export default function CreateGroupModal() {
  const [data, setData] = React.useState({
    groupname: '',
    title:'',
    id_customer:''
    
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  let i=useSelector(customerState$);
  

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      groupname: '',
      title:'',
      id_customer:''
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    data.id_customer=i.info.id
    let datas={
      id_customer:i.info.id,
      role:'Owner',


    }
    dispatch(addMember.addMemberRequest(datas));
    dispatch(createGroup.createGroupRequest(data));
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
      <h2 style={{textAlign:'center'}}>Create New Group</h2>
      <form noValidate autoComplete='off' style={{display: 'flex',
    flexDirection: 'column',}}>
        <TextField
          style={{marginBottom: '10px'}}
          required
          label='Group name(Required)'
          value={data.groupname}
          onChange={(e) => setData({ ...data, groupname: e.target.value })}
        />
        <TextField
          style={{marginBottom: '10px'}}
          
          label='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
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