import { INIT_STATE } from '../../constant';
import { getSliders, getType  } from '../actions';

export default function groupsReducers(state = INIT_STATE.sliders, action) {
  switch (action.type) {
    case getType(getSliders.getSlidersRequest):

    {
      return {
        ...state,
        isLoading:true
      };
    }
    case getType(getSliders.getSlidersSuccess):
      {
        console.log(action.payload);
      return {
        ...state,
        isLoading:false,
        data: action.payload,
      };
      
    }
    case getType(getSliders.getSlidersFailure):
      return {
        ...state,
        isLoading:false,
      };
    
    default:
      return state;
  }
}