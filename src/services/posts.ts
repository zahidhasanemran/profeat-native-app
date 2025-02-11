import {publicRequest} from '../configs/axios.config';

export async function getAllPosts(data: any) {
  const response = await publicRequest.get(`api/post/all`, data);
  return response?.data;
}

export async function getSinglePost(data: any) {
  const response = await publicRequest.post(`api/post/:id`, data);
  return response;
}
