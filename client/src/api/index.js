import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchGroups = () => axios.get(`${URL}/groups`);


export const fetchMembers= (payload)=> axios.post(`${URL}/members`,payload);
export const createGroup = (payload) => axios.post(`${URL}/groups/add`, payload);
export const createPresentation = (payload) => axios.post(`${URL}/presentations/add`, payload);
export const addMember = (payload) => axios.post(`${URL}/members/add`, payload);

export const fetchPresentations=()=>axios.get(`${URL}/presentations`);

export const deleteGroup=(payload)=>axios.post(`${URL}/groups/delete`, payload);
export const deleteMember=(payload)=>axios.post(`${URL}/members/delete`, payload);
export const deletePresentation=(payload)=>axios.post(`${URL}/presentations/delete`, payload);
export const addSlider=(payload,id)=>axios.post(`${URL}/slider/${id}/add`,payload)
export const updateSlider=(payload,id)=>axios.put(`${URL}/slider/${id}/update`,payload)
export const fetchSliders = () => axios.get(`${URL}/slider`);
export const loginCustomer = (payload) => axios.post(`${URL}/customers/login`, payload);