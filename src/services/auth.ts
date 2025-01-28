import axios from 'axios';

export async function loggedIn(data: any) {
  const response = await axios.post(`http://localhost:8081`, data);
  return response;
}

export async function register(data: any) {
  const response = await axios.post(`http://localhost:8081`, data);
  return response;
}
