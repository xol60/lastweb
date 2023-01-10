

import React from 'react';
import { Container, Fab } from '@mui/material';
import './styles.css'

import AddIcon from '@mui/icons-material/Add'

import PresentationList from '../components/PresentationList';

import { useDispatch } from 'react-redux';
import CreatePresentationModal from '../components/CreatePresentationModal';
import { showPresentationModal } from '../redux/actions';
import Header from '../components/Header';

function Presentations() {

    const dispatch = useDispatch();
    const openCreatePresentationModal = React.useCallback(() => {
        dispatch(showPresentationModal());
      }, [dispatch]);
    
  
    return (
      <div className="app">
      <Container maxWidth='lg' >
        <Header></Header>
        <PresentationList />
        <CreatePresentationModal />
      <div style={{position:'fixed',bottom:30,right:30}}><Fab
        color='primary'
        onClick={openCreatePresentationModal}
        
        
      >
        <AddIcon />
      </Fab>
      </div>
        
        
      </Container>
      </div>
    );
  }
  export default Presentations;