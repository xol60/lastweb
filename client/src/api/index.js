import axios from 'axios';

const URL = 'http://localhost:5003';

export const fetchGroups = () => axios.get(`${URL}/customers`);


export const fetchMembers=(payload)=>axios.get(`${URL}/members`);
export const loginMember=(payload)=>axios.post(`${URL}/members/login`);
export const createGroup = (payload) => axios.post(`${URL}/groups`, payload);
