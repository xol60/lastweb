import { combineReducers } from 'redux';
import groups from './groups';
import modal from './modal'
import members from'./members'

export default combineReducers({
  groups,modal,members

});