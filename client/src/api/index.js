import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchGroups = () => axios.get(`${URL}/customers`);


export const fetchMembers=(payload)=>axios.get(`${URL}/members`);
export const createGroup = (payload) => axios.post(`${URL}/groups`, payload);
