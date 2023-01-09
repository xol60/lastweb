import { INIT_STATE } from '../../constant';
import { getPresentations, getType, createPresentation,  } from '../actions';

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
    
    default:
      return state;
  }
}