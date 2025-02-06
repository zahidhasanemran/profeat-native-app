import {publicRequest} from '../configs/axios.config';

export async function loggedIn(data: any) {
  const response = await publicRequest.post(`api/auth/login`, data);
  return response;
}

export async function register(data: any) {
  console.log(data);
  const response = await publicRequest.post(`api/auth/register`, data);
  return response;
}
