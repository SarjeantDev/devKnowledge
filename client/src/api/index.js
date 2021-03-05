import axios from 'axios';

// url pointing to backend route
const url = 'https://devknowledge.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
// url you are sending to and the data that is being sent
export const createPost = (newPost) => axios.post(url, newPost);

// patch is the axios function for updating 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likepost`)
export const dislikePost = (id) => axios.patch(`${url}/${id}/dislikepost`)