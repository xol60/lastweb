import React from 'react';
import { Container, Fab } from '@mui/material';
import './styles.css'

import AddIcon from '@mui/icons-material/Add'
import Header from '../components/Header';
import GroupList from '../components/GroupList';
import {customerState$} from '../redux/selectors'
import { useDispatch,useSelector } from 'react-redux';
import CreateGroupModal from '../components/CreateGroupModal';
import { showModal } from '../redux/actions';


function Groups() {

  const dispatch = useDispatch();
  const {info}=useSelector(customerState$)
  const openCreateGroupModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  console.log(info);
  return (
  
      
    
    
    <div className="app">
      <Header></Header>
   
    <Container maxWidth='lg' >
 
      <GroupList />
      <CreateGroupModal />
      <div style={{position:'fixed',bottom:30,right:30}}><Fab
        color='primary'
        onClick={openCreateGroupModal}
        
        
      >
        <AddIcon />
      </Fab>
      </div>
      
    </Container>
    </div>
  );
}
export default Groups;