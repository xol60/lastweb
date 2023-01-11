

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
  
    const a=true;
    const dispatch = useDispatch();
    const openCreatePresentationModal = React.useCallback(() => {
        dispatch(showPresentationModal());
      }, [dispatch]);
    
  
    return (
      <div className="app">
        <Header></Header>
      <Container maxWidth='lg' >
       
          <div class="Era2ub QRiHXh">
            <h2 class="B7SYih">
                Presentations
            </h2>
        </div>
        <PresentationList />
        {a?(
      <>
        <CreatePresentationModal />
      <div style={{position:'fixed',bottom:30,right:30}}><Fab
        color='primary'
        onClick={openCreatePresentationModal}
        
        
      >
        <AddIcon />
      </Fab>
      </div>
      </>
      ):null}
        
        
      </Container>
      </div>
    );
  }
  export default Presentations;