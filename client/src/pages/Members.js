import React from 'react'
import './styles.css'
import { useDispatch,useSelector} from 'react-redux';
import * as actions from '../redux/actions';

import {useParams} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add'
import { Container, Fab } from '@mui/material';
import { showMemberModal } from '../redux/actions';
import AddMemberModal from '../components/AddMemberModal';
import MemberList from '../components/MemberList';
import Header from '../components/Header';
import { customerState$ } from '../redux/selectors';
import { membersState$ } from '../redux/selectors';
import { candeleteM } from '../components/MemberList/function';

function Members(){
    const dispatch = useDispatch();
  
  let id=useParams();
  
  let i=useSelector(customerState$);
  let members=useSelector(membersState$);
  const a=candeleteM(members,i.info.id,id.id)

  React.useEffect(() => {
    dispatch(actions.getMembers.getMembersRequest(id));
  }, [id,dispatch]);
  const openAddMemberModal = React.useCallback(() => {
    dispatch(showMemberModal());
  }, [dispatch]);
    return(
      
      <div  className='app'>
  <Header></Header>
		<Container  maxWidth='lg' >
        <div>
        <div class="Era2ub QRiHXd">
            <h2 class="B7SYid">
                Members
            </h2>
        </div>
        <MemberList />
      {a?(
      <>
     
		  <AddMemberModal></AddMemberModal>
		<div style={{position:'fixed',bottom:30,right:30}}><Fab
        color='primary'
        onClick={openAddMemberModal}
        
        
      >
        <AddIcon />
      </Fab>
      </div>
      </>
      ):null}
        </div>
        
		</Container>
    </div>

    )
    
}
export default Members