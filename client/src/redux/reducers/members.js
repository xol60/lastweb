import { INIT_STATE } from '../../constant';
import { getMembers, getType } from '../actions';

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
    
    
    default:
      return state;
  }
}