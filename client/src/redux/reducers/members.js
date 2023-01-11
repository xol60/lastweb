import { INIT_STATE } from '../../constant';
import { getMembers, getType, addMember,deleteMember } from '../actions';
import { deleteG} from './function';

export default function membersReducers(state = INIT_STATE.members, action) {
  switch (action.type) {
    case getType(getMembers.getMembersRequest):
      return {
        ...state,
        isLoading: true,
      
      };
    case getType(getMembers.getMembersSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getMembers.getMembersFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(addMember.addMemberSuccess):
        return {
          ...state,
          data: [...state.data, action.payload],
        };
        case getType(deleteMember.deleteMemberSuccess):
        
        state.data=deleteG(state.data,action.payload);
        
        return{
          ...state,
          data:[...state.data],
          
        };
    
    
    default:
      return state;
  }
}