import { INIT_STATE } from '../../constant';
import { getType, hideMemberModal, showMemberModal } from '../actions';

export default function modalReducers(state = INIT_STATE.memberModal, action) {
  switch (action.type) {
    case getType(showMemberModal):
      return {
        isShow: true,
      };
    case getType(hideMemberModal):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}