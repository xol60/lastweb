import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getGroups = createActions({
  getGroupsRequest: undefined,
  getGroupsSuccess: (payload) => payload,
  getGroupsFailure: (err) => err,
});

export const getPresentations = createActions({
  getPresentationsRequest: undefined,
  getPresentationsSuccess: (payload) => payload,
  getPresentationsFailure: (err) => err,
});
export const createPresentation = createActions({
  createPresentationRequest: (payload) => payload,
  createPresentationSuccess: (payload) => payload,
  createPresentationFailure: (err) => err,
});

export const createGroup = createActions({
  createGroupRequest: (payload) => payload,
  createGroupSuccess: (payload) => payload,
  createGroupFailure: (err) => err,
});

export const updateGroup = createActions({
  updateGroupRequest: (payload) => payload,
  updateGroupSuccess: (payload) => payload,
  updateGroupFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_GROUP_MODAL');
export const hideModal = createAction('HIDE_CREATE_GROUP_MODAL');

export const showMemberModal = createAction('SHOW_ADD_MEMBER_MODAL');
export const hideMemberModal = createAction('HIDE_ADD_MEMBER_MODAL');

export const showPresentationModal = createAction('SHOW_CREATE_PRESENTATION_MODAL');
export const hidePresentationModal = createAction('HIDE_CREATE_PRESENTATION_MODAL');


export const getMembers = createActions({
  getMembersRequest: (payload) => payload,
  getMembersSuccess: (payload) => payload,
  getMembersFailure: (err) => err,
});
export const addMember = createActions({
  addMemberRequest: (payload) => payload,
  addMemberSuccess: (payload) => payload,
  addMemberFailure: (err) => err,
});
export const loginCustomer=createActions({
  loginCustomerRequest:(payload)=>payload,
  loginCustomerSuccess:(payload)=>payload,
  loginCustomerFailure:(err)=>err,
})