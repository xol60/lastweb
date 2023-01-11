import { INIT_STATE } from '../../constant';
import { getGroups, getType, createGroup, deleteGroup } from '../actions';
import { deleteG} from './function';

export default function groupsReducers(state = INIT_STATE.groups, action) {
  switch (action.type) {
    case getType(getGroups.getGroupsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getGroups.getGroupsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getGroups.getGroupsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createGroup.createGroupSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      case getType(deleteGroup.deleteGroupSuccess):
        
        state.data=deleteG(state.data,action.payload);
        
        return{
          ...state,
          data:[...state.data],
          
        };
    
    default:
      return state;
  }
}