import { INIT_STATE } from '../../constant';
import { getPresentations, getType, createPresentation, deletePresentation } from '../actions';
import { deleteG } from './function';
export default function presentationsReducers(state = INIT_STATE.presentations, action) {
  switch (action.type) {
    case getType(getPresentations.getPresentationsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPresentations.getPresentationsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPresentations.getPresentationsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPresentation.createPresentationSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      case getType(deletePresentation.deletePresentationSuccess):
        
        state.data=deleteG(state.data,action.payload);
        
        return{
          ...state,
          data:[...state.data],
          
        };
    
    default:
      return state;
  }
}