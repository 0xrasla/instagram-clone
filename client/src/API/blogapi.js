import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const createPost = (url, values) => api.post(url, values);

export const FetchApi = (url, values) => api.post(url, values);

export const deletePost = (url, values) => api.post(url, values);

const apis = {
  createPost,
  FetchApi,
  deletePost,
};

export default apis;
