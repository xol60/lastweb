import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchGroupsSaga(action) {
  try {
    const groups = yield call(api.fetchGroups);
    console.log('[groups]',groups.data);
    yield put(actions.getGroups.getGroupsSuccess(groups.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getGroups.getGroupsFailure(err));
  }
}



function* createGroupSaga(action) {
  try {
    const group = yield call(api.createGroup, action.payload);
    yield put(actions.createGroup.createGroupSuccess(group.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createGroup.createGroupFailure(err));
  }
}
function* fetchMembersSaga(action) {
  try {
    const members = yield call(api.fetchMembers,action.payload);
    console.log('[groups]',members.data);
    yield put(actions.getMembers.getMembersSuccess(members.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getMembers.getMembersFailure(err));
  }
}

function * loginMemberSaga (action){
    try {
      const group = yield call(api.loginMember, action.payload);
      yield put(actions.loginMember.loginMemberSucess(group.data));
    } catch (err) {
      console.error(err);
      yield put(actions.loginMember.loginMemberFailure(err));
    }
}


function* mySaga() {
  yield takeLatest(actions.getGroups.getGroupsRequest, fetchGroupsSaga);
  yield takeLatest(actions.createGroup.createGroupRequest, createGroupSaga);
  yield takeLatest(actions.loginMember.loginMemberRequest, loginMemberSaga);
  yield takeLatest(actions.getMembers.getMembersRequest,fetchMembersSaga);
 
}

// generator function ES6

export default mySaga;