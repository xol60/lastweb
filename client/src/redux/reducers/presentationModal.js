import { INIT_STATE } from '../../constant';
import { getType, hidePresentationModal, showPresentationModal } from '../actions';

export default function modalReducers(state = INIT_STATE.presentationModal, action) {
  switch (action.type) {
    case getType(showPresentationModal):
      return {
        isShow: true,
      };
    case getType(hidePresentationModal):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}