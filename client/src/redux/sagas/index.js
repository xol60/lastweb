
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchGroupsSaga(action) {
  try {
    const groups = yield call(api.fetchGroups);
    
    yield put(actions.getGroups.getGroupsSuccess(groups.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getGroups.getGroupsFailure(err));
  }
}
function* fetchPresentationsSaga(action) {
  try {
    const presentations = yield call(api.fetchPresentations);
    
    yield put(actions.getPresentations.getPresentationsSuccess(presentations.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPresentations.getPresentationsFailure(err));
  }
}
function* createGroupSaga(action) {
  try {
    const group = yield call(api.createGroup, action.payload);
    console.log(action.payload)
    yield put(actions.createGroup.createGroupSuccess(group.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createGroup.createGroupFailure(err));
  }
}
function* createPresentationSaga(action) {
  try {
    const group = yield call(api.createPresentation, action.payload);
    console.log(action.payload)
    yield put(actions.createPresentation.createPresentationSuccess(group.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPresentation.createPresentationFailure(err));
  }
}
function* fetchMembersSaga(action) {
  try {
    const members = yield call(api.fetchMembers,action.payload);
    console.log(members)
    yield put(actions.getMembers.getMembersSuccess(members.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getMembers.getMembersFailure(err));
  }
}
function* addMemberSaga(action) {
  try {
    const member = yield call(api.addMember, action.payload);
    console.log(action.payload)
    yield put(actions.addMember.addMemberSuccess(member.data));
  } catch (err) {
    console.error(err);
    yield put(actions.addMember.addMemberFailure(err));
  }
}
function* deleteGroupSaga(action) {
  try {
    
    const group = yield call(api.deleteGroup, action.payload);
   
    yield put(actions.deleteGroup.deleteGroupSuccess(group.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deleteGroup.deleteGroupFailure(err));
  }
}
function* deleteMemberSaga(action) {
  try {
    
    const member = yield call(api.deleteMember, action.payload);
   
    yield put(actions.deleteMember.deleteMemberSuccess(member.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deleteMember.deleteMemberFailure(err));
  }
}
function* deletePresentationSaga(action) {
  try {
    
    const presentation = yield call(api.deletePresentation, action.payload);
   
    yield put(actions.deletePresentation.deletePresentationSuccess(presentation.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deletePresentation.deletePresentationFailure(err));
  }
}
function* fetchSlidersSaga(action) {
  try {
    const groups = yield call(api.fetchSliders);
    console.log(groups.data)
    yield put(actions.getGroups.getGroupsSuccess(groups.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getGroups.getGroupsFailure(err));
  }
}

function* loginCustomerSaga(action) {
  try {
    const group = yield call(api.loginCustomer, action.payload);
    console.log(group)
    yield put(actions.loginCustomer.loginCustomerSuccess(group.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPresentation.createPresentationFailure(err));
  }
}
function* addSliderSaga(action) {
  try {
    const member = yield call(api.addSlider, action.payload);
    console.log(action.payload)
    yield put(actions.addSlider.addSliderCuccess(member.data));
  } catch (err) {
    console.error(err);
    yield put(actions.addSlider.addSliderFailure(err));
  }
}

function* updateSliderSaga(action) {
  try {
    const member = yield call(api.updateSlider, action.payload);
    console.log(action.payload)
    yield put(actions.updateSlider.updateSliderSuccess(member.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updateSlider.updateSliderFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getGroups.getGroupsRequest, fetchGroupsSaga);

  yield takeLatest(actions.createGroup.createGroupRequest, createGroupSaga);
  yield takeLatest(actions.createPresentation.createPresentationRequest, createPresentationSaga);
  yield takeLatest(actions.getMembers.getMembersRequest,fetchMembersSaga);
  yield takeLatest(actions.addMember.addMemberRequest,addMemberSaga);
  yield takeLatest(actions.getPresentations.getPresentationsRequest, fetchPresentationsSaga);
  yield takeLatest(actions.deleteGroup.deleteGroupRequest,deleteGroupSaga);
  yield takeLatest(actions.deleteMember.deleteMemberRequest,deleteMemberSaga);
  yield takeLatest(actions.deletePresentation.deletePresentationRequest,deletePresentationSaga);
   yield takeLatest(actions.loginCustomer.loginCustomerRequest, loginCustomerSaga);
   yield takeLatest(actions.addSlider.addSliderRequest,addSliderSaga);
   yield takeLatest(actions.updateSlider.updateSliderRequest,updateSliderSaga);
   yield takeLatest(actions.getSliders.getSlidersRequest, fetchSlidersSaga);
}

// generator function ES6

export default mySaga;