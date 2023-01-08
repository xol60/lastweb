import React from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';
import { membersState$ } from '../redux/selectors';
import {useParams} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add'
import { Container, Fab } from '@mui/material';
import { showMemberModal } from '../redux/actions';
import AddMemberModal from '../components/AddMemberModal';
function Success(){
    const dispatch = useDispatch();
  const members = useSelector(membersState$);
  let id=useParams();
  
  

  React.useEffect(() => {
    dispatch(actions.getMembers.getMembersRequest(id));
  }, [id,dispatch]);
  const openAddMemberModal = React.useCallback(() => {
    dispatch(showMemberModal());
  }, [dispatch]);
    return(
		<Container  maxWidth='lg' >
        <div>
        <div class="Era2ub QRiHXd">
            <h2 class="B7SYid">
                Members
            </h2>
        </div>
        <table class="XNIQbd Oo2pXc">
			<thead class="thead-dark">
						    <tr>
						      <th>ID no.</th>
						      <th>First Name</th>
						      <th>Last Name</th>
						      <th>Email</th>
						      <th>&nbsp;</th>
						    </tr>
			</thead>
            <tbody>
            {members.map((member) => (
                <tr class="alert" role="alert">
				<th scope="row">001</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>markotto@email.com</td>
				<td>
					<a href="#" class="close" data-dismiss="alert" aria-label="Close">
				  <span aria-hidden="true"><i class="fa fa-close"></i></span>
				</a>
			  </td>
			  </tr>
                ))}
            </tbody>

        </table>
		<AddMemberModal></AddMemberModal>
		<div style={{position:'fixed',bottom:30,right:30}}><Fab
        color='primary'
        onClick={openAddMemberModal}
        
        
      >
        <AddIcon />
      </Fab>
      </div>
        </div>
		</Container>

    )
    
}
export default Success