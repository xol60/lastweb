import { combineReducers } from 'redux';
import groups from './groups';
import modal from './modal';
import members from'./members';
import presentations from'./presentations';
import memberModal from './memberModal.js';
import presentationModal from './presentationModal.js';

export default combineReducers({
  groups,modal,members,memberModal,presentations,presentationModal

});