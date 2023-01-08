import { combineReducers } from 'redux';
import groups from './groups';
import modal from './modal'
import members from'./members'
import memberModal from './memberModal.js'

export default combineReducers({
  groups,modal,members,memberModal

});