import axios from 'axios';

const URL = 'http://localhost:5003';

export const fetchGroups = () => axios.get(`${URL}/customers`);


export const fetchMembers= (payload)=> axios.post(`${URL}/members`,payload);
export const createGroup = (payload) => axios.post(`${URL}/groups`, payload);
export const createPresentation = (payload) => axios.post(`${URL}/presentations/add`, payload);
export const addMember = (payload) => axios.post(`${URL}/members/add`, payload);
export const loginCustomer = (payload) => axios.post(`${URL}/customers/login`, payload);
export const fetchPresentations=()=>axios.get(`${URL}/presentations`);
