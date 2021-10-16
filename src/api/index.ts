import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPosts = (newPost: object) => axios.post(url, newPost)

export const updatePost = (id: number, updatedPost: object) => axios.patch(`${url}/${(id)}`, updatedPost)

export const deletePost = (id: number) => axios.delete(`${url}/${id}`);